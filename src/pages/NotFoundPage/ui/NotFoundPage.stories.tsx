import { Story, Meta } from "@storybook/react"
import { NotFoundPage } from "./NotFoundPage"

export default {
    title: "Pages/NotFoundPage",
    component: NotFoundPage,
    decorators: [Story => <Story />],
} as Meta

const Template: Story = () => <NotFoundPage />

export const Default = Template.bind({})
