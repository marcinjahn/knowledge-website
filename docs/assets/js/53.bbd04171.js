(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{490:function(t,e,a){"use strict";a.r(e);var s=a(31),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"routing-in-asp-net-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routing-in-asp-net-core"}},[t._v("#")]),t._v(" Routing in ASP.NET Core")]),t._v(" "),a("p",[t._v("Routing is the process of mapping an incoming request to a handler (Razor Page,\nor an action on some MVC controller).")]),t._v(" "),a("p",[t._v("Routing uses URL's path to decide on the handler. It doesn't use query\nparameters. These are bound in the handler to parameters/properties.")]),t._v(" "),a("p",[a("code",[t._v("RoutingMiddleware")]),t._v(" is added to the app with:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseRouing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Routing is not case-sensitive")])]),t._v(" "),a("p",[t._v("This middleware is responsible for selecting the endpoint for a requests.\nEndpoints can be either MVC or Razor Pages (or some middleware). All of them\nneed to be registered with the "),a("code",[t._v("EndpointMiddleware")]),t._v(". That middleware has a\ndictionary of all registered endpoints, and it is shared with the\n"),a("code",[t._v("RoutingMiddleware")]),t._v('. Routing middleware looks through the dictionary for every\nrequests and makes a "note" about the selection in the '),a("code",[t._v("HttpContext")]),t._v(" object.\n"),a("code",[t._v("EndpointMiddleware")]),t._v(' looks at that "note" and executes the selected endpoint\nhandler.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Separation of routing and execution")]),t._v(" "),a("p",[t._v("The process of selecting an endpoint and executing it are separated into\ndifferent middleware components. Thanks to it, we can add some other middleware\nbetween those. That middleware has access to the information which endpoint\nhandler was selected by the routing middleware. Example of that is the\n"),a("code",[t._v("AuthorizationMiddleware")]),t._v(", which can do some authorization based on the selected\nendpoint.")])]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("The routing middleware comes with a set of conventions, which may be changed. It can be done as follows:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RouteOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AppendTrailingSlash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LowercaseUrls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//by default, URLs are capitalized")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LowercaseQueryStrings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"route-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-templates"}},[t._v("#")]),t._v(" Route Templates")]),t._v(" "),a("p",[t._v("When defining routes, the template syntax is used making it possible to have\nsome parts of the URLs dynamic.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Binding")]),t._v(" "),a("p",[t._v("Placeholder values from a URL can be used during model binding.")])]),t._v(" "),a("p",[t._v("Here are the options:")]),t._v(" "),a("ul",[a("li",[t._v("static URL, e.g. "),a("code",[t._v("/users")])]),t._v(" "),a("li",[t._v("placeholders, e.g. "),a("code",[t._v("/products/{productId}")])]),t._v(" "),a("li",[t._v("placeholder with defualt value, e.g. "),a("code",[t._v("/products/{productId=123}")]),t._v(' - when\nnavigating to "/products", a "/products/123" route will be taken')]),t._v(" "),a("li",[t._v("optional placegolder, e.g. "),a("code",[t._v("/products/{productId}/{color?}")]),t._v(" - optional\nparameters only make sense at the end of the route template.")]),t._v(" "),a("li",[t._v("catch-all parameter, e.g. "),a("code",[t._v("/products/{*restOfUrl}")]),t._v(" - "),a("code",[t._v("restOfUrl")]),t._v(" will contain\nthe rest of the URL, even if there are slashes. (there can be either 1 or 2\nasterisks ("),a("code",[t._v("*")]),t._v(") in the template).")])]),t._v(" "),a("h3",{attrs:{id:"constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[t._v("#")]),t._v(" Constraints")]),t._v(" "),a("p",[t._v("To avoid weird binding issues we can constraint dynamic parts of the template:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/products/{id:int}")]),t._v(" - "),a("code",[t._v("id")]),t._v(" has to be convertible to an integer")]),t._v(" "),a("li",[a("code",[t._v("/products/{id:min(5)}")]),t._v(" - "),a("code",[t._v("id")]),t._v(" has to be integer and min 5.")]),t._v(" "),a("li",[a("code",[t._v("/products/{id:length(3)}")]),t._v(" - "),a("code",[t._v("id")]),t._v(" has to have 3 characters.")]),t._v(" "),a("li",[a("code",[t._v("/products/{id:int?}")]),t._v(" - "),a("code",[t._v("id")]),t._v(" is optional, but if provided it has to be\nconvertible to an integer")]),t._v(" "),a("li",[a("code",[t._v("/products/int:max(10)?")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Binding Exceptions")]),t._v(" "),a("p",[t._v("If we have an unconstrained template "),a("code",[t._v("/products/{id}")]),t._v(" and our handler is\n"),a("code",[t._v("OnGet(int id)")]),t._v(', an exception would be thrown if we called "/products/test". The\nframework would try to bind "test" string to the '),a("code",[t._v("id")]),t._v(" parameter that is an\ninteger.")]),t._v(" "),a("p",[t._v("With proper constraints, that endpoint would be just skipped and not matched.")])]),t._v(" "),a("h2",{attrs:{id:"convention-vs-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convention-vs-attributes"}},[t._v("#")]),t._v(" Convention vs Attributes")]),t._v(" "),a("p",[t._v("Routes can be defined either in a signle place making all endpoints follow some\nconvention, or we can use attributes on every action to define a route for that\nendpoint specifically. The latter apporach gives more freedom and makes it much\neasier to introduce changes for a specific endpoint.")]),t._v(" "),a("h3",{attrs:{id:"razor-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#razor-pages"}},[t._v("#")]),t._v(" Razor Pages")]),t._v(" "),a("p",[t._v("Razor Pages uses a combination of convention and attribute-based routing. The\nroutes are created by the "),a("code",[t._v("MapRazorPages()")]),t._v(" extension method. All files in the\n"),a("code",[t._v("Pages")]),t._v(" direcotry are analyzed and routes are created for them based on their\nplacement.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Index")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Index.cshtml")]),t._v(" files are an exception from that rule. They are mapped to\nboth "),a("code",[t._v("xyz/")]),t._v(" and "),a("code",[t._v("xyz/Index")]),t._v(" (we could have multiple "),a("code",[t._v("Index.cshtml")]),t._v(" files in\ndifferent directories).")])]),t._v(" "),a("p",[t._v("To customize the route of a given Razor Page, we need to modify the "),a("code",[t._v("@page")]),t._v("\ndirective of a given page. Some examples for a page at "),a("code",[t._v("Pages/Items.cshtml")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('@page "Something"')]),t._v(' - the URL will be "/items/something" ('),a("strong",[t._v("appending")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v('@page "{category}/{productId}"')]),t._v(' - the URL will be\n"items/'),a("code",[t._v("{category}")]),t._v("/"),a("code",[t._v("{productId}")]),t._v('" ('),a("strong",[t._v("appending")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v('@page "/Something"')]),t._v(' - the URL will be "/something" ('),a("strong",[t._v("replacing")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v('@page "/{category}/{productId}"')]),t._v(' - the URL will be\n"/'),a("code",[t._v("{category}")]),t._v("/"),a("code",[t._v("{productId}")]),t._v('" ('),a("strong",[t._v("replacing")]),t._v(")")])]),t._v(" "),a("p",[t._v("With such modifications, the default file location-based route is no longer\nvalid.")]),t._v(" "),a("h2",{attrs:{id:"generating-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-urls"}},[t._v("#")]),t._v(" Generating URLs")]),t._v(" "),a("h3",{attrs:{id:"razor-pages-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#razor-pages-2"}},[t._v("#")]),t._v(" Razor Pages")]),t._v(" "),a("p",[t._v("The framework has a helper for generating URLs to other parts of our app.\nAn example:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Products/Winter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"273"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("Url")]),t._v(" object is a property on "),a("code",[t._v("PageModel")]),t._v(" base class. It has various methods\nfor building URLs. We can provide some parameters, and the helper will fit this\ninto the template of the taget page (either as path, or as query).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Relative or Absolute")]),t._v(" "),a("p",[t._v("We can proivde relative or absolute links. The example above was relative.\nAbsolute link (starts from the "),a("code",[t._v("Pages")]),t._v(" directory) should start from a "),a("code",[t._v("/")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[t._v("#")]),t._v(" MVC")]),t._v(" "),a("p",[t._v("It's very similar to Razor Pages. We also have the "),a("code",[t._v("Url")]),t._v(" object. However, we'd\nuse the "),a("code",[t._v("Action")]),t._v(" method on it, together with the inputs: action name, controller\nname, and optional parameters.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nameof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Winter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nameof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"273"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Page")]),t._v(" and "),a("code",[t._v("Action")]),t._v(" methods are availble from both the Razor Pages and MVC\ncontrollers. We can redirect from a Page to a controller and the other way\naround as well.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("ActionResult")]),t._v(" "),a("p",[t._v("Often it's more practical to use the "),a("code",[t._v("RedirectToPage")]),t._v(" or "),a("code",[t._v("RedirectToAction")]),t._v("\nmethods. They act similarly as the described methods, but they don't return the\nURLs in code.")])]),t._v(" "),a("h3",{attrs:{id:"linkgenerator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkgenerator"}},[t._v("#")]),t._v(" LinkGenerator")]),t._v(" "),a("p",[t._v("There is also a "),a("code",[t._v("LinkGenerator")]),t._v(" class, which may be used in a code outside of\nRazor Pages or MVC controllers (such as middleware, or any other code).")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _linkGenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPathByPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Products/Winter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"273"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);