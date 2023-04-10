export const siteTitle = "Marcin Jahn | Dev Notebook";

export interface NavigationItem {
    name: string;
    path: string;
    rootPath?: string;
}

export const mainNavigation: NavigationItem[] = [
    { name: "Home", path: "/" },
    {
        name: "Programming",
        path: "/programming/dotnet/http-client",
        rootPath: "/programming",
    },
    {
        name: "Technologies",
        path: "/technologies/networking/http",
        rootPath: "/technologies",
    },
    {
        name: "Projects",
        path: "/projects/open-multiple-links-browser-extension",
        rootPath: "/projects",
    },
    { name: "About", path: "/about/who-am-i", rootPath: "/about" },
];