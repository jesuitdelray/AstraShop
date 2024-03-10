import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { BannerWithProductsRow } from "./BannerWithProductsRow"

const mockState = {
    productCarousel: {
        topProducts: [
            {
                id: 1,
                name: "Product 1",
                is_new: true,
                images: ["https://placehold.co/300x300"],
                price: 100,
                description: "This is a mock description for Product 1",
                attributes: [],
                parent_category_id: 1,
                parentCategories: [],
                quantity: 10,
            },
            {
                id: 2,
                name: "Product 2",
                is_new: false,
                images: ["https://placehold.co/300x300"],
                price: 150,
                description: "This is a mock description for Product 2",
                attributes: [],
                parent_category_id: 2,
                parentCategories: [],
                quantity: 5,
            },
        ],
        newProducts: [],
        isLoadingTop: false,
        isLoadingNew: false,
        errorTop: "",
        errorNew: "",
    },
}

const store = configureStore({
    reducer: () => mockState,
})

export default {
    title: "Widgets/BannerWithProductsRow",
    component: BannerWithProductsRow,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = args => <BannerWithProductsRow {...args} id={1} />

export const Default = Template.bind({})
Default.args = {}
