import { Story, Meta } from "@storybook/react"
import { BannerSlider } from "./BannerSlider"

const mockSlides = [
    {
        id: "slide1",
        link: "/#slide1",
        images: {
            desktop: "https://via.placeholder.com/800x400?text=Slide+1",
            tablet: "https://via.placeholder.com/600x300?text=Slide+1",
            mobile: "https://via.placeholder.com/400x200?text=Slide+1",
        },
    },
    {
        id: "slide2",
        link: "/#slide2",
        images: {
            desktop: "https://via.placeholder.com/800x400?text=Slide+2",
            tablet: "https://via.placeholder.com/600x300?text=Slide+2",
            mobile: "https://via.placeholder.com/400x200?text=Slide+2",
        },
    },
]

export default {
    title: "Widgets/BannerSlider",
    component: BannerSlider,
    parameters: {},
} as Meta

const Template: Story = args => <BannerSlider {...args} />

export const Default = Template.bind({})
Default.args = {
    slides: mockSlides,
}
