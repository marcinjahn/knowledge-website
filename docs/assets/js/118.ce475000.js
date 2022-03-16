(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{572:function(e,t,a){"use strict";a.r(t);var o=a(31),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sender-constraint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sender-constraint"}},[e._v("#")]),e._v(" Sender Constraint")]),e._v(" "),a("p",[e._v("In a typical OAuth2 flow, a Client receives an access token from an\nAuthorization Server, and attaches that access token to every request to a\nResource Server.")]),e._v(" "),a("p",[e._v("This simple mechanism works well if we're sure that there is no chance for an\nattacker to steal an access token. However, if such an event occurs, an attacker\ncan easily get access to the secured Resource Server just by attaching the\nstolen access token to their request. The only security in such a scenario is\nthe fact that access tokens are time-constrained.")]),e._v(" "),a("p",[e._v("There are ways to make access tokens bound to the actual entity that received\nthe token in the first place.")]),e._v(" "),a("h2",{attrs:{id:"mtls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mtls"}},[e._v("#")]),e._v(" MTLS")]),e._v(" "),a("p",[e._v("One way is to use mutual TLS authentication. When retrieving an access token\nfrom an Authorization Server, the communication uses mutual TLS. The token then\ncontains information about the public key (or hash of it) of the entity that\nrequested the token in its content.")]),e._v(" "),a("p",[e._v("Then, the Resource Server should also use mutual TLS in order to verify if the\ncaller's certificate matches the one included in the token.")]),e._v(" "),a("p",[e._v("The information about the caller's public key is included in the "),a("code",[e._v("cnf")]),e._v(" claim of\nthe access token.")]),e._v(" "),a("p",[e._v("This solution is not very popular because mutual TLS authentication is not\npopular as well.")]),e._v(" "),a("h2",{attrs:{id:"dpop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dpop"}},[e._v("#")]),e._v(" DPoP")]),e._v(" "),a("p",[e._v("The idea is a bit similar to MTLS, but without the overhead of mutual TLS.\nBefore making a request for an access token, the client needs to generate a pair\nof public-private keys. When the client requests an access token, it provides an\nAuthorization Server with a bunch of information encoded in JWT, most\nimportantly its public key. That JWT is called the "),a("strong",[e._v("DPoP Proof")]),e._v(". The proof is\nsigned so that the Authorization Server can verify that the author of the proof\nknows the private key. Once again, the access token will contain\na "),a("code",[e._v("cnf")]),e._v(" claim with the public key of the caller.")]),e._v(" "),a("p",[e._v("Now, whenever we call the Resource Server, we have to include in the request:")]),e._v(" "),a("ul",[a("li",[e._v("access token")]),e._v(" "),a("li",[e._v("a new DPoP proof (different than the one sent to the Authorization Server)")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("DPoP proof contents")]),e._v(" "),a("p",[e._v("Other than the public key, DPoP also contains the resource being accesses. When\nattaching the proof to the call to the Authorization Server, the resource would\nbe the Authorization Server itself.")]),e._v(" "),a("p",[e._v("When calling the actual Resource Server, the resource would be that. That's why\nwe have to use different DPoP proofs when calling the Authorization Server and\nResource Server.")]),e._v(" "),a("p",[e._v("Additionally, there should also be a "),a("code",[e._v("htu")]),e._v(" claim that contains the HTTP method\nthat we will use when calling the Resource Server.")]),e._v(" "),a("p",[e._v("There are also some other information.")])]),e._v(" "),a("p",[e._v("The Resource Server can check whether the "),a("code",[e._v("cnf")]),e._v(" claim is the public key that\nmatches the private key that was used to sign the DPoP proof.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Replay")]),e._v(" "),a("p",[e._v('DPoP does not protect against the "replay attack". If an attacker gets a hold of\nAccess Token and DPoP proof, they can use these to send requests until the\naccess token is valid. However, compared to the past, with DPoP the attacker is\nable to send only the type of requests that DPoP proof allows (e.g., the same\nHTTP method).')])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://auth0.com/blog/id-token-access-token-what-is-the-difference/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://auth0.com/blog/id-token-access-token-what-is-the-difference/"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://community.auth0.com/t/identity-unlocked-explained-episode-1/49866",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://community.auth0.com/t/identity-unlocked-explained-episode-1/49866"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);