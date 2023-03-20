import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button, ButtonSize, ButtonVariant } from "./Button"

const buttonText = "Submit"

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

export const FilledRedLarge = Template.bind({})
FilledRedLarge.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED_RED,
}

export const FilledGreyLarge = Template.bind({})
FilledGreyLarge.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED_GREY,
}

export const OutlineSmall = Template.bind({})
OutlineSmall.args = {
    children: buttonText,
    size: ButtonSize.SMALL,
}

export const FilledRedSmall = Template.bind({})
FilledRedSmall.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED_RED,
    size: ButtonSize.SMALL,
}

export const FilledGreySmall = Template.bind({})
FilledGreySmall.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED_GREY,
    size: ButtonSize.SMALL,
}
