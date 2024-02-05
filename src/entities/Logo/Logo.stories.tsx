import { Story, Meta } from "@storybook/react"
import { Logo, LogoProps, LogoVariant } from "./Logo"

export default {
    title: "Entities/Logo",
    component: Logo,
    argTypes: {
        variant: {
            control: "radio",
            options: [LogoVariant.NORMAL, LogoVariant.INVERTED],
        },
    },
} as Meta

const Template: Story<LogoProps> = args => <Logo {...args} />

export const Normal = Template.bind({})
Normal.args = {
    variant: LogoVariant.NORMAL,
}

export const Inverted = Template.bind({})
Inverted.args = {
    variant: LogoVariant.INVERTED,
}
