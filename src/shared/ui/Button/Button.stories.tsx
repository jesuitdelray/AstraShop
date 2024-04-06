import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DarkBgDecorator } from "shared/config/storybook/DarkBgDecorator/DarkBgDecorator"
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

export const OutlineButton = Template.bind({})
OutlineButton.args = {
    children: buttonText,
}

export const OutlineButtonDisabled = Template.bind({})
OutlineButtonDisabled.args = {
    children: buttonText,
    disabled: true,
}

export const FilledRedButton = Template.bind({})
FilledRedButton.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED,
}

export const FilledRedButtonDisabled = Template.bind({})
FilledRedButtonDisabled.args = {
    children: buttonText,
    variant: ButtonVariant.CLEAR,
    disabled: true,
}

export const FilledGreyButton = Template.bind({})
FilledGreyButton.args = {
    children: buttonText,
    variant: ButtonVariant.OUTLINED,
}

FilledRedButtonDisabled.decorators = [DarkBgDecorator()]
