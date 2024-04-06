import React from "react"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { ProductsSale } from "./ProductsSale"

const mockTopProducts = [
    { id: 1, name: "Product 1", price: 10, images: [], is_new: true },
    { id: 2, name: "Product 2", price: 20, images: [], is_new: false },
]

describe("ProductsSale Component", () => {
    it("renders sale products without crashing", () => {
        // eslint-disable-next-line default-param-last
        function rootReducer(state = { topProducts: [] }, action: any) {
            switch (action.type) {
                case "FETCH_TOP_PRODUCTS_SUCCESS":
                    return { ...state, topProducts: action.payload }
                default:
                    return state
            }
        }

        const store = createStore(rootReducer)

        render(
            <Provider store={store}>
                <ProductsSale />
            </Provider>
        )

        expect(screen.getByText("SALE")).toBeInTheDocument()
        expect(screen.getByText("Product 1")).toBeInTheDocument()
        expect(screen.getByText("Product 2")).toBeInTheDocument()
    })
})
