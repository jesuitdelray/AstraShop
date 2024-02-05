import { Story, Meta } from "@storybook/react"
import { ProductCard, ProductCardProps } from "./ProductCard"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"

export default {
    title: "Entities/ProductCard",
    component: ProductCard,
    decorators: [
        Story => (
            <div style={{ padding: "3rem" }}>
                <Story />
            </div>
        ),
    ],
} as Meta

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />

export const Default = Template.bind({})
Default.args = {
    id: 1,
    name: "Product Name",
    price: 100,
    currency: "$",
    images: [productPlaceholder],
    is_new: false,
    isTop: false,
    rating: 4,
}

export const WithDiscount = Template.bind({})
WithDiscount.args = {
    ...Default.args,
    oldPrice: 150,
}

export const IsNewProduct = Template.bind({})
IsNewProduct.args = {
    ...Default.args,
    is_new: true,
}

export const IsTopProduct = Template.bind({})
IsTopProduct.args = {
    ...Default.args,
    isTop: true,
}

export const WithCustomElements = Template.bind({})
WithCustomElements.args = {
    ...Default.args,
    Basket: <div style={{ background: "green", padding: "10px", color: "white" }}>Basket</div>,
    AddProductToFavorite: (
        <div style={{ background: "blue", padding: "10px", color: "white" }}>Add to Favorite</div>
    ),
    CompareProducts: (
        <div style={{ background: "red", padding: "10px", color: "white" }}>Compare</div>
    ),
}
