import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { Story, Meta } from "@storybook/react"
import { submitOrderReducer } from "features/SubmitOrder/model/slice/submitOrderSlice"
import { OrderForm } from "./OrderForm"

const basketReducer = () => ({
    products: [
        { id: 1, name: "Product 1", price: 100, quantity: 2 },
        { id: 2, name: "Product 2", price: 150, quantity: 1 },
    ],
})

const rootReducer = combineReducers({
    submitOrder: submitOrderReducer,
    basket: basketReducer,
})

const mockStore = createStore(rootReducer)

export default {
    title: "Features/OrderForm",
    component: OrderForm,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <OrderForm />

export const Default = Template.bind({})
