import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { OrderPage } from "./OrderPage"

const mockReducer = (state = {}) => state

const store = configureStore({
    reducer: {
        modal: mockReducer,
        basket: mockReducer,
    },
})

export default {
    title: "Pages/OrderPage",
    component: OrderPage,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <OrderPage />

export const Default = Template.bind({})
