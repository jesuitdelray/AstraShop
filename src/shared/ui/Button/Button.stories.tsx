import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button, ButtonVariant } from "./Button"

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
