import React from "react"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { ProductDetailsPage } from "./ProductDetailsPage"

jest.mock("../model/services/fetchProductDetails/fetchProductDetails", () => ({
    fetchProductDetails: jest.fn(),
}))

describe("ProductDetailsPage component", () => {
    it("renders without crashing", () => {
        const store = createStore(() => ({}), applyMiddleware(thunk))

        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/products/123"]}>
                    <Route path="/products/:id">
                        <ProductDetailsPage />
                    </Route>
                </MemoryRouter>
            </Provider>
        )

        expect(getByText("Loading...")).toBeInTheDocument()
    })

    it("fetches product details when mounted", async () => {
        const store = createStore(() => ({}), applyMiddleware(thunk))

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/products/123"]}>
                    <Route path="/products/:id">
                        <ProductDetailsPage />
                    </Route>
                </MemoryRouter>
            </Provider>
        )

        await waitFor(() => {
            // Проверка, что после монтирования компонента была вызвана функция fetchProductDetails
            expect(
                require("../model/services/fetchProductDetails/fetchProductDetails")
                    .fetchProductDetails
            ).toHaveBeenCalled()
        })
    })
})
