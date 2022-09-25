(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{597:function(e,t,s){"use strict";s.r(t);var r=s(22),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[e._v("#")]),e._v(" Node.js")]),e._v(" "),s("h2",{attrs:{id:"facts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#facts"}},[e._v("#")]),e._v(" Facts")]),e._v(" "),s("h3",{attrs:{id:"commonjs-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-modules"}},[e._v("#")]),e._v(" CommonJS Modules")]),e._v(" "),s("h4",{attrs:{id:"wrapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrapping"}},[e._v("#")]),e._v(" Wrapping")]),e._v(" "),s("p",[e._v("Modules in NodeJS are not actually executed as-is. Instead, they are wrapped in\na function - this function comes with parameters, like:")]),e._v(" "),s("ul",[s("li",[e._v("require - the "),s("code",[e._v("require")]),e._v(" function")]),e._v(" "),s("li",[e._v("module - we se the module's exports here")]),e._v(" "),s("li",[e._v("others")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("require")]),e._v(" function returns what module sets in "),s("code",[e._v("module.exports")]),e._v(" - it can do\nit, because "),s("code",[e._v("require")]),e._v(" actually INVOKES the wrapper function, and provides to it\nthe fresh instance of "),s("code",[e._v("Module")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/dVNirQb.png",alt:""}})]),e._v(" "),s("h4",{attrs:{id:"multiple-requires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-requires"}},[e._v("#")]),e._v(" Multiple requires")]),e._v(" "),s("p",[e._v("If we call "),s("code",[e._v("require")]),e._v(" to import the same module multiple times (from the same\nfile or from other files, doesn't matter), the module's code will be executed\nonly once! If our module would export some object, modification of that object\nwould be seen EVERYWHERE where this module gets imported.")]),e._v(" "),s("p",[e._v("It makes it easy to have singleton modules.")]),e._v(" "),s("h2",{attrs:{id:"source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[e._v("#")]),e._v(" Source")]),e._v(" "),s("p",[e._v("https://www.udemy.com/course/understand-nodejs/")])])}),[],!1,null,null,null);t.default=o.exports}}]);