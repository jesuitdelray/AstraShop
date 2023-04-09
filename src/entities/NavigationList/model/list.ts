import { RoutePath } from "shared/config/routeConfig/const"
import { MenuIcon } from "shared/assets/icons/others"

export interface headerItemsType {
    path: string
    text: string
    id: string
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const desktopItemsList: headerItemsType[] = [
    { text: "Каталог товаров", path: RoutePath.catalog, Icon: MenuIcon, id: "1" },
    { text: "Доставка и оплата", path: RoutePath.delivery, id: "2" },
    { text: "О нас", path: RoutePath.about, id: "3" },
    { text: "Контакты", path: RoutePath.contacts, id: "4" },
]

export const mobileItemsList: headerItemsType[] = [
    { text: "Главная", path: RoutePath.main, id: "0" },
    { text: "Каталог товаров", path: RoutePath.catalog, id: "1" },
    { text: "Доставка и оплата", path: RoutePath.delivery, id: "2" },
    { text: "О нас", path: RoutePath.about, id: "3" },
    { text: "Контакты", path: RoutePath.contacts, id: "4" },
]
