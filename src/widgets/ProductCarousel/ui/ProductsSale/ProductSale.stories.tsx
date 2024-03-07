import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { ProductsSale } from "./ProductsSale"

const mockTopProducts = [
    {
        id: 1,
        name: "Mock Product 1",
        price: 100,
        images: ["https://example.com/image1.jpg"],
        is_new: true,
    },
    {
        id: 2,
        name: "Mock Product 2",
        price: 200,
        images: ["https://example.com/image2.jpg"],
        is_new: false,
    },
]

const store = configureStore({
    reducer: {
        productCarousel: () => ({
            topProducts: mockTopProducts,
            isLoading: false,
            error: null,
        }),
    },
})

export default {
    title: "Widgets/ProductsSale",
    component: ProductsSale,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <ProductsSale />

export const Default = Template.bind({})
