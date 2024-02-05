import { Story, Meta } from "@storybook/react"
import { Contacts } from "./Contacts"

export default {
    title: "Entities/Contacts",
    component: Contacts,
} as Meta

const Template: Story<{ className?: string }> = args => <Contacts {...args} />

export const Default = Template.bind({})
Default.args = {
    className: "",
}
