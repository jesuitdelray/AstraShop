import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BannersRow } from "./BannersRow"

const bannersMockData = [
    {
        id: "1",
        title: "banner.title1",
        desc: "banner.desc1",
        img: "https://placehold.co/300x300",
        link: "#",
    },
    {
        id: "2",
        title: "banner.title2",
        desc: "banner.desc2",
        img: "https://placehold.co/300x300",
        link: "#",
    },
    {
        id: "3",
        title: "banner.title3",
        desc: "banner.desc3",
        img: "https://placehold.co/300x300",
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
