import { Story, Meta } from "@storybook/react"
import { Footer } from "./Footer"

export default {
    title: "Widgets/Footer",
    component: Footer,
    decorators: [Story => <Story />],
} as Meta

const Template: Story = () => <Footer />

export const Default = Template.bind({})
