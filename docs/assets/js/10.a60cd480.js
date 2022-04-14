(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{456:function(e,t,s){e.exports=s.p+"assets/img/index-b-tree.b5266b36.png"},457:function(e,t,s){e.exports=s.p+"assets/img/non-clustered-index-columns-order.326977e5.png"},458:function(e,t,s){e.exports=s.p+"assets/img/or-predicate-needs-multiple-indexes.1bd8d7bb.png"},581:function(e,t,s){"use strict";s.r(t);var a=s(31),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sql-server-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-overview"}},[e._v("#")]),e._v(" SQL Server Overview")]),e._v(" "),a("h2",{attrs:{id:"running-in-a-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-in-a-container"}},[e._v("#")]),e._v(" Running in a Container")]),e._v(" "),a("p",[e._v("On AMD64 PCs just use the sql-server docker image.")]),e._v(" "),a("p",[e._v("On M1 macs, use the following:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run --cap-add SYS_PTRACE -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ACCEPT_EULA=1'")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'MSSQL_SA_PASSWORD=Qwerty1!'")]),e._v(" -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1433")]),e._v(":1433 --name azuresqledge -d mcr.microsoft.com/azure-sql-edge\n")])])]),a("p",[e._v("It's the SQL Server Edge - at this moment it's the only SQL Server variant\ncompiled for ARM64.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Password")]),e._v(" "),a("p",[e._v("Password needs to be min 8 chars long, 1 capital letter, 1 digit, 1 symbol.")])]),e._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),a("ul",[a("li",[e._v("RDMS:\n"),a("ul",[a("li",[e._v("Databases\n"),a("ul",[a("li",[e._v("Schemas (the default is "),a("em",[e._v("dbo")]),e._v(") - they act as namespaces, they are\nuseful for managing security\n"),a("ul",[a("li",[e._v("Tables\n"),a("ul",[a("li",[e._v("Columns")])])]),e._v(" "),a("li",[e._v("Views")]),e._v(" "),a("li",[e._v("Stored Procedures")])])])])])])])]),e._v(" "),a("p",[e._v("Every object in the database has its fully qualified name in the format:\n"),a("code",[e._v("{Instace}.{Database}.{Schema}.{Object}")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Instance")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("{Instance}")]),e._v(" part comes from the fact that a single OS can host multiple\ninstances of SQL Server.")])]),e._v(" "),a("h2",{attrs:{id:"naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming"}},[e._v("#")]),e._v(" Naming")]),e._v(" "),a("p",[e._v("Popular Choices:")]),e._v(" "),a("ul",[a("li",[e._v("PascalCase")]),e._v(" "),a("li",[e._v("underscore_separated")]),e._v(" "),a("li",[e._v("Hybrid_Of_Above")])]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"normal-forms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normal-forms"}},[e._v("#")]),e._v(" Normal Forms")]),e._v(" "),a("p",[e._v("Normalization defines a set of rules that help to achieve a good design of a\ndatabase, reducing duplication and data anomalies.")]),e._v(" "),a("ol",[a("li",[e._v("1NF\n"),a("ul",[a("li",[e._v("one value per table cell (e.g. first and last names)")]),e._v(" "),a("li",[e._v("rows should be unique - primary key should be there")])])]),e._v(" "),a("li",[e._v("2NF\n"),a("ul",[a("li",[e._v("single-column primary keys")])])]),e._v(" "),a("li",[e._v("3NF\n"),a("ul",[a("li",[e._v("Column values should only depend upon the key - if any non-key column\ndepends on column(s) other than the key one, this data does not belong in\nthat table. For example, keeping patient's doctor phone in the Patients\ndatabase is not a good idea. There should be a separate table - Doctors -\nand patients should be linked ot appropriate doctors.")])])])]),e._v(" "),a("p",[e._v("There also other Normal Forms.")]),e._v(" "),a("h2",{attrs:{id:"constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[e._v("#")]),e._v(" Constraints")]),e._v(" "),a("p",[e._v("Constraints specify additional rules for the columns in our tables.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Overwriting")]),e._v(" "),a("p",[e._v("We can't just overwrite existing constraint. First, we need to remove existing\nconstraint, and then we can create a new one.")])]),e._v(" "),a("h3",{attrs:{id:"null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[e._v("#")]),e._v(" NULL")]),e._v(" "),a("p",[e._v('We can "constraint" columns to allow NULLs. By default, the '),a("code",[e._v("NOT NULL")]),e._v(" constains\nis applied.")]),e._v(" "),a("h3",{attrs:{id:"default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default"}},[e._v("#")]),e._v(" DEFAULT")]),e._v(" "),a("p",[e._v("Provides a default value for a column. It is useful when "),a("code",[e._v("NOT NULL")]),e._v(" is applied\nas well.")]),e._v(" "),a("h3",{attrs:{id:"primary-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primary-keys"}},[e._v("#")]),e._v(" Primary Keys")]),e._v(" "),a("p",[e._v("Thy ensure uniqueness. It provides a backing index. That index can be\n"),a("strong",[e._v("clustered")]),e._v(" or "),a("strong",[e._v("unclustered")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"unique"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique"}},[e._v("#")]),e._v(" UNIQUE")]),e._v(" "),a("p",[e._v("It ensures no duplicates of some column. It allows NULL (but only one!). They\nare backed by an index (clustered or unclustered (the default)).")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("UNIQUE")]),e._v(" constraint can be applied on multiple columns, meaning that the\ncombination of their values should be unique.")]),e._v(" "),a("h3",{attrs:{id:"foreign-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreign-keys"}},[e._v("#")]),e._v(" Foreign Keys")]),e._v(" "),a("p",[e._v("The Foreign Key constraint links two tables together. We cannot create an entry\nthat refers to a non-existing entity. For example, we can't create an\n"),a("code",[e._v("OrderItem")]),e._v(" for an "),a("code",[e._v("Order")]),e._v(" that doesn't exist.")]),e._v(" "),a("div",{staticClass:"language-log extra-class"},[a("pre",{pre:!0,attrs:{class:"language-log"}},[a("code",[e._v("The INSERT statement conflicted with the FOREIGN KEY constraint \n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"FK_OrderItems_OrderID_Orders_OrderID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" The conflict occurred in \ndatabase "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"BobsShoes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" table "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Orders.Orders"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" column "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'OrderID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Index")]),e._v(" "),a("p",[e._v("There is no automatic backing index created for foreign keys. It is recommended\nto create it though.")])]),e._v(" "),a("h4",{attrs:{id:"cascade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascade"}},[e._v("#")]),e._v(" CASCADE")]),e._v(" "),a("p",[e._v("Entities referred to by a foreign key cannot be deleted. We can help ourselves\nwith the "),a("code",[e._v("CASCADE")]),e._v(" option. Whenever we delete an entity referenced by a foreign\nkey, the entity that refers to it will be deleted as well.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" Orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("OrderItems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n    StockID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("NULL")]),e._v("\n        CONSTAINT FK_OrderItems_StockID\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FOREIGN")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("KEY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("REFERENCES")]),e._v(" Orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Stock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("StockID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DELETE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CASCADE")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("SET NULL")]),e._v(" "),a("p",[e._v("We could also use the "),a("code",[e._v("SET NULL")]),e._v(" option instead of "),a("code",[e._v("CASCADE")]),e._v(". That would set the\nvalue of a foreign key to NULL, instead of deleting the whole row.")])]),e._v(" "),a("h3",{attrs:{id:"check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[e._v("#")]),e._v(" CHECK")]),e._v(" "),a("p",[e._v("This constraint allows to define declarative various conditions on the\ntable-level or on the column-level. The conditions are boolean expressions.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("SELECT")]),e._v(" "),a("p",[e._v("Conditions cannot contain "),a("code",[e._v("SELECT")]),e._v(". However, we can call a function that\nexecutes "),a("code",[e._v("SELECT")]),e._v(".")])]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CHECK (LastName <> '')")]),e._v(" - "),a("code",[e._v("LastName")]),e._v(" value can't be empty")]),e._v(" "),a("li",[a("code",[e._v("CHECK (StockName <> StockDescription)")]),e._v(" - two columns can't have the same\nvalues")]),e._v(" "),a("li",[a("code",[e._v("CHECK (Currency IN ('PLN', 'EUR'))")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Namig")]),e._v(" "),a("p",[e._v("It's quite useful to provide custom names for the "),a("code",[e._v("CHECK")]),e._v(" constraints. In case\nif some condition is not satisfied, the error message will contain the name of\nthe constraint. System-generated names are not very informative.")])]),e._v(" "),a("h2",{attrs:{id:"views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[e._v("#")]),e._v(" Views")]),e._v(" "),a("p",[e._v("Views encapsulate queries. This way we can store some commonly used queries and\nuse them whenever they're needed. For example, we can create some complicated\nquery that joins multiple tables and hides unneded data.")]),e._v(" "),a("p",[e._v("Views can be seen as "),a("strong",[e._v("Virtual Tables")]),e._v(". Applications can invoke the views\ninstead of querying the actual tables. This way, backward compatibility can be\nkept. We could add some new column to a table, but make sure that the View still\nreturns the same set of data as before.")]),e._v(" "),a("p",[e._v("Columns returned in a View can have their names changed.")]),e._v(" "),a("h3",{attrs:{id:"updateable-views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateable-views"}},[e._v("#")]),e._v(" Updateable Views")]),e._v(" "),a("p",[e._v("We can update data in tables via Views. However, any such operation can only\nreference columns of only one base table. There are a few other restrictions as\nwell.")]),e._v(" "),a("h2",{attrs:{id:"indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexes"}},[e._v("#")]),e._v(" Indexes")]),e._v(" "),a("p",[e._v("We create indexes:")]),e._v(" "),a("ul",[a("li",[e._v("to enforce uniqueness on data (primary keys and unique constraints are backed\nby indexes)")]),e._v(" "),a("li",[e._v("to improve query performance - these need to be determined by our workload")]),e._v(" "),a("li",[e._v("for foreign keys")])]),e._v(" "),a("p",[e._v("DB data is stored in pages, sorted by clustered index. Then, these pages are put\ninto a B-Tree. All apges are in leaves. Then, a top row of each page is taken to\nbuild higher layers of the tree (intermediary layers + a root).")]),e._v(" "),a("p",[a("img",{attrs:{src:s(456),alt:""}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Pages")]),e._v(" "),a("p",[e._v("Data is stored in pages. A single page is 8kb in size and contains multiple\nrows.")])]),e._v(" "),a("h3",{attrs:{id:"clustered-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustered-index"}},[e._v("#")]),e._v(" Clustered Index")]),e._v(" "),a("p",[e._v("The data (rows) in the table is sorted using the index column. It's the default\nbacking index for Primary Keys. There is no separate storage of index.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("There can be max one clustered index in a table, because there can be only one\nway of sorting the data.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Heap")]),e._v(" "),a("p",[e._v("A table without clustered index is a "),a("strong",[e._v("heap")]),e._v(" (why?)")])]),e._v(" "),a("h4",{attrs:{id:"guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines"}},[e._v("#")]),e._v(" Guidelines")]),e._v(" "),a("p",[e._v("Ideally, a clustered index values should be "),a("strong",[e._v("ever-increasing")]),e._v(". That way, the\norganization of existing data does not need to change when new entries are being\nadded (page splits). It should also be "),a("strong",[e._v("unchanging")]),e._v(", for the same reasons\n(changing the index value causes a delete-insert operation pair on the row).\nAdditionally, the index should be "),a("strong",[e._v("narrow")]),e._v(" (the less bytes the better). This\nway, there will be less intermediary pages.")]),e._v(" "),a("h3",{attrs:{id:"non-clustered-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-clustered-index"}},[e._v("#")]),e._v(" Non-Clustered Index")]),e._v(" "),a("p",[e._v("It doesn't sort the rows. It's stored in a different place, separately from the\ntable (similar to book index). It is stored as B-Tree.")]),e._v(" "),a("p",[e._v("When querying data, first DB checks the index, and then it goes to retrieve the\ndata at the specified address. Clustered Index uses the data directly, so it's\nfaster.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Clustered Index Comparison")]),e._v(" "),a("p",[e._v("Opposed to clustered index, there can be many non-clustered indexes per table\n(max 999).")]),e._v(" "),a("p",[e._v("By default, the non-clustered index does not contain other columns than the ones\nbeing indexed. Clustered index contains all columns, becasue that index is the\ndata itself. However, non-clustered index duplicates information, since it is\nstored separately from the data.")])]),e._v(" "),a("p",[e._v("The index is always in sync with the data (the same amount of rows).")]),e._v(" "),a("h4",{attrs:{id:"multiple-columns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-columns"}},[e._v("#")]),e._v(" Multiple Columns")]),e._v(" "),a("p",[e._v("Here's how to create an index:")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("NONCLUSTERED")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" inx_TransactionTypes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Transactions")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("TransactionType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v('The order of columns in the index matters. If our index contains columns\n"Amount" and "TransactionType", the index will be created in a way that rows are\nsorted by "Amount". We can quickly query data by the "Amount" column. However,\nquerying on "TransactionType" will require the DB to scan throught the entire\nindex data structure to find appropriate rows.')]),e._v(" "),a("p",[e._v("Here's an example:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(457),alt:""}})]),e._v(" "),a("p",[e._v('Our index has been created optimally for the queries that we want to use. The\norder of the columns is: "TransactionType", "Amount". If we used a reversed\norder, the green query would still work fine, however, the purple one would need\nto scan all the rows.')]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Ideal Design")]),e._v(" "),a("p",[e._v("Ideally, we want to have as few indexes as possible supporting as many queries\nas possible.")])]),e._v(" "),a("p",[e._v("For queries that include inequality predicates, the following applies:")]),e._v(" "),a("ul",[a("li",[e._v("columns using equality predicates should come before inequality ones in the\nindex")]),e._v(" "),a("li",[e._v("multiple inquality columns are hard to index well")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Merge Join")]),e._v(" "),a("p",[e._v("If we have multiple single-columns indexes, DB can use them both for a single\nquery (if it involves multiple columns) and merge-join the results.")]),e._v(" "),a("p",[e._v("It's still better to use an index that includes multiple columns.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("AND vs OR")]),e._v(" "),a("p",[e._v("The AND queries can often be satisfied with a single index on multiple columns.\nThe OR queries run optimally when there are multiple indexes, for each of the\nqueried columns.")]),e._v(" "),a("p",[e._v("The difference comes from the fact that each condition in the AND builds on top\nof the previous result. In the OR case, each condition has to work on the entire\ndataset, and they are joined in the end.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(458),alt:""}})]),e._v(" "),a("p",[e._v('The green part is served well by the index, the purple part needs to scan the\nwhole index. If there was a separate index for "TransactionType", it would be\nfaster.')])]),e._v(" "),a("h4",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[e._v("#")]),e._v(" Tips")]),e._v(" "),a("ul",[a("li",[e._v("Non-clustered Index can include additional columns than the ones being\nindexed. A "),a("code",[e._v("SELECT")]),e._v(" statement can filter based on indexed columns, but it\nmight require some additional columns to be returned. Including these columns\nin the index itself skips the step where the DB engine would have to lookup\nthis data in the actual raw data files.")]),e._v(" "),a("li",[e._v("The index can be a "),a("strong",[e._v("Filtered Index")]),e._v(' - this way, not all of the rows are\nindexed, but only the ones that satisfy some filter. It makes the index\nsmaller. E.g., it could be useful for tables that use the "soft-deletes"\ntechnique. We could skip such entities from the index if our queries should\nnot bother with them.')])])])}),[],!1,null,null,null);t.default=n.exports}}]);