(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{568:function(e,t,a){"use strict";a.r(t);var s=a(31),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling"}},[e._v("#")]),e._v(" Scaling")]),e._v(" "),a("p",[e._v("It's not very convenient to manage pods individually. We need ways to deploy\npods in multiple replicas, which is a base for high availability of the service.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Ownership")]),e._v(" "),a("p",[e._v('Pods managed by ReplicaSet/Deployment have a special "ownerReference" section in\ntheir "metadata". A pod can have multiple owners.')]),e._v(" "),a("p",[e._v("Pods are auto-deleted when the owners are deleted.")])]),e._v(" "),a("h2",{attrs:{id:"replicaset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replicaset"}},[e._v("#")]),e._v(" ReplicaSet")]),e._v(" "),a("p",[e._v("ReplicaSet allows us to create a group of pod replicas, instead of just one pod.\nThe pods managed by the ReplicaSet are selected using an immutable label\nselector (similarly to "),a("RouterLink",{attrs:{to:"/technologies/kubernetes/services.html"}},[e._v("Services")]),e._v("). There is also a template,\nwhich defines the pod(s) that will be created under ReplicaSet. Such a pod has\nto conform to the "),a("em",[e._v("selector")]),e._v(" specified by the ReplicaSet. If some pods matching\nthe selector already existed prior to the creation of the ReplicaSet, they're\ncounted as part of the ReplicaSet.")],1),e._v(" "),a("p",[e._v("Pod names are generated based on the ReplicaSet's name, but it can be changed\nwith the "),a("code",[e._v("generateName")]),e._v(" setting.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("ReplicationController")]),e._v(" "),a("p",[e._v("In the past, ReplicationController was used instead of ReplicaSet. It behaved\nthe same as ReplicaSet does. It is now deprecated.")])]),e._v(" "),a("h3",{attrs:{id:"updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[e._v("#")]),e._v(" Updates")]),e._v(" "),a("p",[e._v("We're free to change "),a("code",[e._v("replicas")]),e._v(" count and the number of pods will reflect the\nsetting.")]),e._v(" "),a("p",[e._v("If we modify the "),a("code",[e._v("template")]),e._v(" of some existing ReplicaSet, the existing pods will\nnot be updated. Instead, just the pods created by ReplicaSet in the future will\nhave the new settings applied.")]),e._v(" "),a("h2",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),a("p",[e._v("Creating a simple deployment: "),a("code",[e._v("kubectl create deployment kiada --image=luksa/kiada:0.1")])]),e._v(" "),a("p",[e._v("Kubectl sends a POST request to "),a("code",[e._v("/deployments")]),e._v(" of K8s API to create a\n"),a("em",[e._v("Deployment")]),e._v(" object. Kubernetes creates a "),a("em",[e._v("Pod")]),e._v(" object based on Deployment. The\npod is assigned to a Worker Node. Kubelet on a worker node pulls the image and\nruns the container.")]),e._v(" "),a("h3",{attrs:{id:"scaling-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling-2"}},[e._v("#")]),e._v(" Scaling")]),e._v(" "),a("p",[a("code",[e._v("kubectl scale deployment kiada --replicas=3")])]),e._v(" "),a("h2",{attrs:{id:"pods-deletion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pods-deletion"}},[e._v("#")]),e._v(" Pods Deletion")]),e._v(" "),a("p",[e._v("When scaling down, K8s selects pods to delete based on some priorities:")]),e._v(" "),a("ul",[a("li",[e._v("pods that are not started")]),e._v(" "),a("li",[e._v("pods collocated on the same node with greater number of replicas")]),e._v(" "),a("li",[e._v("pods that lived shorter")]),e._v(" "),a("li",[e._v("pods with a greater number of restarts")])]),e._v(" "),a("p",[e._v("We can also influence the priority by applying "),a("code",[e._v("pod-deletion-cost")]),e._v(" annotation to\nspecific pods.")]),e._v(" "),a("h2",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[e._v("#")]),e._v(" Logs")]),e._v(" "),a("p",[e._v("There is no easy way to display logs from all the pods in a ReplicaSet/Deployment.\nInstead, we have to use label selector:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("k logs -l "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myapp --prefix --all-containers\n")])])]),a("ul",[a("li",[a("code",[e._v("--prefix")]),e._v(" prefixes each log with the container that it came from")]),e._v(" "),a("li",[a("code",[e._v("--all-containers")]),e._v(" displays logs from all containers of the pods")])])])}),[],!1,null,null,null);t.default=o.exports}}]);