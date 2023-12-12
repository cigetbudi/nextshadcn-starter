import { Icon } from "@iconify/react/dist/iconify.js";


export type SidenavItem  = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SidenavItem[];
}

export type MenuItemWIthSubMenuProps = {
    item : SidenavItem;
    toggleOpen: () => void;
}

export const SIDENAV_ITEMS: SidenavItem[] = [
    { 
        title: "Dashboard",
        path: "/",
        icon: <Icon icon="tabler:align-box-bottom-center" width="24" height="24" />,
    },
    {
        title: "Project",
        path : "/projects",
        icon: <Icon icon="tabler:briefcase" width={24} height={24} />,
        submenu: true,
        subMenuItems : [
            {title: "All", path:"/projects"},
            {title: "Web Desain", path:"/projects/web-design"},
            {title: "Portofolio", path:"/projects/portofolio"},
        ],

    },
    { 
        title: "Messages",
        path: "/messages",
        icon: <Icon icon="tabler:mail" width="24" height="24" />,
    },
    {
        title: "Settings",
        path : "/settings",
        icon: <Icon icon="tabler:settings" width={24} height={24} />,
        submenu: true,
        subMenuItems : [
            {title: "All", path:"/settings"},
            {title: "Tai", path:"/settings/account"},
            {title: "Telek", path:"/settings/privacy"},
        ],

    },

]

