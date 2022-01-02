(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{409:function(t,s,e){t.exports=e.p+"assets/img/inifinite-struct-size.8a4fecf5.png"},410:function(t,s,e){t.exports=e.p+"assets/img/struct-of-known-size.da2e858c.png"},411:function(t,s,e){t.exports=e.p+"assets/img/graph-with-rc.db26ad4c.png"},492:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"smart-pointers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-pointers"}},[t._v("#")]),t._v(" Smart Pointers")]),t._v(" "),a("p",[t._v("The most common kind of pointer in Rust is a "),a("strong",[t._v("reference")]),t._v(". "),a("strong",[t._v("Smart Pointers")]),t._v("\nnot only act like pointers but also have additional metadata and capabilities,\nlike reference counting. There are a few types of smart pointers in Rust.")]),t._v(" "),a("p",[t._v("References borrow data, while smart pointers often own the data.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("String")]),t._v(" and "),a("code",[t._v("Vec<T>")]),t._v(" are smart pointers! They own some memory and can\nmanipulate it. They have metadata (like capacity).")])]),t._v(" "),a("p",[t._v("There are some built-in smart pointers add there are many in crates. We can\nwrite our smart pointers as well.")]),t._v(" "),a("h2",{attrs:{id:"traits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#traits"}},[t._v("#")]),t._v(" Traits")]),t._v(" "),a("p",[t._v("Smart pointers are usually structs. They implement "),a("code",[t._v("Deref")]),t._v(" and "),a("code",[t._v("Drop")]),t._v(" traits.")]),t._v(" "),a("h3",{attrs:{id:"deref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deref"}},[t._v("#")]),t._v(" Deref")]),t._v(" "),a("p",[a("code",[t._v("Deref")]),t._v(" allows an instance of a struct to behave like a reference, so consuming\ncode can work either with references or smart pointers. It does it by allowing\ncustomizing the behavior of the "),a("em",[t._v("dereference operator")]),t._v(" ("),a("code",[t._v("*")]),t._v(").")]),t._v(" "),a("p",[t._v("Here's an example of how dereferencing may be used with smart pointers, same as\nwith "),a("RouterLink",{attrs:{to:"/programming/rust/ownership.html#dereferencing"}},[t._v("references")]),t._v(":")],1),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compiler calls *(y.deref()) behind the scenes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Deref")]),t._v(" trait has one method - "),a("code",[t._v("deref()")]),t._v(" - it should return a "),a("code",[t._v("&")]),t._v("\n(immutable) reference. By using "),a("code",[t._v("*")]),t._v(", compiler calls "),a("code",[t._v("deref()")]),t._v(" behind the\nscenes to get a reference, and then it knows how to get value behind that\nreference.")]),t._v(" "),a("h4",{attrs:{id:"deref-coersion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deref-coersion"}},[t._v("#")]),t._v(" Deref Coersion")]),t._v(" "),a("p",[t._v("Rust can automatically dereference values to proper types if possible. For\nexample, if a function expects "),a("code",[t._v("&str")]),t._v(" we can pass it "),a("code",[t._v("&String")]),t._v(". The compiler\nwill call "),a("code",[t._v("defer()")]),t._v(" on the "),a("code",[t._v("&String")]),t._v(" to get "),a("code",[t._v("&str")]),t._v(". Compiler can call "),a("code",[t._v("deref()")]),t._v("\nas many times as needed until the proper type is found. E.g., if we had\n"),a("code",[t._v("Box<String>")]),t._v(" it would have to call "),a("code",[t._v("deref()")]),t._v(" twice:")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("&Box<String>")]),t._v(" -> "),a("code",[t._v("&String")]),t._v(" -> "),a("code",[t._v("&str")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("DerefMut")]),t._v(" "),a("p",[t._v("Similar to "),a("code",[t._v("Deref")]),t._v(" is the "),a("code",[t._v("DerefMut")]),t._v(" trait. It enables resolving of mutable\nreferences "),a("code",[t._v("mut&")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"drop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drop"}},[t._v("#")]),t._v(" Drop")]),t._v(" "),a("p",[a("code",[t._v("Drop")]),t._v(" allows writing code that will be run when the a type goes out of scope.\nE.g. it could release some resources like files or connections. It is similar to\n"),a("code",[t._v("IDisposable")]),t._v(" interface in the .NET world. In the case of smart pointers, "),a("code",[t._v("Drop")]),t._v("\nwill deallocate the memory on the heap.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Drop")]),t._v(" trait has one method - "),a("code",[t._v("drop()")]),t._v(". Compiler will call it automatically\nwhen the value goes out of scope.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Dropping manually")]),t._v(" "),a("p",[t._v("If we need to destruct an instance before its end of scope, we can call\n"),a("code",[t._v("drop(instance)")]),t._v(". It's not the same "),a("code",[t._v("drop()")]),t._v(" as the one implemented via the\n"),a("code",[t._v("Drop")]),t._v(" trait! Calling that one explicitly is not allowed.")])]),t._v(" "),a("h2",{attrs:{id:"box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box"}},[t._v("#")]),t._v(" Box")]),t._v(" "),a("p",[t._v("It's the most straightforward smart pointer. It allows storing data on the\nheap instead of the stack. Only the pointer stays on the stack.")]),t._v(" "),a("h3",{attrs:{id:"storing-data-on-the-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storing-data-on-the-heap"}},[t._v("#")]),t._v(" Storing Data on the Heap")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5 is on the heap")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b = {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("When "),a("code",[t._v("b")]),t._v(" goes out of scope, both the "),a("code",[t._v("Box")]),t._v(" and "),a("code",[t._v("i32")]),t._v(" it points to get\ndeallocated.")]),t._v(" "),a("h3",{attrs:{id:"recursive-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recursive-types"}},[t._v("#")]),t._v(" Recursive Types")]),t._v(" "),a("p",[t._v("Data on the stack needs to be of a known size. Not all values are. Recursive\ntypes can infinitely contain other values of the same type - they are of unknown\nsize. They should be stored on the heap.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("This enum does not compile; its size is unknown.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(409),alt:""}})]),t._v(" "),a("p",[t._v("Here's a version with a "),a("code",[t._v("Box<T>")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Only the "),a("code",[t._v("i32")]),t._v(" 1 and the first "),a("code",[t._v("Box<T>")]),t._v(" are stored on the stack. The rest is on\nthe heap:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(410),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"rc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc"}},[t._v("#")]),t._v(" Rc")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Rc<T>")]),t._v(" smart pointer enables multiple ownership - owning a value by\nmultiple bindings. "),a("em",[t._v("Rc")]),t._v(" stands for "),a("em",[t._v("reference counting")]),t._v(". "),a("code",[t._v("Rc<T>")]),t._v(" keeps track of\nthe number of references to a value. If there are none, the value can be cleaned\nup safely. "),a("code",[t._v("Rc<T>")]),t._v(' is useful when multiple actors in our program will read the\ndata, but we don\'t know which one will be the last to do that. Otherwise, we\ncould use the "normal" ownership concepts. '),a("code",[t._v("Rc")]),t._v(" allows to have multiple\n"),a("strong",[t._v("immutable references")]),t._v(". Mutable references would bring chaos.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Multi-threading")]),t._v(" "),a("p",[a("code",[t._v("Rc<T>")]),t._v(" is only for single-threaded scenarios!")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Graphs")]),t._v(" "),a("p",[a("code",[t._v("Rc<T>")]),t._v(" is useful in graph-like structures where nodes may be pointed at by\nmultiple other nodes.")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("crate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("rc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("]"),a("img",{attrs:{src:e(411),alt:""}})]),t._v(" "),a("p",[t._v("There are 3 references to "),a("code",[t._v("a")]),t._v(", all of them encapsulated within "),a("code",[t._v("Rc")]),t._v('.\nThe value will "live" as long as any '),a("code",[t._v("Rc")]),t._v(" instance still points to it.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Performance")]),t._v(" "),a("p",[a("code",[t._v("clone()")]),t._v(" on "),a("code",[t._v("Rc")]),t._v(" is cheap. It just increments reference count. It's cheaper to\nclone "),a("code",[t._v("Rc")]),t._v(" than to clone the actual value that "),a("code",[t._v("Rc")]),t._v(" points to.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Check count")]),t._v(" "),a("p",[t._v("We can check the current reference count of "),a("code",[t._v("Rc")]),t._v(" with "),a("code",[t._v("Rc::strong_count(&a)")]),t._v(",\nwhere "),a("code",[t._v("&a")]),t._v(" is a reference to an actual instance of "),a("code",[t._v("Rc")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"weak"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weak"}},[t._v("#")]),t._v(" Weak")]),t._v(" "),a("p",[a("code",[t._v("Rc")]),t._v(" allows to create two types of smart pointers:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Rc::clone(&a)")]),t._v(" - strong reference ("),a("code",[t._v("Rc<T>")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("Rc::downgrade(&a)")]),t._v(" - weak reference ("),a("code",[t._v("Weak<T>")]),t._v(")")])]),t._v(" "),a("p",[t._v("Weak references do not increment the "),a("code",[t._v("strong_count")]),t._v(", they increment\n"),a("code",[t._v("weak_count")]),t._v(". The "),a("code",[t._v("weak_count")]),t._v(" does not need to be 0 for the value being\nreferred to to be dropped.")]),t._v(" "),a("p",[t._v("Since the value begind "),a("code",[t._v("Weak<T>")]),t._v(" is uncertain it needs to be retrieved using\nthe "),a("code",[t._v("upgrade()")]),t._v(" method that returns "),a("code",[t._v("Option<T>")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Reference Cycles")]),t._v(" "),a("p",[a("code",[t._v("Weak")]),t._v(" is useful for protection agains reference cycles. If some node referes to\nanother via "),a("code",[t._v("Rc")]),t._v(", it's a strong connection. If the other node needs to have a\nreference to the first one as well, it would use "),a("code",[t._v("Weak")]),t._v(". That way, the\n"),a("code",[t._v("strong_count")]),t._v(" stays at 1 and the nodes can be dropped when they go out of\nscope.")]),t._v(" "),a("p",[a("code",[t._v("Weak")]),t._v(" is useful in graphs as an alternative of "),a("code",[t._v("Rc")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"refcel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refcel"}},[t._v("#")]),t._v(" RefCel")]),t._v(" "),a("p",[t._v("Here are the borrowing rules in Rust:")]),t._v(" "),a("ul",[a("li",[t._v("At any given time, you can have either (but not both of) one mutable reference\nor any number of immutable references.")]),t._v(" "),a("li",[t._v("References must always be valid.")])]),t._v(" "),a("p",[t._v("With references and "),a("code",[t._v("Box<T>")]),t._v(", the borrowing rules are enforced at compile time.\nWith "),a("code",[t._v("RefCell<T>")]),t._v(", these invariants are enforced at runtime. With references, if\nyou break these rules, you’ll get a compiler error. With "),a("code",[t._v("RefCell<T>,")]),t._v(" if you\nbreak these rules, your program will panic and exit.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why?")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("RefCell<T>")]),t._v(" type is useful when you’re sure your code follows the borrowing\nrules but the compiler is unable to understand and guarantee that.")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Multi-threading")]),t._v(" "),a("p",[a("code",[t._v("Rc<T>")]),t._v(" is only for single-threaded scenarios!")])]),t._v(" "),a("p",[t._v("Because "),a("code",[t._v("RefCell<T>")]),t._v(" allows mutable borrows checked at runtime, you can mutate\nthe value inside the "),a("code",[t._v("RefCell<T>")]),t._v(" even when the "),a("code",[t._v("RefCell<T>")]),t._v(" is immutable. This\nis "),a("strong",[t._v("interior mutability")]),t._v(" pattern.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Interior mutability")]),t._v(" is a design pattern in Rust that allows you to mutate\ndata even when there are immutable references to that data. Normally, it's\ndisallowed by borrowing rules.")])]),t._v(" "),a("p",[t._v("Here's an example of practical usage of "),a("code",[t._v("RefCell")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("MockMessenger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sent_messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefCell")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockMessenger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockMessenger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockMessenger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sent_messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefCell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Messenger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockMessenger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sent_messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("borrow_mut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("send()")]),t._v(" message has an immutable reference to "),a("code",[t._v("self")]),t._v(", because it makes\nsense from the client perspective of that method. Normally, sending data should\nnot modify the state of the sender object. However, our implementation is some\nmock that is supposed to keep every call to "),a("code",[t._v("send()")]),t._v(" for verification later on.\n"),a("code",[t._v("RefCell")]),t._v(" comes into the picture. We can use it as a pointer to a "),a("code",[t._v("Vec")]),t._v(" that\nstores the invocations. We can get a mutable reference to that vector with\n"),a("code",[t._v("borrow_mut()")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("RefCell")]),t._v(" also allows to get an immutable reference using "),a("code",[t._v("borrow()")]),t._v(".")])]),t._v(" "),a("p",[a("code",[t._v("RefCell")]),t._v(" keeps track of how many mutable and immutable references were taken\nout of it. "),a("code",[t._v("RefCell")]),t._v(", following the borrowing rules still allows multiple\nimmutable references or only one mutable reference at a time! Breaking these\nrules results in a panic (at runtime).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("We can combine the capabilities of "),a("code",[t._v("Rc")]),t._v(" and "),a("code",[t._v("RefCell")]),t._v(" to be able to get\n"),a("strong",[t._v("multiple owners")]),t._v(" of "),a("strong",[t._v("mutable")]),t._v(" data. An example is\n"),a("a",{attrs:{href:"https://doc.rust-lang.org/book/ch15-05-interior-mutability.html#having-multiple-owners-of-mutable-data-by-combining-rct-and-refcellt",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=n.exports}}]);