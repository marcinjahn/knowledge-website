---
title: Observables
description: Directives in Angular SPA framework
tags: angular, spa, js, ts, observable, rxjs
lang: en-US
---

# Observables in Angular

Observables are pretty similar to .NET's Events. The `Observable<T>` is a stream
of data that we can `subscribe()` to to get the latest values. This
functionality comes with the [rxJS](https://rxjs.dev/) package.

An `Observable<T>` might deliver 3 kinds of messages:

- data of type `T`
- error
- completion - signifies that this `Observable` will not deliver any more data

Observables can be finite, meaning the stream of data will eventually finish and
the observer(s) will be notified about that (HTTP request is an example of such
an Observable). Observables might also be inifinite and the completion will
never occur.

::: tip $ Postfix
In Angular, there is an unofficial convention to postfix variables representing
`Observable<T>` with a **$** sign. Additionally, often the last value of the
observable is stored in a variable called the same as the one holding the
`Observable<T>`, but without the "$" sign this time.

```ts
temperature$: Observable<number>;
temperature: number; // last value of temperature$
```
:::

## Built-in Observables

rxJS comes with a few built-in functions that create observables:

- `interval` - works similarly to JS's `setInterval`. We set the interval in
  milliseconds, incoming values are incresing, like in a counter (starting from
  0).

## Custom Observables

Here's how we can create our own Observables. This is a custom `interval`
implementation:

```ts
let customInterval = Observable.crete(observer => {
    let i = 0;
    setInterval(() => {
        observer.next(i++);
    }, 1000);
})

const sub = customInterval.subscribe(value => {
    console.log(value);
}

sub.unsubscribe();
```

## Operations

### Removing Subscription

Subscriptions stay for as long as the app lives. If we are no longer interested
in receiving values, we should exlicitly remove the subscription. Otherwise,
we'd have a memory leak.

```ts
// Create a subscrition
const subscription : Subscription = interval(1000).subscribe(
    value => console.log(value));

// Remove the subscription
subscription.unsubscribe();
```

In Angular, most often we will want to remove the subscription when some
component is no longer displayed. In such case, the component should implement
`OnDestroy`, which comes with the `ngOnDestroy` lifecycle hook. We should remove
subscription there.

::: tip Router
Angular's [Router](./routing.md) allows us to subscribe to various observables (e.g. `params`).
Exceptionally, we don't need to unsubscribe from them, because Angular will do
that for us in the background. Using `unsubscribe()` does not cause any harm
though.

[HttpClient](./http.md) has similar characteristics.
:::

### Error handling

Subscription can have have an error. For example, when doing an HTTP request. In
such a case the subscription "dies" and we do not have to call `unsubscribe()`
on it.

We can also handle errors by providing error handler as a second argument to
`subscribe()`.

```ts
const sub = someObservable.subsctibe(
    value => console.log(value),
    error => console.log(error)
);
```

Without handling errors explicitly, Observable will throw the error to the
console.

### catchError

We cna also use the `catchError` [operator](#operators). We can attach it once
to some observable, to include some error handling logic. It is useful when we
want to have some common error-handling logic. We can rethrow an error from
withing that operator with `throwError(...)`.

```ts
const observable = someObservable.catchError(e => {
    // log the error or whatever..
    throwError(e);
})

const sub1 = observable.subscribe(n => {
    // do somehting...
}, error =>{
    // handle error...
})

const sub2 = observable.subscribe(n => {
    // do something...
})
```

Like the example above shows, the individual subscribers can still attach their
own error handling logic. The "common" handler will always be fired first, and
then the error will be propagated to the subscribers.

### Completion

Observables can be finite. Here's how we can complete custom observables:

```ts{7}
let customInterval = Observable.crete(observer => {
    let i = 0;
    setInterval(() => {
        observer.next(i++);

        if(i >= 5) {
            observer.complete();
        }
    }, 1000);
})
```

Subscribers can be notified about completion via a third argument to the
`subscribe()` method:

```ts
const sub = someObservable.subsctibe(
    value => console.log(value),
    error => console.log(error),
    () => console.log('COMPLETE')
);
```

We don't need to `unsubscribe()` from completed subscriptions.

::: warning Error
In cases when subscription throws an error, completion will never occur.
:::

## Operators

We might want to somehow change the behaviour of some subscription. For example,
we might want to filter out some values, or maybe transform them into some other
data. This is where the **Operators** come in. They allow us to create new
Observables based on existing ones.

Here's an example:

```ts
const originalObservable = interval(1000);

const modifiedObservable = originalObservable
    .pipe(map(value: number => value + 1));

modifiedObservable.subscribe(val => console.log(val));
```

We apply operators with the `pipe()` function. We used the `map` operator. There
are lots more in the `rxjs/operators` import. For example:

- `filter` rejects values that do not conform to the provided predicate;
- `catchError` allows to handle error "globally" somehow and `throwError`
  (possible a new one) down the chain
- `take` - automatically completes the resulting `Observable` after receiving
  `n` items from it. We do not need to `unsubscribe()` from it, it will be
  handled automatically. It is useful when we want to get just one latest value
  of some `Observable` (like the `BehaviorSubject` described down below).
- `exhaustMap` similar to `map`, but accepts function that crosses boundaries (more on that in the *tip* below)

::: tip exhaustMap
An `Observable<T>` could be treated as a
[functor](../dotnet/functional/fundamentals.md#functors) and a
[monad](../dotnet/functional/fundamentals.md#monads).

The `map` operator is like a `Map` on a functor. It turns `Observable<T>` into
`Observable<U>` by accepting a function that turns a *regular value* `T` into a
regular value `U`.

The `exhaustMap` operator is like a `Bind` on a monad. It turns `Observable<T>`
into `Observable<U>` by accepting a function that turns a regular value `T`
into an *elevated value* - `Observable<U>`.
:::

::: tip Chaining
To chain a few operators sequentially, we can call `pipe()` multiple times, or
we can provide more operators as next arguments to `pipe()`.
:::

## Subject

rxjs comes with a special type of Observable - **Subject**. It is functionally
very similar to Angular's `EventEmitter<T>`. Reportedly, it's more performant
though and it's recommended to always use **Subject**.

::: warning @Output
`EventEmitter<T>` is still needed when we're dealing with `@Outputs`! `Subjects`
are usable only when we control both the producer and the consumer sides.
:::

```ts
const mySubject = new Subject<number>();

// Emit
mySubject.next(5);

// Subscribe
const sub = mySubject.subscribe(value => {
    // do something...
})

//Unsubscribe
sub.unsubscribe();
```

::: tip Operators
We can use [operators](#operators) on `Subjects`, we can't do that with
`EventEmitter`.
:::

::: tip BehaviorSubject
There's also another variant of `Subject` called `BehaviorSubject`. It comes
with an additional feature - the subscriber is always able to read the last
value of the Subject, even if it subscribes after that value was published.
It needs to be initialized via constructor with some initial value.
:::