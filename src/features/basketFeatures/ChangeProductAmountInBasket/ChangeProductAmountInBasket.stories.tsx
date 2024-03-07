import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { basketReducer } from "entities/Basket"
import { ChangeProductAmountInBasket } from "./ChangeProductAmountInBasket"

export default {
    title: "Features/ChangeProductAmountInBasket",
    component: ChangeProductAmountInBasket,
} as Meta

const Template: Story<{ id: number }> = args => {
    const { id } = args
    const store = configureStore({
        reducer: {
            basket: basketReducer,
        },
        preloadedState: {
            basket: {
                products: [{ id, quantity: 1, name: "123", images: [], price: 1 }],
            },
        },
    })

    return (
        <Provider store={store}>
            <ChangeProductAmountInBasket {...args} />
        </Provider>
    )
}

export const Default = Template.bind({})
Default.args = {
    id: 1,
}
