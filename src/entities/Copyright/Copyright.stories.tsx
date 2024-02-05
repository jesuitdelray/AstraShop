import { Story, Meta } from "@storybook/react"
import { Copyright } from "./Copyright"

export default {
    title: "Entities/Copyright",
    component: Copyright,
} as Meta

const Template: Story<{ className: string }> = args => <Copyright {...args} />

export const Default = Template.bind({})
Default.args = {
    className: "",
}
