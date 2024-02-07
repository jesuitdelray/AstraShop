import { Story, Meta } from "@storybook/react"
import { ErrorPage } from "./ErrorPage"

export default {
    title: "Pages/ErrorPage",
    component: ErrorPage,
    decorators: [(Story: Story) => <Story />],
} as Meta

const Template: Story = args => <ErrorPage {...args} />

export const Default = Template.bind({})
Default.args = {}
