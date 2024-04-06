import { Story, Meta } from "@storybook/react"
import { ToggleBasketIcon } from "./ToggleBasketIcon"

export default {
    title: "Components/ToggleBasketIcon",
    component: ToggleBasketIcon,
    argTypes: {
        onClick: { action: "clicked" },
        isFilled: { control: "boolean" },
        className: { control: "text" },
    },
} as Meta

const Template: Story<any> = args => <ToggleBasketIcon {...args} />

export const Default = Template.bind({})
Default.args = {
    onClick: () => alert("Icon clicked"),
    isFilled: false,
}

export const FilledIcon = Template.bind({})
FilledIcon.args = {
    onClick: () => alert("Icon clicked"),
    isFilled: true,
}

export const WithCustomClass = Template.bind({})
WithCustomClass.args = {
    onClick: () => alert("Icon clicked"),
    isFilled: false,
    className: "customClass",
}
