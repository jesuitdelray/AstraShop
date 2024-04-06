import React from "react"
import { Story, Meta } from "@storybook/react"
import { Sidebar } from "./Sidebar"

export default {
    title: "Components/Sidebar",
    component: Sidebar,
    argTypes: {
        className: { control: "text" },
    },
} as Meta

const Template: Story<any> = args => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <div>This is a sidebar content</div>,
}

export const WithCustomClass = Template.bind({})
WithCustomClass.args = {
    children: <div>This is a sidebar content</div>,
    className: "customClass",
}
