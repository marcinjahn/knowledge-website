(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{563:function(t,e,s){"use strict";s.r(e);var a=s(22),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"angular-tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#angular-tips"}},[t._v("#")]),t._v(" Angular Tips")]),t._v(" "),s("h2",{attrs:{id:"global-styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-styles"}},[t._v("#")]),t._v(" Global Styles")]),t._v(" "),s("p",[t._v("Other than adding styles to "),s("code",[t._v("src/styles.css")]),t._v(", we can also load any other CSS\nfiles by listing them in the "),s("code",[t._v("angular.json")]),t._v(" file. We should add them to the\n"),s("code",[t._v("projects.{project-name}.architect.build.options.styles")]),t._v(" array. This way, we can\napply Bootstrap or some other framework styling.")]),t._v(" "),s("p",[t._v("By the way, the forementioned "),s("code",[t._v("src/styles.css")]),t._v(" is also listed there. That's how\nit gets loaded.")]),t._v(" "),s("h2",{attrs:{id:"references-to-html-elements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references-to-html-elements"}},[t._v("#")]),t._v(" References to HTML Elements")]),t._v(" "),s("p",[t._v("We can mark any HTML element with a reference to be able to access it easily\nfrom somewhere else.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Renderer2")]),t._v(" "),s("p",[t._v("It's recommened to use "),s("a",{attrs:{href:"#renderer2"}},[t._v("Renderer2")]),t._v(" instead of accessing the DOM\ndirectly.")])]),t._v(" "),s("p",[t._v("Here's an example:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#paragraph")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Paragraph"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("(click)")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onClick(paragraph)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Click it"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("We're able to pass a reference to a "),s("code",[t._v("<p>")]),t._v(" element when clicking a button.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Only Template")]),t._v(" "),s("p",[t._v("This way, we can access references only from the template!\nWe can't access them from the TS code. Read on to learn how\nto achieve the latter.")])]),t._v(" "),s("h3",{attrs:{id:"viewchild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewchild"}},[t._v("#")]),t._v(" @ViewChild")]),t._v(" "),s("p",[t._v("Building on top the defined HTML element reference, we can add this to our\ncomponent's TypeScript code:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ViewChild")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" paragraph"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ElementRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to access the HTMLElement:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nativeElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" paragraph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If we're about to access the reference from "),s("code",[t._v("ngOnInit")]),t._v(" "),s("RouterLink",{attrs:{to:"/programming/javascript/angular/components.html#component-lifecycle"}},[t._v("lifecycle\nhook")]),t._v(", the "),s("code",[t._v("@ViewChild")]),t._v(" decorator requires\nthe "),s("code",[t._v("{ static: true }")]),t._v(" argument as well:")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ViewChild")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" paragraph"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ElementRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("(Btw, why would we access DOM in "),s("code",[t._v("ngOnInit")]),t._v("? The elements are not initialized\nyet...)")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("We can also access other components or directives this way with:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ViewChild")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SomeComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" someComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("It will be a reference to the first usage of "),s("code",[t._v("SomeComponent")]),t._v(" within the current\ncomponent's template.")])]),t._v(" "),s("h2",{attrs:{id:"encapsulated-styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encapsulated-styles"}},[t._v("#")]),t._v(" Encapsulated Styles")]),t._v(" "),s("p",[t._v('Styles of comonents are encapsulated and they are applied ONLY to the component\nto which the styles are attached. This is a cool feature that is missing from\nVue.js (Angular has to better at something!) By default, Angular does it in an\n"Emulated" way by attaching custom attributes to HTML elements that belong to\nthe component and by modifying the styles\' selectors to narrow down the scope of\nthe style. '),s("a",{attrs:{href:"https://angular.io/guide/view-encapsulation",target:"_blank",rel:"noopener noreferrer"}},[t._v("There's also a way"),s("OutboundLink")],1),t._v(" to\ndo it via "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shadow\nDOM"),s("OutboundLink")],1),t._v(",\nbut that's not supported by some of the browsers.")]),t._v(" "),s("h2",{attrs:{id:"renderer2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renderer2"}},[t._v("#")]),t._v(" Renderer2")]),t._v(" "),s("p",[t._v("It is recommended to use "),s("code",[t._v("Renderer2")]),t._v(" to access DOM elements instead of doing it\nvia "),s("a",{attrs:{href:"#references-to-html-elements"}},[t._v("references")]),t._v(". This is safer in environments\nsuch as Service Worker, server or mobile.")]),t._v(" "),s("p",[t._v("We can inject it into our classes and use as follows:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeClass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ViewChild")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'el'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" elRef"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ElementRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or injected into the constructor in a directive")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" renderer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Renderer2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/angular-using-renderer2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Renderer2 on\nDigitalOcean"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);