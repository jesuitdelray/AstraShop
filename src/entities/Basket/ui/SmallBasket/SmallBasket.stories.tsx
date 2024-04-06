import { Story, Meta } from "@storybook/react"
import { SmallBasket, SmallBasketProps, SmallBasketColor } from "./SmallBasket"

export default {
    title: "Entities/SmallBasket",
    component: SmallBasket,
    argTypes: {
        color: {
            control: "select",
            options: [SmallBasketColor.NORMAL, SmallBasketColor.INVERTED],
        },
        onClick: { action: "clicked" },
    },
} as Meta<typeof SmallBasket>

const Template: Story<SmallBasketProps> = args => <SmallBasket {...args} />

export const Default = Template.bind({})
Default.args = {
    basketCount: 1,
    onClick: () => alert("Clicked!"),
}

export const Inverted = Template.bind({})
Inverted.args = {
    basketCount: 5,
    color: SmallBasketColor.INVERTED,
    onClick: () => alert("Clicked!"),
}
