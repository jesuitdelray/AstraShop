import { LinksListItem } from "entities/LinksList"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export const footerLinksData: LinksListItem = {
    title: "Информация",
    list: [
        { id: "1", text: "Доставка и оплата", path: RoutePath.delivery },
        { id: "2", text: "О нас", path: RoutePath.about },
        { id: "3", text: "Контакты", path: RoutePath.contacts },
    ],
}
