export interface SideBarData {
    [key: string]: any
}

export interface SideBarItem {
    name: string,
    link: string,
    icon: string,
    active?: boolean,
    children?: SideBarItem[],
    attributes?: any
}

export interface SideBarGroup {
    name: string,
    icon: string,
    active?: boolean,
    children?: SideBarItem[],
    link?: string,
    attributes?: any,
    expan?: boolean
}

export const SideBarGroupDatas: SideBarGroup[] = [
    {
       name: "Dashboar",
       icon: "bi bi-house",
       link: "admin/dashboar",
    },
    {
        name: 'Movie management',
        icon: "bi bi-house",
        expan: false,
        children: [
            {
                name: "List",
                icon: "bi bi-house",
                link: "/admin1",
                active: false,
            },
            {
                name: "List1",
                icon: "bi bi-house",
                link: "/admin1",
                active: true,
            }
        ]
    },
    {
        name: 'Classify',
        link: "/admin1",
        icon: "bi bi-house",
    },
    {
        name: 'Movie error',
        link: "/admin1",
        icon: "bi bi-house",
    },
    {
        name: 'Display',
        link: "/admin1",
        icon: "bi bi-house",
    },
    {
        name: 'Settting',
        link: "/admin/setting",
        icon: "bi bi-house",
    },
    {
        name: 'Sitemap',
        link: "/admin1",
        icon: "bi bi-house",
    },
    {
        name: 'Crawler',
        link: "/admin1",
        icon: "bi bi-house",
    }
]