(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{651:function(e,t,s){"use strict";s.r(t);var a=s(22),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"containers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#containers"}},[e._v("#")]),e._v(" Containers")]),e._v(" "),s("h2",{attrs:{id:"namespaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#namespaces"}},[e._v("#")]),e._v(" Namespaces")]),e._v(" "),s("p",[e._v("Containers rely on namespaces in Linux. There are 8 kinds of namespaces:")]),e._v(" "),s("ul",[s("li",[e._v("cgroups")]),e._v(" "),s("li",[e._v("mount")]),e._v(" "),s("li",[e._v("process ID")]),e._v(" "),s("li",[e._v("network")]),e._v(" "),s("li",[e._v("IPC")]),e._v(" "),s("li",[e._v("UNIX time-sharing system (UTS) - hostname, domain name")]),e._v(" "),s("li",[e._v("users, groups")]),e._v(" "),s("li",[e._v("time")])]),e._v(" "),s("p",[e._v("Each container is assigned with new namespaces of these types, creating an\nillusion for the process that it runs on a separate machine.")]),e._v(" "),s("p",[e._v("Diferent processes may also share some namespace types, but not others:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/ozbsNFE.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"networking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#networking"}},[e._v("#")]),e._v(" Networking")]),e._v(" "),s("p",[e._v("Here's how network namespacing works. When a new container is started, it\nreceives a set of interfaces that are placed in new namespace:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/emBNfbw.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"cgroups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cgroups"}},[e._v("#")]),e._v(" cgroups")]),e._v(" "),s("p",[e._v("cgroups are another feature of Linux kernel. It allows to limit system resources\nassigned to a process (CPU time, CPU cores, RAM, disk, network bandwidth).")]),e._v(" "),s("p",[e._v("When we're setting restrictions for containers (e.g. "),s("code",[e._v('--memory="100m"')]),e._v("),\ncontainer engine actualy uses cgroups to limit the process.")]),e._v(" "),s("h2",{attrs:{id:"capabilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),s("p",[e._v("Containers should not be able to invoke sys-calls that may break other\ncontainers (like changing time, or loading kernel modules).")]),e._v(" "),s("p",[e._v("Docker has "),s("code",[e._v("--privileged")]),e._v(" flag that gives special permissions to containers.\nIt's not ideal, because it gives ALL permissions.")]),e._v(" "),s("p",[e._v("Another option is to use Linux "),s("strong",[e._v("capabilities")]),e._v(". There are many of them giivng\ngranular access to specific operations.")]),e._v(" "),s("p",[e._v("Another option is "),s("strong",[e._v("seccomp")]),e._v(" (Secure Computing Mode). A custom profile (JSON\nfile) can be applied to a containers listing sys-calls that it can make.")]),e._v(" "),s("p",[e._v("Further hardening may be achieved with AppArmor or SELinux (MAC).")]),e._v(" "),s("h2",{attrs:{id:"rootless-containers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rootless-containers"}},[e._v("#")]),e._v(" Rootless Containers")]),e._v(" "),s("p",[e._v("Podman popularized the idea of using rootless containers. Previously, it was\ncommon to run containers with Docker with root privileges, which translated to\nroot access on the host as well (although Docker does support rootless\ncontainers as well!).")]),e._v(" "),s("p",[e._v('Rootless containers make use of user namespaces. It gives us access to user\nmapping and allows us to run the container with any UID, even UID = 0, while on\nthe host system that UID would be mapped to a "normal", non-root user.')]),e._v(" "),s("p",[e._v("An easy way to test that is to run "),s("code",[e._v("podman unshare id")]),e._v(". It's going to run "),s("code",[e._v("id")]),e._v('\nprogram in a user namespace. It will print "0" as a result. A non-root user on a\nhost (typically 1000) translates to a root in the namespace.\nWe can see the mapping offsets in the '),s("code",[e._v("/etc/subuid")]),e._v(" file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mnj:100000:65536\n")])])]),s("p",[e._v("The output means, that the user 1 in a container will be mapped to user 100000\non a host. User 2 would be mapped to 100001, and so on. A maximum of 65536 users\nmay be mapped (that value may be modified, it's not a hard limit).")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("unshare")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("podman unshare")]),e._v(" command is great help in translating host UIDs to container\nUIDs. If, for example, some container runs with UID 1002, and we want to to give\nthat UID access to some files on the host, we could run "),s("code",[e._v("podman unshare chown 1002:1002 some-file")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"volumes-and-selinux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volumes-and-selinux"}},[e._v("#")]),e._v(" Volumes and SELinux")]),e._v(" "),s("p",[e._v("Mounting volumes in rootles context is different than it is with rootful\nenvironments. In the latter case, whatever you mount, it will probably just work\nwithout any further tinkering. In rootless podman, you will often experience\nissues with "),s("RouterLink",{attrs:{to:"/technologies/linux/selinux.html"}},[e._v("SELinux")]),e._v(" (if your system uses SELinux MAC). One of\nthe ways to get around that is to apply the "),s("code",[e._v(":z")]),e._v(" or "),s("code",[e._v(":Z")]),e._v(" (private, additionally\nuses MCS) to volume definition. That will apply the right SELinux labeling to\nthe files being shared as a volume (only if we're attaching host dir, it is not\nneeded when creating a volume entity).")],1),e._v(" "),s("p",[e._v("Containers run with the "),s("code",[e._v("container_t")]),e._v(" SELinux domain. They are allowed to access\nthe "),s("code",[e._v("container_file_t")]),e._v(" and "),s("code",[e._v("container_ro_file_t")]),e._v(" typed files. The "),s("code",[e._v(":z")]),e._v("/"),s("code",[e._v(":Z")]),e._v("\nparameters apply the "),s("code",[e._v("container_file_t")]),e._v(" to the mounted files.")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("It's important to note that "),s("code",[e._v(":z")]),e._v(" and "),s("code",[e._v(":Z")]),e._v(" relabel the resource, which could\nimpact some other processes that require the original labels to be there! After\nfinishing the work with containers, it's probably a good idea to reset the\nlabeling with "),s("code",[e._v("restorecon")]),e._v(".")])]),e._v(" "),s("p",[e._v("Another issue could be due to traditional DAC permissions. The user mapping also\nworks for volumes, so a UID 0 in a container will map to UID 1000 on a host. So,\na container will be able to access files of UID 1000 on the host.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Disable Labeling")]),e._v(" "),s("p",[e._v("Labeling is a security feature that keeps processes within containers from doing\nharm to files on the host. When the container is trusted though, we can relax\nthe security by disabling SELinux label separation for containers.")]),e._v(" "),s("p",[e._v("We can do that for a single container while runing it with "),s("code",[e._v("podamn run")]),e._v(" by\nadding "),s("code",[e._v("--security-opt label=disable")]),e._v(".")]),e._v(" "),s("p",[e._v("It's also possible to disable SELinux for all podman containers via\n"),s("code",[e._v("/etc/containers/containers.conf")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"standarization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standarization"}},[e._v("#")]),e._v(" Standarization")]),e._v(" "),s("p",[e._v("Docker was the first container platform to make them popular. There's "),s("strong",[e._v("CRI")]),e._v("\n(Container Runtime Interface) that container platforms adhere to.")]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[e._v('"Kubernetes in Action (Second Edition)" book')]),e._v(" "),s("li",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man7/namespaces.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("man namespaces"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://blog.christophersmart.com/2021/01/26/user-ids-and-rootless-containers-with-podman/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rootless\nContainers"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.mankier.com/8/container_selinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("container_selinux"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.redhat.com/sysadmin/user-namespaces-selinux-rootless-containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("User namespaces with Podman (Red\nHat)"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);