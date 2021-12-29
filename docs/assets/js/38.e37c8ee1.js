(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{445:function(e,s,t){"use strict";t.r(s);var o=t(31),a=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"gist-of-linux-tooling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gist-of-linux-tooling"}},[e._v("#")]),e._v(" Gist of Linux Tooling")]),e._v(" "),t("h2",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[e._v("#")]),e._v(" SSH")]),e._v(" "),t("p",[t("code",[e._v("ssh-keygen")]),e._v(" - generates SSH keys")]),e._v(" "),t("p",[t("code",[e._v("ssh-copy-id marcin@rpi.local")]),e._v(" - copy client SSH public key to server for SSH\nauthentication ("),t("code",[e._v(".ssh/authorized_keys")]),e._v(" on the server).")]),e._v(" "),t("p",[t("code",[e._v("~/.ssh/known_hosts")]),e._v(" - contains public keys of servers that we SSH-ed into.")]),e._v(" "),t("p",[e._v("Access to SSH with root should be disabled ("),t("code",[e._v("/etc/ssh/sshd_config")]),e._v(").")]),e._v(" "),t("h2",{attrs:{id:"useful-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useful-commands"}},[e._v("#")]),e._v(" Useful Commands")]),e._v(" "),t("p",[t("code",[e._v("tty")]),e._v(" - current terminal")]),e._v(" "),t("p",[t("code",[e._v("who")]),e._v(" - logged in users")]),e._v(" "),t("p",[t("code",[e._v("uptime")]),e._v(" - shows server's uptime")]),e._v(" "),t("p",[t("code",[e._v("free")]),e._v(" - shows free memory")]),e._v(" "),t("p",[t("code",[e._v("pwd -P")]),e._v(" - shows the actual directory (mostly useful for dirs being symbolic\nlinks)")]),e._v(" "),t("p",[t("code",[e._v("type <command>")]),e._v(" - shows what a command is (program, alias, ...)")]),e._v(" "),t("p",[t("code",[e._v("!$")]),e._v(" expands to the last used argument (if previous command had many arguments,\njust the last one is used)")]),e._v(" "),t("p",[t("code",[e._v("md5sum <file>")]),e._v(" can be used  to check md5 of a file (i.e., to compare if some\nbinary is the same as another binary)")]),e._v(" "),t("p",[t("code",[e._v("set -o noclobber")]),e._v(" - using output redirect "),t("code",[e._v(">")]),e._v(' is "blocked" if a file would be\noverwritten. It can be bypasses using '),t("code",[e._v(">|")]),e._v(". "),t("code",[e._v("set +o noclobber")]),e._v(' will remove the\n"lock" back.')]),e._v(" "),t("p",[t("code",[e._v("uname -r")]),e._v(" - kernel version "),t("code",[e._v("lsb_release -d")]),e._v(" - distribution description (not\nalways available) "),t("code",[e._v("cat /proc/version")]),e._v(" - similar to above two")]),e._v(" "),t("p",[t("code",[e._v("runlevel")]),e._v(' - current runlevel ("5" - "graphical.target", "3" -\n"multi-user.target" (no GUI)) '),t("code",[e._v("systemctl isolate multi-user.target")]),e._v(" - set\ncurrent runlevel "),t("code",[e._v("systemctl set-default multi-user.target")]),e._v(" - set default\nrunlevel")]),e._v(" "),t("p",[t("code",[e._v("sleep 100")]),e._v(" - waits for 100 seconds")]),e._v(" "),t("p",[t("code",[e._v("whereis")]),e._v(" - finds commands in more places than "),t("code",[e._v("which")])]),e._v(" "),t("p",[t("code",[e._v("locate")]),e._v(" - locates filenames using precompiled index. The DB is updated with\n"),t("code",[e._v("updatedb")]),e._v(" (it runs using "),t("code",[e._v("cron")]),e._v(", so it's not always recent).")]),e._v(" "),t("h2",{attrs:{id:"working-with-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-with-files"}},[e._v("#")]),e._v(" Working with files")]),e._v(" "),t("p",[t("code",[e._v("mkdir -p some/dir")]),e._v(" - creates all directories "),t("code",[e._v("cp -R one two")]),e._v(" - copies files\nrecursively")]),e._v(" "),t("h2",{attrs:{id:"redirection-and-pipes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redirection-and-pipes"}},[e._v("#")]),e._v(" Redirection and pipes")]),e._v(" "),t("p",[t("code",[e._v(">")]),e._v("/"),t("code",[e._v("1>")]),e._v(" - redirects "),t("em",[e._v("STDOUT")]),e._v(" "),t("code",[e._v("2>")]),e._v(" - redirects "),t("em",[e._v("STDERR")]),e._v(" "),t("code",[e._v("&>")]),e._v(" - redirects both\n"),t("em",[e._v("STDOUT")]),e._v(" and "),t("em",[e._v("STDERR")]),e._v(" "),t("code",[e._v("<")]),e._v(" - redirects "),t("em",[e._v("STDIN")]),e._v(" "),t("code",[e._v("|")]),e._v(" - unnamed pipe. It connects\n"),t("em",[e._v("STDOUT")]),e._v(" of one program to "),t("em",[e._v("STDIN")]),e._v(" of another program")]),e._v(" "),t("p",[t("code",[e._v("tee")]),e._v(" - can be used instead of "),t("code",[e._v(">")]),e._v(" in various cases (and "),t("code",[e._v("tee -a")]),e._v(" is an\nequivalent of "),t("code",[e._v(">>")]),e._v("):")]),e._v(" "),t("ul",[t("li",[e._v("to redirect output to a file, but also to display it in the terminal ("),t("code",[e._v("ls | tee myfile")]),e._v(")")]),e._v(" "),t("li",[e._v("to redirect output to a file that requires root permissions ("),t("code",[e._v('echo "127.0.0.1 localhost" | sudo tee -a /etc/hosts')]),e._v("). "),t("code",[e._v(">>")]),e._v(" wouldn't be able to do that.")])]),e._v(" "),t("p",[e._v("There are also named pipes, which are special kind of files ("),t("code",[e._v("p")]),e._v(") that act as\nFIFO queues. When one process writes to it, it's blocked until another process\nreads the data out. It accomplishes IPC (Inter-Process Communication).")]),e._v(" "),t("h2",{attrs:{id:"links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),t("p",[t("code",[e._v("ls -l <file>")]),e._v(" shows how many hard links (not soft-links) a file has (shown\nafter permissions).")]),e._v(" "),t("p",[t("code",[e._v("ln f1 f2")]),e._v(" - creates a hard link "),t("code",[e._v("ln -s f1 f3")]),e._v(" - creates a symbolic link")]),e._v(" "),t("p",[t("strong",[e._v("Hard Link")]),e._v(" - another name of an existing file. The hard-link is just another\nentry for the same inode in the file names map.")]),e._v(" "),t("ul",[t("li",[e._v("can be created only on the same filesystem nad same partition")]),e._v(" "),t("li",[e._v("can't be created for directories")]),e._v(" "),t("li",[e._v("has the same inode as the original file - so it's the same file!")]),e._v(" "),t("li",[e._v('deleting the "original" file is OK - hard link will still contain data')])]),e._v(" "),t("p",[t("strong",[e._v("Soft Link")]),e._v(" - a shortcut to a file. It just points to another file")]),e._v(" "),t("ul",[t("li",[e._v("each soft link is a separate file")]),e._v(" "),t("li",[e._v("deleteing the original file makes soft link unusable")]),e._v(" "),t("li",[e._v("has a diffrent inode than the original file (becuse it is a different file!)")]),e._v(" "),t("li",[e._v("can point to directories")])]),e._v(" "),t("h2",{attrs:{id:"archiving"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archiving"}},[e._v("#")]),e._v(" Archiving")]),e._v(" "),t("p",[t("code",[e._v("tar -cf backup.tar ./some_folder")]),e._v(" - create an archive. The given folder path\nwill be recreated while extracting ("),t("code",[e._v("some_folder")]),e._v(" vs\n"),t("code",[e._v("/home/marcin/some_folder")]),e._v("). "),t("code",[e._v("tar -xf backup.tar")]),e._v(" - extract an archive")]),e._v(" "),t("p",[t("code",[e._v("-v")]),e._v(" parameter will add verbosity. Two "),t("code",[e._v("-v")]),e._v("s will add more vermosity.")]),e._v(" "),t("p",[e._v("We can create incremental backups using "),t("code",[e._v("-g")]),e._v(" and a .snar file.")]),e._v(" "),t("h3",{attrs:{id:"compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),t("p",[t("code",[e._v("gzip archieve.tar")]),e._v(" - compress an existing tar. Tar file will be deleted and\ntar.gz will be created. "),t("code",[e._v("gunzip archieve.tar.gz")]),e._v(" - returns "),t("code",[e._v("archieve.tar")]),e._v(" "),t("code",[e._v("tar -czf backup.tar.gz my_folder")]),e._v(" - creates "),t("code",[e._v("my_folder.tar.gz")]),e._v(". Replace "),t("code",[e._v("c")]),e._v(" with "),t("code",[e._v("x")]),e._v("\nto extract.")]),e._v(" "),t("p",[t("code",[e._v("bzip2 archieve.tar")]),e._v(" - better compression. Produces .bz2 from the source file\n"),t("code",[e._v("bunzip2 archieve.tar.bz2")]),e._v(" - returns "),t("code",[e._v("archieve.tar")]),e._v(" "),t("code",[e._v("tar -cjf backup.tar.bz2 my_folder")]),e._v(" - creates "),t("code",[e._v("my_folder.tar.bz2")]),e._v(". Replace "),t("code",[e._v("c")]),e._v(" with "),t("code",[e._v("x")]),e._v(" to extract.")]),e._v(" "),t("h3",{attrs:{id:"dd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dd"}},[e._v("#")]),e._v(" dd")]),e._v(" "),t("p",[t("code",[e._v("dd -if=/dev/sda1 of=disk.img")]),e._v(" - creates an image of some source directory")]),e._v(" "),t("h2",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),t("p",[e._v("By default each new file has "),t("code",[e._v("666")]),e._v(" permissions (rw-rw-rw-). Each new directory\nhas"),t("code",[e._v("777")]),e._v(". However, this can be changed by "),t("code",[e._v("umask")]),e._v(". On Ubuntu, the "),t("code",[e._v("umask")]),e._v("\ncommand prints "),t("code",[e._v("0002")]),e._v('. It means that WRITE permission is taken out from the\n"others" when creating files. We can set different mask, i.e. '),t("code",[e._v("umask 27")]),e._v(" - the\nnew files will have only rw-r----- permissions. "),t("code",[e._v("umask")]),e._v(" can only decrease\ndefault permissions, it can't add any.")]),e._v(" "),t("p",[e._v("If the user has some permission on a directory, he will also have that\npermission on all the files inside of that directory, even if the files belong\nto somebody else.")]),e._v(" "),t("h3",{attrs:{id:"changing-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-permissions"}},[e._v("#")]),e._v(" Changing permissions")]),e._v(" "),t("p",[t("code",[e._v("chmod +x file1")]),e._v(" - adds execution permission "),t("code",[e._v("chgrp group1 file1")]),e._v(' - group of\n"file1" is set to "group1" '),t("code",[e._v("chown root file2")]),e._v(" - set owner of a file "),t("code",[e._v("chown joe:joe file2")]),e._v(" -set user and group owners of a file")]),e._v(" "),t("p",[t("code",[e._v("cp")]),e._v(" command, by default, sets the owner of the copied file to the user:group\nwho did the copy. This behaviour can be changed with "),t("code",[e._v("-a")]),e._v(" parameters ("),t("code",[e._v("cp -a")]),e._v("\nrequires root priviliges, because we're changing the owner of the file after\ncopying).")]),e._v(" "),t("h2",{attrs:{id:"external-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-storage"}},[e._v("#")]),e._v(" External storage")]),e._v(" "),t("p",[t("code",[e._v("lsblk")]),e._v(" - shows disks and partitions "),t("code",[e._v("sudo fdisk -l")]),e._v(" - shows more details about\nstorage devices")]),e._v(" "),t("p",[t("code",[e._v("sudo mkdir /media/usb")]),e._v(" - creates a directory where we'll mount the storage")]),e._v(" "),t("p",[t("code",[e._v("sudo mount /dev/sda1 /media/usb")]),e._v(" - mounts "),t("code",[e._v("sudo umount /media/usb")]),e._v(" - unmounts")]),e._v(" "),t("h3",{attrs:{id:"sticky-bits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sticky-bits"}},[e._v("#")]),e._v(" Sticky bits")]),e._v(" "),t("p",[e._v("?")]),e._v(" "),t("h2",{attrs:{id:"root-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-access"}},[e._v("#")]),e._v(" Root Access")]),e._v(" "),t("p",[t("code",[e._v("su")]),e._v(' - requires knowledge of root\'s password. By default, switches to root, but\nit could any other user. After running it, the environment variables are not\nreloaded - $USER will be still "marcin", current directory also stays the same\n'),t("code",[e._v("su -")]),e._v(" - like above, but loads root's environment (envs, current directory).\nThis one is recommended.")]),e._v(" "),t("p",[t("code",[e._v("sudo")]),e._v(" - delegated rights to root just once. User uses their own password to\nauthenticate. Authentication stays on for 5 minutes. "),t("code",[e._v("sudo -i")]),e._v(" - opens a new\nbash as a root (a bit like "),t("code",[e._v("su")]),e._v(", but no root password knowledge is required).")]),e._v(" "),t("p",[e._v("Permission available via "),t("code",[e._v("sudo")]),e._v(" can be controlled using "),t("code",[e._v("/etc/sudoers")]),e._v(" file (who\ncan use "),t("code",[e._v("sudo")]),e._v(", as who they can login, what commands they can run). The file can\nbe modified via "),t("code",[e._v("visudo")]),e._v(" program. Also 5-minute period can be modified here.")]),e._v(" "),t("h2",{attrs:{id:"processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#processes"}},[e._v("#")]),e._v(" Processes")]),e._v(" "),t("p",[e._v("Not all processes are attached to TTYs.")]),e._v(" "),t("p",[t("code",[e._v("ps")]),e._v(" - shows processes from current shell (PIDs, attached TTY) "),t("code",[e._v("ps aux")]),e._v(" - show\nall processes of users, also these without TTY attached. "),t("code",[e._v("pstree")]),e._v(" - shows tree\nof processes")]),e._v(" "),t("p",[t("code",[e._v("/proc")]),e._v(" directory containing details of processes (directories inside are PIDs).")]),e._v(" "),t("p",[t("code",[e._v("echo $$")]),e._v(" - PID of the current process")]),e._v(" "),t("h3",{attrs:{id:"signalling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signalling"}},[e._v("#")]),e._v(" Signalling")]),e._v(" "),t("p",[t("code",[e._v("kill -l")]),e._v(" - shows all available signals and their numbers")]),e._v(" "),t("p",[e._v("The process does not have to respond to the signal!")]),e._v(" "),t("p",[t("code",[e._v("kill PID")]),e._v("/"),t("code",[e._v("kill -15 PID")]),e._v("/"),t("code",[e._v("kill -term PID")]),e._v("/"),t("code",[e._v("kill -sigterm PID")]),e._v(" - sends SIGTERM")]),e._v(" "),t("p",[e._v("If process does not respond to SIGTERM (15), we can try with SIGKILL (9): "),t("code",[e._v("kill -kill PID")]),e._v(". It removes process directory from "),t("code",[e._v("/proc/")]),e._v("!")]),e._v(" "),t("h3",{attrs:{id:"bg-and-fg-processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-and-fg-processes"}},[e._v("#")]),e._v(" BG and FG processes")]),e._v(" "),t("p",[t("code",[e._v("sleep 100&")]),e._v(" - "),t("code",[e._v("&")]),e._v(" at the end starts the process in the background (a job)\n"),t("code",[e._v("jobs")]),e._v(" - displays all background jobs "),t("code",[e._v("CTRL + Z")]),e._v(" - sends the SUSPEND to the\nrunning process (a job is sent to the background and is STOPPED) "),t("code",[e._v("bg")]),e._v(" - resumes\nthe job in the background (becomes RUNNING) "),t("code",[e._v("fg")]),e._v(" - brings the background job to\nthe foreground")]),e._v(" "),t("h2",{attrs:{id:"shared-libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-libraries"}},[e._v("#")]),e._v(" Shared Libraries")]),e._v(" "),t("p",[t("code",[e._v("ldd /usr/bin/grep")]),e._v(" - lists the shared libraries used by a given program.")]),e._v(" "),t("p",[t("code",[e._v("/etc/ld.so.conf.d/")]),e._v(" contains config files with paths to shared libraries (i.e.\n"),t("code",[e._v("/lib/")]),e._v("). If we add some paths there, we need to update lirbary cache with\n"),t("code",[e._v("ldconfig")]),e._v(". "),t("code",[e._v("ldconfig -p")]),e._v(" lists the lirbaries in the cache.")]),e._v(" "),t("h2",{attrs:{id:"cron"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[e._v("#")]),e._v(" CRON")]),e._v(" "),t("p",[t("code",[e._v("cron")]),e._v(" - scheduled jobs (every 10 minutes, etc.) "),t("code",[e._v("anacron")]),e._v(" - tun job after\nsystem boot (10 minutes after, etc.) "),t("code",[e._v("at")]),e._v(" - run a jon once at some time")]),e._v(" "),t("h2",{attrs:{id:"selinux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selinux"}},[e._v("#")]),e._v(" SELinux")]),e._v(" "),t("p",[e._v("DAC - users have full control over their stuff. If thye do "),t("code",[e._v("chmod +wrx")]),e._v(" on their\nfiles, everyone can do whatever they want with them MAC - there are some\npolicies that add another layer of control over the system")]),e._v(" "),t("p",[e._v("Booleans - various flags controlling different permissions (i.e. there is a\nboolean that controls if httpd can access home directories ('false' by\ndefault)).")]),e._v(" "),t("h2",{attrs:{id:"services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),t("p",[t("code",[e._v("systemctl status cron.service")]),e._v(" - shows the status "),t("code",[e._v("systemctl cat cron.service")])]),e._v(" "),t("ul",[t("li",[e._v("shows the configuration file of the service")])]),e._v(" "),t("p",[t("code",[e._v("sudo systemctl start docker.service")]),e._v(" - start the service now "),t("code",[e._v("sytemctl enable docker.service")]),e._v(" - enable on next startup "),t("code",[e._v("systemctl enable docker.service --now")])]),e._v(" "),t("ul",[t("li",[e._v("enable on next startup and start now")])]),e._v(" "),t("p",[t("code",[e._v("sudo systemctl stop cron.service")]),e._v(' - stops the service (if it\'s "enabled", it\nwill start on next boot) '),t("code",[e._v("systemctl disable docker.service")]),e._v(" - disable a service\non next startup "),t("code",[e._v("systemctl disable docker.service --now")]),e._v(" - disable a service on\nnext startup and now")]),e._v(" "),t("p",[t("code",[e._v("systemctl restart docker.service")]),e._v(" - restart a service")]),e._v(" "),t("p",[t("code",[e._v("systemctl mask docker.service")]),e._v(" - service cannot be started until it's unmasked\n("),t("code",[e._v("unmask")]),e._v(")")]),e._v(" "),t("p",[e._v("Unit files ("),t("code",[e._v(".service")]),e._v(" suffix) are in:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/usr/lib/systemd/system")]),e._v(" - unit files deposited by packages during their\ninstallation")]),e._v(" "),t("li",[t("code",[e._v("/etc/systemd/system")]),e._v(" - local unit files and customizations can go there")])]),e._v(" "),t("h2",{attrs:{id:"users-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#users-groups"}},[e._v("#")]),e._v(" Users & Groups")]),e._v(" "),t("p",[t("code",[e._v("/etc/passwd")]),e._v(" - contains all users "),t("code",[e._v("/etc/group")]),e._v(" - contains all groups "),t("code",[e._v("useradd bob")]),e._v(" - adds user")]),e._v(" "),t("h2",{attrs:{id:"networking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networking"}},[e._v("#")]),e._v(" Networking")]),e._v(" "),t("p",[t("code",[e._v("dig www.google.pl")]),e._v(" uses DNS to find IP addresses "),t("code",[e._v("dig www.google.com @8.8.8.8")])]),e._v(" "),t("ul",[t("li",[e._v("a way to specify DNS server to be used")])]),e._v(" "),t("p",[t("code",[e._v("ip -4 a")]),e._v(" - shows just IPv4 addresses")]),e._v(" "),t("p",[t("code",[e._v("traceroute google.com")]),e._v("/"),t("code",[e._v("tracepath google.com")]),e._v(' - shows "hops" when going to some\naddress')]),e._v(" "),t("p",[e._v("ConnectionManager ("),t("code",[e._v("nmcli")]),e._v(") allows to manage connections using network\ninterfaces. It allows to stop/start connections ("),t("code",[e._v("down")]),e._v(" and "),t("code",[e._v("up")]),e._v(").")]),e._v(" "),t("h3",{attrs:{id:"iptables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[e._v("#")]),e._v(" iptables")]),e._v(" "),t("p",[e._v("By default, the firewall is set to ACCEPT everything (there are no rules).\nAdditionally, the POLICY of each chain is set  to ACCEPT - if not rule is\nmatched, the traffic will be accepted. The rules are read from top to bottom. As\nsoon as one of them matches, the rest is ignored.")]),e._v(" "),t("p",[t("code",[e._v("iptables -L")]),e._v(' - shows the current config. "FORWARDING" chain is used when the\nmachine acts as a router (by default, it doesn\'t). '),t("code",[e._v("iptables-save > iptables.config")]),e._v(" - saves the current config in the file "),t("code",[e._v("iptables-restore > iptables.conf")]),e._v(" - load config from a file")]),e._v(" "),t("p",[e._v("Examples: "),t("code",[e._v("iptables -A INPUT -i lo -j ACCEPT")]),e._v(" - adds an ACCEPT rule to the INPUT\nchain for all local traffic "),t("code",[e._v("iptables -A INPUT -p tcp --dport 22 -j ACCEPT")]),e._v(" -\nallow SSH into the system")]),e._v(" "),t("h3",{attrs:{id:"tcp-tunelling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-tunelling"}},[e._v("#")]),e._v(" TCP Tunelling")]),e._v(" "),t("p",[e._v('Tunneling allows to use some protocol (i.e., SSH) to "hide" some other protocol\n(i.e. HTTP).')]),e._v(" "),t("p",[t("code",[e._v("ssh -f - L 8080:localhost:80 root@server2 -N")]),e._v(" - SSH will listen in the\nbackground on the client for requests to port 8080. It will then send this\ntraffic to server2, where the traffic will be directed to localhost:80\n(webserver running on the server2).")]),e._v(" "),t("h2",{attrs:{id:"packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packages"}},[e._v("#")]),e._v(" Packages")]),e._v(" "),t("p",[e._v("Debian packaging format:")]),e._v(" "),t("h3",{attrs:{id:"dpkg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dpkg"}},[e._v("#")]),e._v(" DPKG")]),e._v(" "),t("p",[t("code",[e._v("dpkg")]),e._v(" - manages DEB packages. "),t("code",[e._v("dpkg --get-selections")]),e._v("/"),t("code",[e._v("dpkg -l")]),e._v(' - lists\ninstalled packages. Packages marked as "dinstall" are no longer needed and can\nbe deinstalled (shown with '),t("code",[e._v("--get-selections")]),e._v("). "),t("code",[e._v("dpkg -i package.deb")]),e._v(" - install\na package "),t("code",[e._v("dpkg --purge some-package")]),e._v(" - removes package and its configuration\n"),t("code",[e._v("dpkg -l some-package")]),e._v(" - shows information about a package "),t("code",[e._v("dpkg -L some-package")]),e._v(" - shows files that the package consists of "),t("code",[e._v("dpkg -S /some/file")]),e._v(" -\nshows the package that the file is associated with "),t("code",[e._v("dpkg-reconfigure package-name")]),e._v(" - reruns the configuration scripts that normally are used when the\npackage in installed (i.e., we can set tzdata time-zone).")]),e._v(" "),t("h3",{attrs:{id:"apt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt"}},[e._v("#")]),e._v(" APT")]),e._v(" "),t("p",[t("code",[e._v("/var/cache/apt/archives/")]),e._v(" - directory containing all debs installed by APT "),t("code",[e._v("apt clean")]),e._v(" - removes APT cache. Good for Docker images.")]),e._v(" "),t("p",[t("code",[e._v("apt remove package")]),e._v(" - removes a packages, but leaves the configuration "),t("code",[e._v("apt purge package")]),e._v(" - removes a package and its configuration")]),e._v(" "),t("p",[t("code",[e._v("apt show package")]),e._v(" - shows information about a package (it can be installed or\nnot) "),t("code",[e._v("apt search package")]),e._v(" - looks for matching packages in the repo (useful when\nwe don't know the name of the package since it looks in descriptions, names,\netc.)")]),e._v(" "),t("p",[t("code",[e._v("/etc/apt/sources.list")]),e._v(" and "),t("code",[e._v("/etc/apt/sources/list.d")]),e._v(" directory contain all\nrepositories that APT uses. "),t("code",[e._v("apt edit-sources")]),e._v(" - modifies sources file with\nchecking when saving")]),e._v(" "),t("h4",{attrs:{id:"environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment Variables")]),e._v(" "),t("p",[e._v("APT uses various environment variables for its operations.")]),e._v(" "),t("p",[t("code",[e._v("DEBIAN_PRIORITY")]),e._v(" - depending on this value, programs may ask a different set of\nconfiguration questions during the installation. We can set it to ignore less\nimportant config, or set it in a way that we will be setting everything during\nthe installtion.")]),e._v(" "),t("p",[t("code",[e._v("DEBIAN_FRONTEND")]),e._v(" - controls interaction during packages installation. Options:\nnoninteractive (no questions will be asked), dialog, readline, editor.")]),e._v(" "),t("h2",{attrs:{id:"systemd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemd"}},[e._v("#")]),e._v(" systemd")]),e._v(" "),t("p",[e._v('systemd manages various entities, known as "units". These can be: services,\nsockets, devices, ... Each unit is configured with a unit file. Depending on a\nunit type, a proper suffix is applied.')]),e._v(" "),t("h2",{attrs:{id:"interesting-facts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interesting-facts"}},[e._v("#")]),e._v(" Interesting Facts")]),e._v(" "),t("p",[e._v("In every directory there are 2 files: "),t("code",[e._v(".")]),e._v(", "),t("code",[e._v("..")]),e._v(". These are links to current and\nparent directories!")]),e._v(" "),t("p",[e._v("If we don't want to see erors from some command, we can redirect them to\n"),t("code",[e._v("/dev/null")]),e._v(": "),t("code",[e._v("some-command 2> /dev/null")]),e._v(".")]),e._v(" "),t("p",[e._v('The "recovery mode" is just a single-user.target (runlevel "1").')])])}),[],!1,null,null,null);s.default=a.exports}}]);