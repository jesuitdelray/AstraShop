import React from "react"
import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import {
    ToggleProductInBasket,
    ToggleProductInBasketProps,
    ToggleProductInBasketVariant,
} from "./ToggleProductInBasket"
import { basketReducer } from "entities/Basket"
import { productDetailsReducer } from "pages/ProductDetailsPage"

export default {
    title: "Features/ToggleProductInBasket",
    component: ToggleProductInBasket,
    decorators: [Story => <Provider store={store}>{Story()}</Provider>],
} as Meta

const store = configureStore({
    reducer: {
        basket: basketReducer,
        product: productDetailsReducer,
    },
})

const Template: Story<ToggleProductInBasketProps> = args => <ToggleProductInBasket {...args} />

export const IconVariant = Template.bind({})
IconVariant.args = {
    product: { id: 1, name: "Test Product", price: 100, images: [] },
    variant: ToggleProductInBasketVariant.ICON,
}

export const ButtonVariant = Template.bind({})
ButtonVariant.args = {
    product: { id: 2, name: "Another Test Product", price: 200, images: [] },
    variant: ToggleProductInBasketVariant.BUTTON,
}
