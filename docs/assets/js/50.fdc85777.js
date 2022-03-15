(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{490:function(t,s,a){"use strict";a.r(s);var e=a(31),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hash-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-structures"}},[t._v("#")]),t._v(" Hash Structures")]),t._v(" "),a("h2",{attrs:{id:"hash-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-map"}},[t._v("#")]),t._v(" Hash Map")]),t._v(" "),a("p",[t._v("Other names: dictionary, hash map")]),t._v(" "),a("p",[t._v("They are really fast when looking up items.")]),t._v(" "),a("ul",[a("li",[t._v("Lookup O(1)")]),t._v(" "),a("li",[t._v("Insert - O(1)")]),t._v(" "),a("li",[t._v("Delete - O(1)")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("O(n)")]),t._v(" "),a("p",[t._v("In worst case scenario, all these operations run in O(n) when hash collision\noccurs. However, that's a rare situtation, so we still consider all the above\noperations to have O(1) complexity.")])]),t._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),a("p",[t._v("Sets only have keys. They don't allow duplicate keys.")]),t._v(" "),a("h2",{attrs:{id:"hash-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-functions"}},[t._v("#")]),t._v(" Hash Functions")]),t._v(" "),a("p",[t._v("Internally, hash would store items in some array. We need to calculate an index\nwhere each item would go. First, we'd take the key and hash it. Then, we'd use\nthe module operation to get the index based on the hash.")]),t._v(" "),a("p",[t._v("The simplest hash function that returns index based on a provided key (being a\nnumber).")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("There will be only 100 hash values. That is useful if our hash map's internal\narray has the capacity of 100.")]),t._v(" "),a("p",[t._v("If the item to hash was a string, we could turn it into numerical representation\nfirst (e.g. by summing all chracters' encoding table indices).")]),t._v(" "),a("p",[t._v('Normally, we use more "established" hashing functions than the simple case\nabove.')]),t._v(" "),a("h3",{attrs:{id:"collisions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collisions"}},[t._v("#")]),t._v(" Collisions")]),t._v(" "),a("p",[t._v("The less hash vaues possible, the bigger possibility of having a collision when\nhasing two different keys.")]),t._v(" "),a("p",[t._v("Solutions:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("chaining")]),t._v(" - store internal array's items in linked lists. Every index has a\nlinked list (called a "),a("strong",[t._v("bucket")]),t._v("). In case of a collision, the linked list\nunder a colliding index will have another item appended. In such a case, time\nrequired to retrieve an item grows. Every node in a linked list stores the\nactual key value so during retrieval we can find the right key.")]),t._v(" "),a("li",[a("strong",[t._v("open addressing")]),t._v(" - we store values directly in the internal array, without\nlinked lists. When collision occurs while inserting, we have to look for\nanother free spot ("),a("strong",[t._v("probing")]),t._v("). Since every item is stored as a tuple (key\nand value), during the retrieval we can also use probing algorithms to find\nthe right item.")])]),t._v(" "),a("h4",{attrs:{id:"probing-algorithms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#probing-algorithms"}},[t._v("#")]),t._v(" Probing Algorithms")]),t._v(" "),a("p",[t._v("Below are a few examples of probing algorithms.\nAn algorith requires:")]),t._v(" "),a("ul",[a("li",[t._v("the key")]),t._v(" "),a("li",[t._v("the initial index where collision occured")]),t._v(" "),a("li",[t._v("the interal array's capacity")])]),t._v(" "),a("h5",{attrs:{id:"linear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear"}},[t._v("#")]),t._v(" Linear")]),t._v(" "),a("p",[t._v("It just selects the next index (circularly):")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNextIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" arrayCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" arrayCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The above solution has an issue of "),a("strong",[t._v("Clustering")]),t._v(". It might occur that some part\nof our array will become full of items, while other parts will be empty. Future\nprobings in the clustered area will be slow.")]),t._v(" "),a("h5",{attrs:{id:"quadratic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quadratic"}},[t._v("#")]),t._v(" Quadratic")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNextIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" arrayCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" arrayCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("It solved the clustering issue. However, with this approach we might end up\nlooping over the same indexes never finding a free spot, although it is there.")]),t._v(" "),a("h5",{attrs:{id:"double-hashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-hashing"}},[t._v("#")]),t._v(" Double Hashing")]),t._v(" "),a("p",[t._v("It solves the clustering and the issue of never finidng a free spot of\nquadratic method.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IProbingFunction")]),t._v(" _linearProbing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("LinearProbingFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNextIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" arrayCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" hash1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _linearProbing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNextIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arrayCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" prime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PrimeNumberFinder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLowerPrime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" hash2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" prime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hash1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" hash2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" arrayCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hash1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);