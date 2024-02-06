import { Story, Meta } from "@storybook/react"
import { BannerSkeleton } from "./BannerSkeleton"

export default {
    title: "Widgets/BannerSkeleton",
    component: BannerSkeleton,
} as Meta

const Template: Story = args => <BannerSkeleton {...args} />

export const Default = Template.bind({})
