import React from "react"
import { Story, Meta } from "@storybook/react"
import { ProductCardBasket, ProductCardBasketProps } from "./ProductCardBasket"

export default {
    title: "Entities/ProductCardBasket",
    component: ProductCardBasket,
    argTypes: {
        quantity: { control: "number" },
    },
} as Meta

const Template: Story<ProductCardBasketProps> = args => (
    <ProductCardBasket {...args} Counter={<span>{args.quantity}</span>} />
)

export const Default = Template.bind({})
Default.args = {
    id: 1,
    name: "Sample Product",
    quantity: 10,
    price: 5,
    currency: "$",
    Delete: <button style={{ background: "red", color: "white" }}>Delete</button>,
}
