import { image4, image5, image6 } from "shared/assets/images/banners"

interface bannersRowListType {
    id: string
    title: string
    desc?: string
    link: string
    isMain?: boolean
    img: string
}

export const bannersRowList: bannersRowListType[] = [
    {
        id: "1",
        title: "Компьютерная периферия и аксессуары",
        desc: `предлагаем широкий ассортимент чехлов и прочих защитных аксессуаров для
    мобильных телефонов, смартфонов, планшетов и т. д. Надежная защита Вашего
    устройства`,
        img: image4,
        link: "/",
        isMain: true,
    },
    {
        id: "2",
        title: "Мужчинам",
        img: image5,
        link: "/",
        isMain: false,
    },
    {
        id: "3",
        title: "Женщинам",
        img: image6,
        link: "/",
        isMain: false,
    },
]
