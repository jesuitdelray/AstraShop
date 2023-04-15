import { RoutePath } from "shared/config/routeConfig/const"

interface footerlinksItem {
    id: string
    text: string
    path: string
}

interface footerLinksType {
    title: string
    list: footerlinksItem[]
}

export const footerLinksData: footerLinksType = {
    title: "footerTitleInformation",
    list: [
        { id: "1", text: "footerLinks1", path: RoutePath.delivery },
        { id: "2", text: "footerLinks2", path: RoutePath.about },
        { id: "3", text: "footerLinks3", path: RoutePath.contacts },
    ],
}
