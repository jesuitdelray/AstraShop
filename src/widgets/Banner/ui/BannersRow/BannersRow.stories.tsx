import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BannersRow } from "./BannersRow"

const bannersMockData = [
    {
        id: "1",
        title: "banner.title1",
        desc: "banner.desc1",
        img: "path/to/image1.png",
        link: "#",
    },
    {
        id: "2",
        title: "banner.title2",
        desc: "banner.desc2",
        img: "path/to/image2.png",
        link: "#",
    },
    {
        id: "3",
        title: "banner.title3",
        desc: "banner.desc3",
        img: "path/to/image3.png",
        link: "#",
    },
]

export default {
    title: "Widgets/BannersRow",
    component: BannersRow,
} as ComponentMeta<typeof BannersRow>

const Template: ComponentStory<any> = args => <BannersRow {...args} />

export const Default = Template.bind({})
Default.args = {
    banners: bannersMockData,
}
