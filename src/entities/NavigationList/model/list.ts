import { RoutePath } from "shared/config/routeConfig/const"

export interface headerItemsType {
    path: string
    text: string
    id: string
}

export const desktopItemsList: headerItemsType[] = [
    { text: "navBar1", path: RoutePath.catalog, id: "1" },
    { text: "navBar2", path: RoutePath.delivery, id: "2" },
    { text: "navBar3", path: RoutePath.about, id: "3" },
    { text: "navBar4", path: RoutePath.contacts, id: "4" },
]

export const mobileItemsList: headerItemsType[] = [
    { text: "navBar0", path: RoutePath.main, id: "0" },
    { text: "navBar1", path: RoutePath.catalog, id: "1" },
    { text: "navBar2", path: RoutePath.delivery, id: "2" },
    { text: "navBar3", path: RoutePath.about, id: "3" },
    { text: "navBar4", path: RoutePath.contacts, id: "4" },
]
