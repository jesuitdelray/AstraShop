import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { Story, Meta } from "@storybook/react/types-6-0"
import { IProductsRowProps, ProducstRowVariant, ProductsRow } from "./ProductsRow"

export default {
    title: "Widgets/ProductsRow",
    component: ProductsRow,
} as Meta

const mockState = {
    productCarousel: {
        topProducts: [
            {
                id: 1,
                name: "Mock Product 1",
                is_new: true,
                images: ["https://example.com/image1.jpg"],
                price: 100,
                description: "This is a mock description for Product 1",
                attributes: [],
                parent_category_id: 1,
                parentCategories: [],
                quantity: 10,
            },
            {
                id: 2,
                name: "Mock Product 2",
                is_new: false,
                images: ["https://example.com/image2.jpg"],
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

const Template: Story<IProductsRowProps> = args => (
    <Provider store={store}>
        <ProductsRow {...args} />
    </Provider>
)

export const TopProductsRow = Template.bind({})
TopProductsRow.args = {
    variant: ProducstRowVariant.TOP_PRODUCTS,
}
