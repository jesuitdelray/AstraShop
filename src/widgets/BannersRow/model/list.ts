import { image4, image5, image6 } from "shared/assets/images/banners"

interface bannersRowListType {
    id: string
    title: string
    desc?: string
    link: string
    img: string
}

export const bannersRowList: bannersRowListType[] = [
    {
        id: "1",
        title: "banner1",
        desc: "bannerDesc",
        img: image4,
        link: "/86",
    },
    {
        id: "2",
        title: "banner2",
        img: image5,
        link: "/95",
    },
    {
        id: "3",
        title: "banner3",
        img: image6,
        link: "/94",
    },
]
