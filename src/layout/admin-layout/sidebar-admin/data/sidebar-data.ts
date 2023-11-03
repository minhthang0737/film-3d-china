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
    children?: SideBarItem[]
    attributes?: any
}

export const SideBarGroupDatas: SideBarGroup[] = [
    {
       name: "Dashboar",
       icon: "cil-speedometer",
       active: true
    },
    {
        name: 'Colors',
        icon: 'cil-drop'
    }
]