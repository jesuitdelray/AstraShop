import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Story, Meta } from "@storybook/react/types-6-0"
import thunkMiddleware from "redux-thunk"

import { SubmitOrder } from "./SubmitOrder"

const submitOrderReducer = () => ({
    isLoading: false,
    error: null,
    order: null,
})

const basketReducer = () => ({
    products: [
        { id: 1, name: "Product 1", price: 100, quantity: 2 },
        { id: 2, name: "Product 2", price: 200, quantity: 1 },
    ],
    totalQuantity: 3,
    totalPrice: 400,
})

const rootReducer = combineReducers({
    submitOrder: submitOrderReducer,
    basket: basketReducer,
})

const mockStore = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default {
    title: "Features/SubmitOrder",
    component: SubmitOrder,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <SubmitOrder />

export const Default = Template.bind({})
