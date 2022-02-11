(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{400:function(e,t,s){e.exports=s.p+"assets/img/identity-delegated-application-permissions.cb7f5f76.png"},464:function(e,t,s){"use strict";s.r(t);var a=s(31),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"microsoft-identity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-identity"}},[e._v("#")]),e._v(" Microsoft Identity")]),e._v(" "),a("h2",{attrs:{id:"access-token-vs-id-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-token-vs-id-token"}},[e._v("#")]),e._v(" Access Token vs. ID Token")]),e._v(" "),a("p",[e._v("OAuth2 protocol is used for "),a("strong",[e._v("authorization")]),e._v(" - to allow apps to get access to\nusers' resources without having the actual users' credentials to these\nresources. Instead, the app gets permission to retrieve an access token that\ngrants access to some resource.")]),e._v(" "),a("p",[e._v("ID Token is similar, but it's used for "),a("strong",[e._v("authentication")]),e._v(". Another difference is\nthat the access tokens are to be used by:")]),e._v(" "),a("ul",[a("li",[e._v("identity providers (that issue them)")]),e._v(" "),a("li",[e._v("resources (that give access to some data (or not) based on claims in the\ntokens)")])]),e._v(" "),a("p",[e._v("The apps that read that data for the users are not supposed to look into the\naccess tokens (and they are not the "),a("em",[e._v("audience")]),e._v(")! However, they are allowed and\nexpected to read the ID Tokens to learn who the user is. The actual "),a("em",[e._v("audience")]),e._v("\nof the ID Token is the app that is supposed to display user's name.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Microsoft Identity implements OAuth2 and OpenID Connect standards.")])]),e._v(" "),a("p",[e._v("Access Token cannot contain permissions for multiple different services. One\naccess taken can have multiple permissions, but only in scope of a single\nresource.")]),e._v(" "),a("h3",{attrs:{id:"acquiring-id-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acquiring-id-tokens"}},[e._v("#")]),e._v(" Acquiring ID Tokens")]),e._v(" "),a("p",[e._v("ID Tokens are acquired via the Implicit Flow.\n"),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc#send-the-sign-in-request",target:"_blank",rel:"noopener noreferrer"}},[e._v("MSDN"),a("OutboundLink")],1),e._v("\nsays that it's necessary to enable ID Tokens in implicit flow in order to\nreceive ID Tokens when calling the "),a("code",[e._v("/authorize")]),e._v(" endpoint.")]),e._v(" "),a("h2",{attrs:{id:"b2x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b2x"}},[e._v("#")]),e._v(" B2X")]),e._v(" "),a("h3",{attrs:{id:"b2b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b2b"}},[e._v("#")]),e._v(" B2B")]),e._v(" "),a("p",[e._v("AAD tenant may invite users that are not part of the organization. Such users\nwould have "),a("em",[e._v("shadow accounts")]),e._v(" created for the needs of business cooperation.\nAdmin of a tenant might manage access of the external users via the shadow\naccounts. They may be treated as guest accounts in the organization.")]),e._v(" "),a("p",[e._v("Uing B2B, the app may be a signle-tenancy one. The B2B users are treated as\nmembers of the tenant where they were invited to.")]),e._v(" "),a("p",[e._v("B2B is used for cooperation between businesses when they need to work on a\nsingle project together.")]),e._v(" "),a("h3",{attrs:{id:"b2c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b2c"}},[e._v("#")]),e._v(" B2C")]),e._v(" "),a("p",[e._v("It allows federating other identity providers under a single umbrella of AAD\nB2C. Without B2C, all users have to use Microsoft accounts. With B2C, the users\ncan use any OpenId Connect-compliant IdP.")]),e._v(" "),a("p",[e._v("B2C allows heavy customization of user flows. E.g., the sign up/sign in page can\nbe completely customized, with support for multiple languages, etc.")]),e._v(" "),a("p",[e._v("B2C is used to allow access to our product to users from the world, the actual\ncustomers.")]),e._v(" "),a("h4",{attrs:{id:"api-connectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-connectors"}},[e._v("#")]),e._v(" API Connectors")]),e._v(" "),a("p",[e._v("B2C allows to define API Connectors - endpoints that will be called by B2C\nduring user flows. For example, one of my custom user attributes in B2C could be\na nickname. I could have my own rules regarding nicknames and I could configure\nB2C to always call my custom API that either allows or disallows the usage of\nsome nickname.")]),e._v(" "),a("h2",{attrs:{id:"multi-tenant-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-tenant-apps"}},[e._v("#")]),e._v(" Multi-tenant Apps")]),e._v(" "),a("p",[e._v("AAD apps that are multitenant may be logged-into by users from multiple AAD\ntenants. Every tenant gets its own service principal entity for that app.")]),e._v(" "),a("h2",{attrs:{id:"app-registration-vs-service-principal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-registration-vs-service-principal"}},[e._v("#")]),e._v(" App Registration vs. Service Principal")]),e._v(" "),a("p",[e._v("There is a concept of "),a("strong",[e._v("app registration")]),e._v(" (client ID) and "),a("strong",[e._v("service\nprincipal")]),e._v(" (service principal ID).")]),e._v(" "),a("p",[e._v("In single-tenant apps these are basically the same thing. There's one app\nregistration and one service principal of the app in a single tenant.")]),e._v(" "),a("p",[e._v("In multi-tenant apps the concepts are separate. There is one app registration,\nbut for every tenant that has users accessing the app, there will be a separate\nservice principal created.")]),e._v(" "),a("p",[e._v("App Registration is like a template for multiple service principals to be\ncreated based on it.")]),e._v(" "),a("h2",{attrs:{id:"app-registrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-registrations"}},[e._v("#")]),e._v(" App Registrations")]),e._v(" "),a("h3",{attrs:{id:"app-roles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-roles"}},[e._v("#")]),e._v(" App Roles")]),e._v(" "),a("p",[e._v("App roles allow creation of custom roles that the app understands and works\nwith. These roles can then be assigned to the users of the app (potenaitally\nother apps). This way, we can create our own RBAC rules for the app, limiting\nwhat different users can access.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("An App Role may be restricted to be usable with:")]),e._v(" "),a("ul",[a("li",[e._v("only users and groups")]),e._v(" "),a("li",[e._v("only aps")]),e._v(" "),a("li",[e._v("any of the above")])])]),e._v(" "),a("p",[e._v("The roles may be applied to users/apps in the Enterprise Applications panel of\nAAD. A set of roles would have been created in the app registration. Each tenant\nmight assign different sets of people to these roles via their own service\nprinciples (my app in their tenant).")]),e._v(" "),a("p",[e._v("Compared to groups, App Roles are a better choice. They are app-specific.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Required Roles")]),e._v(" "),a("p",[e._v("We may restrict our app principals to only be accessible to users that have some\nrole assigned. If someone without a role tries to get an access token to my app,\nthey will not get it, authentication will fail. It's done in the Properties pane\nof Enterprise Applications entry of my app.")]),e._v(" "),a("p",[e._v("Without it, any user in my tenant can get an access token to my apps. That\naccess token could be empty, but it's still better to disallow unintended users\nif we don't expect anyone in the organization to use the app.")])]),e._v(" "),a("p",[e._v("The assigned roles will be available in the access token.")]),e._v(" "),a("h3",{attrs:{id:"api-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-permissions"}},[e._v("#")]),e._v(" API Permissions")]),e._v(" "),a("p",[e._v("We can define the allowed set of permissions that the app may ask for. They may\nalso be consented by the admin of a tenant. With that, individual users of the\napp will not be asked for consent.")]),e._v(" "),a("p",[e._v('An app may also ask for permissions "dynamically", so the permission does not\nhave to be defined in '),a("em",[e._v("API Permissions")]),e._v(" in AAD. In such a case, the user has to\nconsent the permission to allow the app to get the requested data.")]),e._v(" "),a("h3",{attrs:{id:"expose-an-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose-an-api"}},[e._v("#")]),e._v(" Expose an API")]),e._v(" "),a("p",[e._v("Described in "),a("a",{attrs:{href:"#building-a-custom-api"}},[e._v("Building a Custom API")])]),e._v(" "),a("h2",{attrs:{id:"building-a-custom-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-a-custom-api"}},[e._v("#")]),e._v(" Building a Custom API")]),e._v(" "),a("p",[e._v("When building our own API that is going to be the actual resource of data\n(protected data), we'd do the following.")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Authentication")]),e._v(" panel in the app's registration would stay empty. This app\nwill not allow signing-in of users.")]),e._v(" "),a("h3",{attrs:{id:"scopes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[e._v("#")]),e._v(" Scopes")]),e._v(" "),a("p",[e._v("We can define the scopes that our API exposes in the "),a("em",[e._v("Expose an API")]),e._v(" panel of\napp registration. These scopes are only for user flows (delegated).")]),e._v(" "),a("p",[e._v("Technically, our API does not have to define any scopes, we could just rely on\nthe valid access token being delivered, signed by AAD. Scopes allow for\ndifferent levels of access to be defined.")]),e._v(" "),a("p",[e._v("When defining a scope, we can specify if that scope requires a consent of an\nadmin of a tenant. If not, just the user's consent will be enough for client\napps to acquire that permission.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Client Credentials")]),e._v(" "),a("p",[e._v("Scopes are for user flows only. Daemon apps should use "),a("a",{attrs:{href:"#app-roles"}},[e._v("App\nRoles")]),e._v(".\nThe roles may be assigned to users in the "),a("em",[e._v("API permissions")]),e._v(" panel. Since dameon\napps are not interactive, there is no way to use dynamic permissions. All\npermissions that the app needs need to be assigned up front.")]),e._v(" "),a("p",[e._v("When requesting a token, a daemon app should ask for the "),a("code",[e._v(".default")]),e._v(" scope. It\nwil return an access token with all of the permissions (app roles) that were\nassigned to the app in the AAD portal.")]),e._v(" "),a("p",[e._v("Assigned app roles have to be granted consent by an admin.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Scopes vs App Roles")]),e._v(" "),a("p",[e._v("When assigning scopes/app roles to our apps, the scopes we defined in "),a("em",[e._v("Expose an\nAPI")]),e._v(' can be found under "Delegated permissions", while the App Roles can be\nfound under "Application Permissions')]),e._v(" "),a("p",[a("img",{attrs:{src:s(400),alt:""}})])]),e._v(" "),a("h2",{attrs:{id:"aad-groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aad-groups"}},[e._v("#")]),e._v(" AAD Groups")]),e._v(" "),a("p",[e._v('AAD allows entities to be assigned to groups, similarly to how "old" AD works.\nIt causes a problem if there is a big amount of groups (> 250 or even less on\nimplicit flow), because they will not fit into JWT. In such a case the groups\nneed to be fetched from the Graph API. In organizations being a member of a lot\nof groups is typical.')]),e._v(" "),a("p",[e._v("Roles are considered more modern than Groups. "),a("strong",[e._v("Usage of Groups is\ndiscouraged")]),e._v(", becuase:")]),e._v(" "),a("ul",[a("li",[e._v("Users are typically assigned to a lot of groups. If there's too many, the\napp has to make a call to Graph API to read groups\n"),a("ul",[a("li",[e._v("It might also be undesired to share information about all the groups that\na user belongs to")])])]),e._v(" "),a("li",[e._v("Groups are returned in the token as GUIDs, which is not easy to use in code\n(e.g. with the "),a("code",[e._v("Authorize")]),e._v(" attribute in ASP.NET). Only in the case of AD\nConnect-synchronized groups, the names will be delivered.")]),e._v(" "),a("li",[e._v("Groups are not app-specific, they are global. The token will be huge with\nlots of unneeded information")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Groups as Roles")]),e._v(" "),a("p",[e._v("An app registration may be configured (via its Manifest) to include groups as\nroles in the ID Token (and access token?).")])]),e._v(" "),a("p",[e._v("App Roles may be assigned to AAD groups (on premium plan of AAD).")])])}),[],!1,null,null,null);t.default=n.exports}}]);