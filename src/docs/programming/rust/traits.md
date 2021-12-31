---
title: Traits
description: Traits in Rust
lang: en-US
---

# Traits

A **trait** is analogous to an interface or protocol from other languages. It
enables types to advertise that they use some common behaviour (**methods**).

All of Rust's operations are defined with traits. E.g., aaddition (`+`) is
defined as the `std::ops::Add` trait. Operators are just syntactic sugar for
traits' methods.

`a + b` = `a.add(b)`

## Defining a Trait

Here's an example of a trait that contains a `summarize` method. Any type that
has this trait needs to implement such a method.

```rust
pub trait Summary {
  fn summarize(&self) -> String;
}
```

We can also provide a default implementation:

```rust
pub trait Summary {
  fn summarize(&self) -> String {
    String::from("(Read more...)")
  }
}
```

::: tip 
Default implementation can call other methods of the same trait (even if
they don't have default implementations).
:::

## Implementing Traits

A type may implement a trait as follows:

```rust
// type itself
pub struct Tweet {
  pub username: String,
  pub content: String,
  pub reply: bool,
  pub retweet: bool,
}

//Summary trait implementation
impl Summary for Tweet {
  fn summarize(&self) -> String {
    format!("{}: {}", self.username, self.content)
  }
}
```

::: tip
We can implement traits only if either the type or trait are local
to our crate. We can implement traits on existing third-party types!
:::

To use a trait that has some default implementation (without overwriting it), we
can do it as follows:

```rust
impl Summary for Tweet {}
```

Or we could overwrite it, the same way as implementing a trait.

::: warning
Overriding implementation of a trait cannot call the default implementation.
:::

### Blanket Implementations

We can define methods for any type that implements some trait. It is similiar
to **extensions in C#**.

Rust does it with the `ToString` method, like this:

```rust
impl<T: Display> ToString for T {
  // ...
}
```

Thanks to it, any type that implement the `Display` trait has the `ToString` method

## Using Traits

### Function Parameter

Here's a function that expects any object that implements a `Summary` trait:

```rust
pub fn notify(item: &impl Summary) {
  println!("Breaking news! {}", item.summarize());
}
```

or a full generic form:

```rust
pub fn notify<T: Summary>(item: &T) {
  println!("Breaking news! {}", item.summarize());
}
```

::: tip Multiple Traits
A function can also require more than one trait to be implemented on its parameter:

```rust
pub fn notify(item: &(impl Summary + Display)) {}
```

or

```rust
pub fn notify<T: Summary + Display>(item: &T) {}
```

or

```rust
pub fn notify<T>(item: &T) where T: Summary + Display {}
```
:::

### Function Return Value

Functions can return types and specify just the trait of these types:

```rust
fn returns_summarizable() -> impl Summary {
    // return anything that implements Summary
}
```

::: warning
A function defined as the one above can return only **one type**. It
cannot return either one implementation or another.
:::

## Derivable Traits

Some traits (in the standard library and third party) have sensible default
implementations and they can be implemented on a type just by adding an
annotation `#[derive(SomeTrait)]`.

Here are the ones from the standard library:

### Debug

Writing `#[derive(Debug)]` before struct's definition makes that struct
printable in debug mode (`print!("{}", instance)`).

Another way to debug print is with the use of `dbg!(&instance)`.

### PartialEq and Eq

`PartialEq` allows checking equality with the `==` and `!=` operators.
Underneath there's just the `eq` method. The default implementation checks all
fields of a struct if they're equal.

The `Eq` trait has no methods. ?

### PartialOrd and Ord

Allows comparisons with the `>`, `<`, `>=`, `<=` operators. It can only be
applied to types that implement `PartialEq` as well.

In structs, all fields are checked.

### Clone

Allows creation of deep copy of a value. Default implementation calls `clone()`
on each field of the type. Cloning might involve copying heap data.

### Copy

Allows to copy a value on a stack. All types that implement `Copy` must also
implement `Clone`.

### Hash

Allows to create some hash of an instance. The default implementation combines
resuts of `hash()` of all the fields of a struct.

### Default

Allows to create a default value for a type. It provides a `default()` function.