import { Meta, Story } from "@storybook/react"
import { Portal } from "./Portal"

export default {
    title: "Components/Portal",
    component: Portal,
    argTypes: {
        children: { control: "text" },
    },
} as Meta

const Template: Story<any> = args => (
    <Portal {...args}>
        <div>Test Portal Content</div>
    </Portal>
)

export const Default = Template.bind({})
Default.args = {}

export const CustomElement = Template.bind({})
CustomElement.args = {
    element: document.getElementById("portal-root"),
}
