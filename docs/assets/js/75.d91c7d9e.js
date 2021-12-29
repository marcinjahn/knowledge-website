(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{484:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"lifetimes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lifetimes"}},[t._v("#")]),t._v(" Lifetimes")]),t._v(" "),e("p",[t._v("References have their lifetimes, which define a scope for when a reference is\nvalid. Lifetimes can be implicitly infered but sometimes we need to specify them\nexplicitly. The main aim of lifetimes is to "),e("strong",[t._v("prevent dangling references")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Validity of lifetimes is checked during compilation by the "),e("strong",[t._v("borrow checker")]),t._v(".")])]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ---------+-- 'a")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//          |")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//          |")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -+-- 'b  |")]),t._v("\n    r "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  |       |")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -+       |")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//          |")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r: {}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//          |")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ---------+")]),t._v("\n")])])]),e("p",[t._v("The program will not compile, because we're trying to print reference "),e("code",[t._v("r")]),t._v(", which\npoints to "),e("code",[t._v("x")]),t._v(" that already went out of scope (its lifetime "),e("code",[t._v("'b")]),t._v(" is over).")]),t._v(" "),e("h2",{attrs:{id:"lifetime-elision"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lifetime-elision"}},[t._v("#")]),t._v(" Lifetime Elision")]),t._v(" "),e("p",[t._v("Not all usages of references require explicit lifetime annotations. There are\nsome situations where the compiler is able to infer the proper lifetimes on its\nown.")]),t._v(" "),e("p",[t._v("There are three rules of how compiler infers lifetimes. They apply to functions\nand methods:")]),t._v(" "),e("ol",[e("li",[t._v("Each parameter that is a reference gets its own lifetime parameter.")]),t._v(" "),e("li",[t._v("If there is exactly one input parameter, its lifetime is assigned to all\noutput parameters (that's one functions with one parameter don't need\nlifetime specifications).")]),t._v(" "),e("li",[t._v("If there are multiple input parameters, but one of them is "),e("code",[t._v("&self")]),t._v(" or "),e("code",[t._v("mut &self")]),t._v(" (so, it's a method), the lifetime of "),e("code",[t._v("self")]),t._v(" is alligned to all output\nparameters.")])]),t._v(" "),e("p",[t._v("If after applying these rules there are still some references left without\nlifetime information, compilation will fail and explicit lifetime information\nwill be required.")]),t._v(" "),e("h2",{attrs:{id:"lifetime-annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lifetime-annotations"}},[t._v("#")]),t._v(" Lifetime Annotations")]),t._v(" "),e("p",[t._v("Lifetime annotations describe the relationships of the lifetimes of multiple\nreferences to each other without affecting the lifetimes.")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a reference")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a reference with an explicit lifetime")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a mutable reference with an explicit lifetime")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("'a")]),t._v(" is a common naming convention for lifetimes. It could be some word too.")])]),t._v(" "),e("h3",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("p",[t._v("Lifetime annotations in functions have meaning only when multiple types have\nannotations. Then the compiler can understand if some bindings have the same or\ndifferent lifetimes.")]),t._v(" "),e("p",[t._v("Here's a function that will not compile due to lack of lifetime annotations:")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("longest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    y\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The compiler needs to know how the returned reference is related to the parameters\nof the function.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When returning a reference from a function, it has to be one of the references\npassed as arguments of the function. Otherwise, the reference would have to be\ncreated from some local function's variable. The returned value would be a\ndangling pointer!")]),t._v(" "),e("p",[t._v("What if I want to return a reference to some global/static value? Isn't it allowed?")])]),t._v(" "),e("p",[t._v("Here's a valid version:")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("longest")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    y\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Generics")]),t._v(" "),e("p",[t._v("Lifetimes are defined similarly to generic types.")])]),t._v(" "),e("p",[t._v("Potentially, the compiler could infer the lifetime knowledge from the code\nitself - since I'm returning either "),e("code",[t._v("x")]),t._v(" or "),e("code",[t._v("y")]),t._v(", probably the lifetime of the\nresult should be the smallest common lifetime of these. However, that would bind\nthe lifetime of the result with that particular implementation! If I, as an\nauthor of that function, change this implementation one day to always return\n"),e("code",[t._v("x")]),t._v(", the lifetime infered by the compiler will change! It could than break some\ncode of clients of this function. That's why Rust requires us to specify the\nlifetime information explicitly.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When returning a reference from a function, the lifetime parameter for the\nreturn type needs to match the lifetime parameter for one of the parameters.")])]),t._v(" "),e("p",[t._v("Since the function can return either "),e("code",[t._v("x")]),t._v(" or "),e("code",[t._v("y")]),t._v(" reference, the lifetime of both\nthe parameters and the return value will be the same - "),e("code",[t._v("'a")]),t._v(". The function\nsignature now tells Rust that for some lifetime "),e("code",[t._v("'a")]),t._v(", the function takes two\nparameters, both of which are string slices that live at least as long as\nlifetime "),e("code",[t._v("'a")]),t._v(". Additionally, the string slice returned from the function will\nlive at least as long as lifetime "),e("code",[t._v("'a")]),t._v(".")]),t._v(" "),e("p",[t._v("When we pass concrete references to "),e("code",[t._v("longest")]),t._v(", the concrete lifetime that is\nsubstituted for "),e("code",[t._v("'a")]),t._v(" is the part of the scope of "),e("code",[t._v("x")]),t._v(" that overlaps with the\nscope of "),e("code",[t._v("y")]),t._v(". In other words, the generic lifetime "),e("code",[t._v("'a")]),t._v(" will get the concrete\nlifetime that is "),e("strong",[t._v("equal to the smaller of the lifetimes of "),e("code",[t._v("x")]),t._v(" and "),e("code",[t._v("y")])]),t._v(".\nBecause we’ve annotated the returned reference with the same lifetime parameter\n"),e("code",[t._v("'a")]),t._v(", the returned reference will also be valid for the length of the smaller of\nthe lifetimes of "),e("code",[t._v("x")]),t._v(" and "),e("code",[t._v("y")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When we specify the lifetime parameters in the function signature, "),e("strong",[t._v("we’re not\nchanging the lifetimes")]),t._v(" of any values passed in or returned. Rather, we’re\nspecifying that the borrow checker should reject any values that don’t adhere to\nthese constraints.")])]),t._v(" "),e("h4",{attrs:{id:"using-a-function-with-lifetimes-defined"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-function-with-lifetimes-defined"}},[t._v("#")]),t._v(" Using a function with lifetimes defined")]),t._v(" "),e("p",[t._v("Here're examples of how lifetimes help in enforcing proper usage of references\nin terms of scope:")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" string1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"long string is long"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" string2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xyz"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("longest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("as_str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("as_str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The longest string is {}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GOOD")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("In the code above, "),e("code",[t._v("string2")]),t._v(" has shorter lifetime than "),e("code",[t._v("string1")]),t._v(". It means that\nthe lifetime of "),e("code",[t._v("result")]),t._v(" will end at the same time as "),e("code",[t._v("string2")]),t._v("'s. Since we're\nusing "),e("code",[t._v("result")]),t._v(" when the lifetime is still valid, the code compiles and runs.")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" string1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"long string is long"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" string2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xyz"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("longest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("as_str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("as_str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The longest string is {}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("In the code above, the situation is similar, however, we're trying to use (print)\n"),e("code",[t._v("result")]),t._v(" outside of the inner scope, when the lifetime of "),e("code",[t._v("string2")]),t._v(" is already\nover. Since the lifetime of "),e("code",[t._v("result")]),t._v(" is the same as that of "),e("code",[t._v("string2")]),t._v(", "),e("code",[t._v("result")]),t._v("\ncannot be used at this point. The code fails to compile.")]),t._v(" "),e("h3",{attrs:{id:"structs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#structs"}},[t._v("#")]),t._v(" Structs")]),t._v(" "),e("p",[t._v("If a struct contains references as fields, they all need to have lifetime\nannotations.")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("ImportantExcerpt")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    part"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" langs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rust,js,c#"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" first_lang "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" novel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token char string"}},[t._v("','")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Could not find a ','\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImportantExcerpt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    part"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" first_lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This annotation means an instance of "),e("code",[t._v("ImportantExcerpt")]),t._v(" can’t outlive the\nreference it holds in its "),e("code",[t._v("part")]),t._v(" field.")]),t._v(" "),e("h4",{attrs:{id:"struct-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#struct-methods"}},[t._v("#")]),t._v(" Struct Methods")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImportantExcerpt")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("announce_and_return_part")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" announcement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Attention please: {}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" announcement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("part\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Thanks to the "),e("a",{attrs:{href:"#lifetime-elision"}},[t._v("elision rules")]),t._v(" we don't have to annotate the\nmethod explicitly. The lifetime of the output "),e("code",[t._v("&str")]),t._v(" is the same as the lifetime\nof the object ("),e("code",[t._v("&self")]),t._v(").")]),t._v(" "),e("h2",{attrs:{id:"static-lifetime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-lifetime"}},[t._v("#")]),t._v(" Static Lifetime")]),t._v(" "),e("p",[t._v("There is a special lifetime - "),e("code",[t._v("'static")]),t._v(' - which marks a value pointed by a\nreference to be "alive" during the entire execution of the program.')]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("String Literals")]),t._v(" "),e("p",[t._v("All string literals have "),e("code",[t._v("'static")]),t._v(" lifetime. We can annotate them explicitly:")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Explicit static lifetime"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Implicit static lifetime"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The texts are stored directly in program's binary.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);