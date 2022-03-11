(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{491:function(e,t,n){"use strict";n.r(t);var i=n(31),l=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"linked-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linked-list"}},[e._v("#")]),e._v(" Linked List")]),e._v(" "),n("p",[e._v("A single node has the following data:")]),e._v(" "),n("ul",[n("li",[e._v("value")]),e._v(" "),n("li",[e._v("reference to a next node")]),e._v(" "),n("li",[e._v("(optionally) reference to a previous node ("),n("strong",[e._v("doubly-linked-list")]),e._v(")")])]),e._v(" "),n("p",[e._v("A linked list itself has the following internal values:")]),e._v(" "),n("ul",[n("li",[e._v("first node")]),e._v(" "),n("li",[e._v("last node")])]),e._v(" "),n("h2",{attrs:{id:"runtime-complexity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#runtime-complexity"}},[e._v("#")]),e._v(" Runtime Complexity")]),e._v(" "),n("ul",[n("li",[e._v("Lookup (by index) - O(n)")]),e._v(" "),n("li",[e._v("Lookup (by value) - O(n)")]),e._v(" "),n("li",[e._v("Insert - O(n)\n"),n("ul",[n("li",[e._v("In the beginning - O(1)")]),e._v(" "),n("li",[e._v("In the end - O(1)")]),e._v(" "),n("li",[e._v("In the middle - O(n)")])])]),e._v(" "),n("li",[e._v("Delete - O(n)\n"),n("ul",[n("li",[e._v("In the beginning - O(1)")]),e._v(" "),n("li",[e._v("In the end - O(n) (unless we keep a reference to previous item, then we\ncould go from last item to previous one and remove the last one)")]),e._v(" "),n("li",[e._v("In the middle - O(n)")])])])]),e._v(" "),n("h2",{attrs:{id:"two-pointers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#two-pointers"}},[e._v("#")]),e._v(" Two Pointers")]),e._v(" "),n("p",[e._v("Various Linked List problems can be solved by using the two pointers method.\nThis way, some problems can be solved in a single pass.")]),e._v(" "),n("p",[e._v("Examples of such problems:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("find "),n("em",[e._v("k")]),e._v("-th element from the end")]),e._v(" "),n("p",[e._v("Normally, we'd do the following:")]),e._v(" "),n("ol",[n("li",[e._v("Traverse the whole list to find out how many items we have ("),n("em",[e._v("n")]),e._v(")")]),e._v(" "),n("li",[e._v("Traverse the list again to find the ("),n("em",[e._v("n - k")]),e._v(") item.")])]),e._v(" "),n("p",[e._v("Instead we can do the following: Traverse "),n("em",[e._v("k")]),e._v(" items with the first pointer.\nThen, continue the traversal, but this time, the second pointer also starts\nthe traversal (starting from the beginning). When the first pointer reaches\nthe end, the second one will reach the "),n("em",[e._v("(n - k)")]),e._v(" node.")])]),e._v(" "),n("li",[n("p",[e._v("find the middle element of the list - with the two-pointers approach, during\nthe traversal, first pointer moves one item at a time, while the second\npointer moves two items at a time. When the second one reaches the end, the\nfirst one will be in the middle.")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);