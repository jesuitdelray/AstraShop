import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { Products, ProductsProps } from "./Products"

const mockProducts = [
    {
        id: 1,
        is_new: true,
        name: "Product 1",
        price: 100,
        images: ["https://placehold.co/300x300"],
    },
    {
        id: 2,
        is_new: false,
        name: "Product 2",
        price: 200,
        images: ["https://placehold.co/300x300"],
    },
]

export default {
    title: "Pages/SubCategoryPage/Products",
    component: Products,
} as Meta

const Template: Story<ProductsProps> = args => (
    <StoreProvider>
        <Products {...args} />
    </StoreProvider>
)

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
    products: [],
} as ProductsProps

export const Default = Template.bind({})
Default.args = {
    isLoading: false,
    products: mockProducts,
}
