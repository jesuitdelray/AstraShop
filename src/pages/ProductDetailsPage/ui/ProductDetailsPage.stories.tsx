import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { Meta } from "@storybook/react"
import { ProductDetailsPage } from "./ProductDetailsPage"

export default {
    title: "Pages/ProductDetailsPage",
    component: ProductDetailsPage,
} as Meta

const mockStore = createStore(() => ({}))

export const Default = () => (
    <Provider store={mockStore}>
        <ProductDetailsPage />
    </Provider>
)
