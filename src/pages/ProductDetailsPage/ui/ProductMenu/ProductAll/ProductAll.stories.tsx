import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { ProductAll } from "./ProductAll"

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: {
        name: "Sample Product",
        price: 100,
    },
    reducers: {},
})

const basketSlice = createSlice({
    name: "basket",
    initialState: [{ id: 1, name: "Sample Product", price: 100 }],
    reducers: {
        addToBasket: (state, action) => {
            state.push(action.payload)
        },
    },
})

const store = configureStore({
    reducer: {
        productDetails: productDetailsSlice.reducer,
        basket: basketSlice.reducer,
    },
})

export default {
    title: "Pages/ProductAll",
    component: ProductAll,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <ProductAll />

export const Default = Template.bind({})
