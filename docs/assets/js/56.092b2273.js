(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{542:function(t,e,s){"use strict";s.r(e);var a=s(22),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"modules-in-angular"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-in-angular"}},[t._v("#")]),t._v(" Modules in Angular")]),t._v(" "),s("p",[t._v("Modules are a way of bundling various Angular entities together:")]),t._v(" "),s("ul",[s("li",[t._v("components,")]),t._v(" "),s("li",[t._v("directives,")]),t._v(" "),s("li",[t._v("services,")]),t._v(" "),s("li",[t._v("pipes.")])]),t._v(" "),s("p",[t._v("A proper organization of code between modules results in:")]),t._v(" "),s("ul",[s("li",[t._v("feature separation")]),t._v(" "),s("li",[t._v("better performance (when lazy loading is used)")])]),t._v(" "),s("p",[t._v("Angular itself bundles its various parts into modules. Here are some examples:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("RouterModule")])]),t._v(" "),s("li",[s("code",[t._v("FormsModule")])]),t._v(" "),s("li",[s("code",[t._v("BrowserModule")]),t._v(" and "),s("code",[t._v("CommonModule")]),t._v(" - things like "),s("code",[t._v("ngFor")]),t._v(" or "),s("code",[t._v("ngIf")]),t._v(" directives\nare there!")]),t._v(" "),s("li",[s("code",[t._v("HttpClientModule")]),t._v(" - it only provides services")])]),t._v(" "),s("h2",{attrs:{id:"ngmodule-decorator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngmodule-decorator"}},[t._v("#")]),t._v(" ngModule Decorator")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("NgModule")]),t._v(" decorator has the following options:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("declarations")]),t._v(" - here, we register all the "),s("strong",[t._v("components")]),t._v(", "),s("strong",[t._v("directives")]),t._v(", and\n"),s("strong",[t._v("pipes")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("A single entity may only be declared once! Two or more modules can't declare the same thing.")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("imports")]),t._v(" - here, we pull in other modules (or other things if "),s("RouterLink",{attrs:{to:"/programming/angular/standalone-components.html"}},[t._v("Standalone\nComponents")]),t._v(" are being used), either provided by\nexternal parties (e.g. Angular itself) or our own modules.")],1)]),t._v(" "),s("li",[s("p",[s("strong",[t._v("exports")]),t._v(" - a way to expose some entities to the other modules (those that\nwill import the current module). E.g., if I export "),s("code",[t._v("RouterModule")]),t._v(" from\n"),s("code",[t._v("SomeModule")]),t._v(", any module that imports "),s("code",[t._v("SomeModule")]),t._v(" may use "),s("code",[t._v("RouterModule")]),t._v("'s\nfeatures (e.g., its directives). We can export imports and\ndeclarations: modules, components, directives, pipes. Export only those\nentities that you want to be usable in entities (like components) declared in\nother modules.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("providers")]),t._v(" - Dependency Injection setup. Alternatively, services can\nconfigure their injection via the "),s("code",[t._v("Injectable")]),t._v(" decorator and its "),s("code",[t._v("providedIn")]),t._v("\nproperty.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("bootstrap")]),t._v(" - defines the starting component(s) (usually "),s("code",[t._v("AppComponent")]),t._v(")")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("entryComponents")]),t._v(" - "),s("em",[t._v("deprecated")]),t._v(", it was used for "),s("RouterLink",{attrs:{to:"/programming/angular/components.html#instantiating-components-from-typescript"}},[t._v("dynamic\nmodules")]),t._v(" in the\npast.")],1)])]),t._v(" "),s("h2",{attrs:{id:"organizing-code-into-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#organizing-code-into-modules"}},[t._v("#")]),t._v(" Organizing Code into Modules")]),t._v(" "),s("p",[t._v("A recommended way of organizing code in larger applications is to split code\ninto modules by feature. E.g., we could have a set of components that are all\nabout the products domain. Also, we could have another set of components that\nare all about managing orders. In this idealized scenario, we'd put\nproducts-related components into one module, and the orders-related stuff into\nanother module.")]),t._v(" "),s("p",[t._v("Another case would be to group together some shared components that are used\nthroughout different domains into their own module.")]),t._v(" "),s("h3",{attrs:{id:"scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" Scope")]),t._v(" "),s("p",[t._v("The entities declared in a module (e.g. components) have access ONLY to entities\nthat this module declares or imports (services are an exception, more on that\n"),s("a",{attrs:{href:"#dependency-injection"}},[t._v("later")]),t._v("). For example, if I create a "),s("code",[t._v("MyModule")]),t._v(" module\nwith some declared component, I can use "),s("code",[t._v("routerLink")]),t._v(" in that component only if I\nimport "),s("code",[t._v("RouterModule")]),t._v(" into "),s("code",[t._v("MyModule")]),t._v(" first. "),s("strong",[t._v("I think this rule applies only to\ntemplates and the components, directives or pipes that we use within them (?)")])]),t._v(" "),s("p",[t._v("It's important to note that we can import the same module multiple times into\ndifferent components. For example, if both "),s("code",[t._v("AppModule")]),t._v(" and "),s("code",[t._v("MyModule")]),t._v(" have\nsome declared components that make use of "),s("code",[t._v("<ng-outlet>")]),t._v(", we should import\n"),s("code",[t._v("RouterModule")]),t._v(" into both of them.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Services")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("HttpClientModule")]),t._v(' is a bit "special". Since it does not expose anything\nother than services (provides them), it does not need to be imported into every\nmodule that needs '),s("code",[t._v("HttpClient")]),t._v(". Services can be injected without that.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("BrowserModule")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("BrowserModule")]),t._v(' is even more "special". It should be imported only once into\nthe '),s("code",[t._v("AppModule")]),t._v(" and nowhere else. Since features like "),s("code",[t._v("ngIf")]),t._v(" and "),s("code",[t._v("ngFor")]),t._v(" come\nfrom that module, that would be a bit limiting. Because of that, the other\nmodules that want to make use of these features, should import the\n"),s("code",[t._v("CommonModule")]),t._v(". "),s("code",[t._v("ngIf")]),t._v(" and other stuff will become available.")])]),t._v(" "),s("h2",{attrs:{id:"routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routes"}},[t._v("#")]),t._v(" Routes")]),t._v(" "),s("p",[t._v("Our feature modules representing different sections of the app could also handle\ntheir routes. We could go even further and create separate routes modules per\nfeature. Each feature would have such a module with its specific routes.")]),t._v(" "),s("p",[t._v("Here's an example of such a module:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'products'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProductsComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    canActivate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" AuthorizationGuard "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProductsListComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathMatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'full'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NewProductComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProductInfoComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" PoductResolverService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RouterModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RouterModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductsRoutingModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("forChild")]),t._v(" "),s("p",[t._v("In the main "),s("code",[t._v("AppRoutingModule")]),t._v(" we usually use "),s("code",[t._v("RouterModule.forRoot()")]),t._v(" method. In\nthese feature-specific route modules, we use "),s("code",[t._v("RouterModule.forChild")]),t._v(". In the\nend, all these routes will be merged together. "),s("code",[t._v("forChild")]),t._v(" is also needed to\nenable "),s("a",{attrs:{href:"#lazy-loading"}},[t._v("lazy loading")]),t._v("!")])]),t._v(" "),s("p",[t._v("Note that even though in this routing module we reference some components, we\ndon't need to import them via the "),s("code",[t._v("imports")]),t._v(" array. We need to import stuff only\nif we plan to use it in the templates.")]),t._v(" "),s("h2",{attrs:{id:"lazy-loading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-loading"}},[t._v("#")]),t._v(" Lazy Loading")]),t._v(" "),s("p",[t._v("Until now, we've been discussing "),s("strong",[t._v("Eager-loaded Modules")]),t._v(". They are loaded on\nbootstrap together with the "),s("code",[t._v("AppModule")]),t._v(". With proper module organization we can\nmake use of "),s("strong",[t._v("lazy loading")]),t._v(".")]),t._v(" "),s("p",[t._v("With eager-loaded modules, when the user visits our website, all of our code is\nbeing downloaded by their browser at once. For smaller applications, it's not a\nbig deal. For bigger apps though, it surely is something worth optimizing. With\nlazy loading, the code is being downloaded as it's needed. For example, if a\nuser goes to "),s("code",[t._v("/profile")]),t._v(", only the module responsible for that feature area\nshould get loaded. It might be seen as a downside, the app will not be as snappy\nas before (unless proper "),s("a",{attrs:{href:"#preload-strategy"}},[t._v("preload strategy")]),t._v(" is used). The\ninitial load will be faster though.")]),t._v(" "),s("p",[t._v("Lazy loading makes sense especially if our users are not going to typically\nvisit all the views during their session. If they're not going to even see\n"),s("code",[t._v("/products")]),t._v(", why would they download it.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v('Not all modules should be lazy loaded. If our app has some "core" feature\nareas that are always visited by the users, it probably doesn\'t make sense\nto lazy load them.')])]),t._v(" "),s("h3",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("p",[t._v("Lazy loading is mostly accomplished with a proper setup of routing.\nTo use lazy loading, our feature modules need to have their own "),s("a",{attrs:{href:"#routes"}},[t._v("routing\nmodules")]),t._v(" that will use "),s("code",[t._v("Router.forChild(...)")]),t._v(".")]),t._v(" "),s("p",[t._v("Until now, our feature modules had the following setup:")]),t._v(" "),s("ul",[s("li",[t._v("they were imported into the "),s("code",[t._v("AppModule")]),t._v(" - that wass needed, because they had\nto be loaded at some point, otherwise they'd never be bundled.")]),t._v(" "),s("li",[t._v('they had their own routing config that was being merged with the "main"\nrouting setup in '),s("code",[t._v("AppModule")]),t._v(" (or some other separate routing module like\n"),s("code",[t._v("AppRoutingModule")]),t._v(").")])]),t._v(" "),s("p",[t._v("Here's what we need to change:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("The main routing module (the one that calls "),s("code",[t._v("Router.forRoot(...)")]),t._v(") should now\ninclude the routes to our feature areas together with a lambda to load these\nmodules dynamically, like this:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirectTo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/products'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathMatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'full'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'products'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("loadChildren")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./products/products.module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProductsModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Now, in the lazily loaded module's routing setup, we should treat the routing\npath as if that module was at the root. Without lazy loading, we had "),s("code",[t._v("path: 'products'")]),t._v(', because feature module\'s routing would get merged with the "main"\nrouting. Now, the products area is treated as a child of the main routing. All\nthe child\'s routes go under the "'),s("em",[t._v("/products")]),t._v('" path, and the child module does\nnot need to know about it.')]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProductsComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    canActivate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AuthGuard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProdctsListComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathMatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'full'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /products")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NewProductComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /products/new")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProductComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ProductResolverService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /products/:id")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" RouterModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" RouterModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductsRoutingModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Lastly, make sure to "),s("strong",[t._v("not")]),t._v(" import ("),s("code",[t._v("NgModule")]),t._v("-import) the feature module\n(like "),s("code",[t._v("ProductsModule")]),t._v(" in this case) into the "),s("code",[t._v("AppModule")]),t._v(". The dynamic import in\nthe routing setup does that already. Additionally importing it with the "),s("code",[t._v("imports")]),t._v("\narray would eagerly load the module.")])])]),t._v(" "),s("p",[t._v("With that, the code is split into bundles, each one fetched as needed.")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Imports")]),t._v(" "),s("p",[t._v("With lazy loading, it becomes quite important to properly define ES imports.\nAnything that we import in our files gets added to our bundle. Make sure to\nimport only the stuff you need. It's common to forget about cleaning up\nthe imports after some refactoring.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Angular Modules")]),t._v(" "),s("p",[t._v("With lazy loading, also the Angular's "),s("code",[t._v("vendor.js")]),t._v(" bundle may get decreased.\nFor example, if we'r using forms only in some feature area, after introducing\nlazy loading, "),s("code",[t._v("FormsModule")]),t._v(" will be fetched together with that feature area\ninstead of at bootstrap.")])]),t._v(" "),s("h3",{attrs:{id:"preload-strategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preload-strategy"}},[t._v("#")]),t._v(" Preload Strategy")]),t._v(" "),s("p",[t._v("Lazy loading might make our app feel slow. Preload Strategy may fix that. After\nsplitting our app into bundles, we can download them all at bootstrap instead of\nwaiting for the user to actually need it. It may be configured in the root\nrouting configuration:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  declarations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RouterModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      preloadingStrategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PreloadAllModules "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NoPreloading is the default")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RouterModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRoutingModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The initial bundle is still kept small, the other bundles will be downloaded\nafter the first one gets fetched.")]),t._v(" "),s("h3",{attrs:{id:"dependency-injection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection"}},[t._v("#")]),t._v(" Dependency Injection")]),t._v(" "),s("p",[t._v("Eager-loaded modules that provide services, make them available globally. That's\nwhy we don't need to put modules that provide services into the "),s("code",[t._v("imports")]),t._v(" array.")]),t._v(" "),s("p",[t._v("Lazy-loaded modules that proivde services, make them available only in that\nsingle module.")])])}),[],!1,null,null,null);e.default=n.exports}}]);