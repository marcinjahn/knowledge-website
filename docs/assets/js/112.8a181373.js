(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{597:function(a,t,e){"use strict";e.r(t);var s=e(22),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"ansible"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ansible"}},[a._v("#")]),a._v(" Ansible")]),a._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),e("p",[a._v("It is used for automation of configuration processes. You inform Ansible what is\nthe DESIRED state and Ansible will try to achieve it, no matter what the CURRENT\nstate is. Example: you want to have a file in a spcified location with a\nspecified content. There ar ea few possible starting points:")]),a._v(" "),e("ul",[e("li",[a._v("the file does not exist - Ansible will create it")]),a._v(" "),e("li",[a._v("the file exist, but has a different content - Ansible will update the file")]),a._v(" "),e("li",[a._v("the file exists and has the right contnet - Ansible will do nothing")])]),a._v(" "),e("h2",{attrs:{id:"manual-automation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-automation"}},[a._v("#")]),a._v(" Manual -> Automation")]),a._v(" "),e("p",[a._v("Evolution of automation:")]),a._v(" "),e("ol",[e("li",[a._v("Manual setup")]),a._v(" "),e("li",[a._v("Writing scripts (.sh, .ps, etc.)")]),a._v(" "),e("li",[a._v("Using Ansible ad-hoc")]),a._v(" "),e("li",[a._v("Writing Ansible playbooks")])]),a._v(" "),e("p",[a._v("Difference between scripting and Ansible is that in a script we need to say\nexactly what to do and cover various cases. Ansible takes care of these\ndifficulties. We just say what we want to have in the end and not how to do\nthat.")]),a._v(" "),e("h2",{attrs:{id:"modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[a._v("#")]),a._v(" Modules")]),a._v(" "),e("p",[a._v("Ansible relies on modules. There are many of them for various operations (like\nfor file operations, macOS setup, specific device setup, etc.).")]),a._v(" "),e("p",[a._v("Most modules are idempotent, some are not.")]),a._v(" "),e("p",[a._v("Every module can have some return values (i.e. a "),e("code",[a._v("file")]),a._v(" module returns SHA\nchecksum of the file afer modifications, owner of the file and other things).")]),a._v(" "),e("h2",{attrs:{id:"documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[a._v("#")]),a._v(" Documentation")]),a._v(" "),e("p",[e("code",[a._v("ansible-doc")]),a._v(" command is useful, i.e. "),e("code",[a._v("ansible-doc copy")]),a._v(" gives information about\n"),e("code",[a._v("copy")]),a._v(" module.")]),a._v(" "),e("h2",{attrs:{id:"ad-hoc-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ad-hoc-commands"}},[a._v("#")]),a._v(" Ad-hoc commands")]),a._v(" "),e("p",[e("code",[a._v("ansible")]),a._v(" command allows to run one chosen module with specified inputs.")]),a._v(" "),e("p",[e("code",[a._v("--dry-run")]),a._v(" allows to see what the result would be without doing any actual\nchanges.")]),a._v(" "),e("h2",{attrs:{id:"playbooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playbooks"}},[a._v("#")]),a._v(" Playbooks")]),a._v(" "),e("p",[a._v("Playbooks are defined in YAML files and contain tasks that should be done.")]),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Ensure ~/.gitconfig copied from master.gitconfig\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(' src="../master.gitconfig" dest="~/.gitconfig"\n')])])]),e("p",[a._v('We can have many "plays" in the same file:')]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Ensure ~/.gitconfig copied from master.gitconfig\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(' src="../master.gitconfig" dest="~/.gitconfig"\n  \n'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Ensure homebrw packages are installed\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("homebrew")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" name=bat state=latest\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("homebrew")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" jq\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" latest\n")])])]),e("h3",{attrs:{id:"tasks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[a._v("#")]),a._v(" Tasks")]),a._v(" "),e("p",[a._v("The task's parameters can be defined in multiple ways, like the two homebrew\ntasks above.")]),a._v(" "),e("p",[a._v("Plays can have tags, which allow to limit the plays that we want to execute from\na given file ("),e("code",[a._v("tags")]),a._v(").")]),a._v(" "),e("p",[a._v("A task can have a condition ("),e("code",[a._v("when")]),a._v("), i.e.: "),e("code",[a._v("when: ansible_os_family == 'RedHat'")]),a._v(" will run the task only if the host's OS is in the Red Hat family.")]),a._v(" "),e("p",[a._v("Task can have a "),e("code",[a._v("name")]),a._v(".")]),a._v(" "),e("p",[a._v("Task can "),e("code",[a._v("ignore_errors: yes")]),a._v(" to not stop the play if it fails.")]),a._v(" "),e("p",[a._v("Tasks can store their outputs in variables with "),e("code",[a._v("register: my-variable")]),a._v(" There is\na task that prints these variabes, it's called "),e("code",[a._v("debug")]),a._v(". i.e.: "),e("code",[a._v("debug: var=my-variable")]),a._v(". Outputs are in JOSN format and we are able to "),e("code",[a._v("debug")]),a._v(" a\nspecific subset of it ("),e("code",[a._v("my-variable.some-parameter")]),a._v(" ).")]),a._v(" "),e("h3",{attrs:{id:"command-to-run-a-playbook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-to-run-a-playbook"}},[a._v("#")]),a._v(" Command to run a playbook")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ansible-playbook my-playbook.yml\n")])])]),e("p",[e("code",[a._v("-v")]),a._v(" flag shows more info. It can be added multiple times to increase verbosity\nlevel.")]),a._v(" "),e("h2",{attrs:{id:"multiple-hosts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-hosts"}},[a._v("#")]),a._v(" Multiple hosts")]),a._v(" "),e("p",[a._v("Although Ansible can work just with localhost, it is also suitable to configure\nmultiple hosts. They are referred to as "),e("strong",[a._v("INVENTORY")]),a._v(".")]),a._v(" "),e("p",[a._v('Inventory can be defined as a set of files in a chosen directory. They can be\ngrouped under various labels. This helps us to target subsets of our inventory.\n"all" group is the top level group, contains all of the hosts.')]),a._v(" "),e("p",[a._v("We can use both ad-hoc commnands and playbooks agains inventory. Example of an\nad-hoc command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ansible -m "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" -a "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"git config --global --list"')]),a._v(" docker-containers\n")])])]),e("p",[a._v('In the case above, I\'d run the command agains hosts that are in the\n"docker-containers" group (docker containers can be hosts!).')]),a._v(" "),e("p",[e("code",[a._v("ansible-inventory")]),a._v(" command manages inventory.")]),a._v(" "),e("p",[e("code",[a._v("--list")]),a._v(" shows all hosts in our inventory.")]),a._v(" "),e("h3",{attrs:{id:"connections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[a._v("#")]),a._v(" Connections")]),a._v(" "),e("p",[a._v("We can use various connection types to reach hosts. For example, we could use\nthe "),e("code",[a._v("local")]),a._v(" connection to create some docker containers on our localhost (with\nthe "),e("code",[a._v("docker_container")]),a._v(" module) and then, use the "),e("code",[a._v("docker")]),a._v(" connection to do\nsomething on these containers.")]),a._v(" "),e("h3",{attrs:{id:"ansible-pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ansible-pull"}},[a._v("#")]),a._v(" ansible-pull")]),a._v(" "),e("p",[a._v("Noramlly, there is a central Manager Node that runs the playbooks on the hosts\n(push model). Ansible can also work in a different fashion. Each host can use\n"),e("code",[a._v("ansible-pull")]),a._v(" which connects to some VCS, pulls playbooks and runs them on the\nhost.")]),a._v(" "),e("h2",{attrs:{id:"ansible-galaxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ansible-galaxy"}},[a._v("#")]),a._v(" Ansible Galaxy")]),a._v(" "),e("p",[a._v("Galaxy enables community to share "),e("strong",[a._v("ROLES")]),a._v(" and "),e("strong",[a._v("COLLECTIONS")]),a._v(" (kind of Roles\nV2). These are constructs that sit between a module and a playbook.")]),a._v(" "),e("p",[a._v("Galaxy is like a package source for Ansible (same as .NET and NuGet or Node.JS\nand npm)")])])}),[],!1,null,null,null);t.default=n.exports}}]);