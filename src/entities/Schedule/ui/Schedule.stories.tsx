import { Story, Meta } from "@storybook/react"
import { Schedule } from "./Schedule"

export default {
    title: "Entities/Schedule",
    component: Schedule,
} as Meta

const Template: Story<{ className: string }> = args => <Schedule {...args} />

export const Default = Template.bind({})
Default.args = {}
