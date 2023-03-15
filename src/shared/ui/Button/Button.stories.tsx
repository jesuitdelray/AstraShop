import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {Button, ButtonSize, ButtonTheme} from "./Button"

const buttonText = "Submit";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const OutlineLarge = Template.bind({})
OutlineLarge.args = {
    children: buttonText,
}

export const FullfilledRedLarge = Template.bind({})
FullfilledRedLarge.args = {
    children: buttonText,
    theme: ButtonTheme.FULLFILLED_RED,
}

export const FullfilledGreyLarge = Template.bind({})
FullfilledGreyLarge.args = {
    children: buttonText,
    theme: ButtonTheme.FULLFILLED_GREY,
}

export const OutlineSmall = Template.bind({})
OutlineSmall.args = {
    children: buttonText,
    size: ButtonSize.SMALL
}

export const FullfilledRedSmall = Template.bind({})
FullfilledRedSmall.args = {
    children: buttonText,
    theme: ButtonTheme.FULLFILLED_RED,
    size: ButtonSize.SMALL
}

export const FullfilledGreySmall = Template.bind({})
FullfilledGreySmall.args = {
    children: buttonText,
    theme: ButtonTheme.FULLFILLED_GREY,
    size: ButtonSize.SMALL
}
