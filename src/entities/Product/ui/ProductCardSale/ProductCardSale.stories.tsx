import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { Story, Meta } from "@storybook/react"
import { ProductCardSale, ProductCardProps } from "./ProductCardSale"

export default {
    title: "Entities/ProductCardSale",
    component: ProductCardSale,
} as Meta

const Template: Story<ProductCardProps> = args => <ProductCardSale {...args} />

export const Default = Template.bind({})
Default.args = {
    id: 1,
    name: "Sample Product",
    price: 99.99,
    currency: "$",
    images: [productPlaceholder],
    Basket: <button style={{ padding: "10px", marginTop: "10px" }}>Add to Basket</button>,
}
