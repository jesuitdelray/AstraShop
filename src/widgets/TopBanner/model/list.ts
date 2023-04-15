import { image2, image10, image11 } from "shared/assets/images/banners"

export interface topBannerSlidesType {
    id: string
    title: string
    desc: string
    img: string
}

export const topBannerSlides: topBannerSlidesType[] = [
    {
        id: "1",
        title: "topBannerTitle1",
        desc: "topBannerDesc1",
        img: image2,
    },
    {
        id: "2",
        title: "topBannerTitle2",
        desc: "topBannerDesc2",
        img: image10,
    },
    {
        id: "3",
        title: "topBannerTitle3",
        desc: "topBannerDesc3",
        img: image11,
    },
]
