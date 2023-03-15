import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Typography, TypographyVariant } from "./Typography"

export default {
    title: "shared/Typography",
    component: Typography,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => (
    <Typography {...args} />
)

export const H1 = Template.bind({})
H1.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H1,
}

export const H2 = Template.bind({})
H2.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H2,
}

export const H3 = Template.bind({})
H3.args = {
    children: "Title lorem ipsun",
    variant: TypographyVariant.H3,
}

export const P = Template.bind({})
P.args = {
    children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    variant: TypographyVariant.P,
}
