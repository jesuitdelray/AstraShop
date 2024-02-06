import { Story, Meta } from "@storybook/react"
import { EmptyBasket, EmptyBasketProps } from "./EmptyBasket"

const withI18next = (Story: any) => <Story />

export default {
    title: "Widgets/EmptyBasket",
    component: EmptyBasket,
    decorators: [withI18next],
} as Meta

const Template: Story<EmptyBasketProps> = args => <EmptyBasket {...args} />

export const Default = Template.bind({})
Default.args = {
    onClose: () => console.log("Close button clicked"),
}
