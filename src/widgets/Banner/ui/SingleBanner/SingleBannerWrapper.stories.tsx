import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SingleBanner } from "./SingleBanner"

const SingleBannerWrapper = (props: any) => <SingleBanner {...props} />

export default {
    title: "Widgets/SingleBanner",
    component: SingleBannerWrapper,
} as ComponentMeta<typeof SingleBannerWrapper>

const Template: ComponentStory<typeof SingleBannerWrapper> = args => (
    <SingleBannerWrapper {...args} />
)

export const Default = Template.bind({})
Default.args = {
    imgIndex: 0,
    className: "",
}
