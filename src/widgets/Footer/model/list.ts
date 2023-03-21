import { RoutePath } from "shared/config/routeConfig/routeConfig"

export const information = [
    { text: "Информация" },
    { text: "Доставка и оплата", path: RoutePath.delivery },
    { text: "О нас", path: RoutePath.about },
    { text: "Контакты", path: RoutePath.contacts },
]

export const schedule = [
    {
        title: "График работы",
        text: "Пн-Пт: 8.00 - 20.00 \n Сб: 8.00 - 16.00 \n Вс: Выходной",
    },
]

export const contacts = [
    {
        title: "Контакты",
        text: "(093) 892-22-26 \n (096) 997-50-58 \n tovar-7km.office@gmail.com",
    },
]
