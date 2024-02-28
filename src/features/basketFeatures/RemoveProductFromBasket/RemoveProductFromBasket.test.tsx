import React from "react"
import { render, fireEvent, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { RemoveProductFromBasket } from "./RemoveProductFromBasket"
import { basketActions } from "entities/Basket"

const configureStore = () => {
    const rootReducer = combineReducers({})
    return createStore(rootReducer, applyMiddleware(thunk))
}

describe("RemoveProductFromBasket", () => {
    it("renders without crashing", () => {
        const store = configureStore()
        jest.spyOn(React, "useState").mockReturnValue([true, jest.fn()])

        const { getByTestId } = render(
            <Provider store={store}>
                <RemoveProductFromBasket id={1} />
            </Provider>
        )

        expect(getByTestId("overlay")).toBeInTheDocument()
    })

    it("opens modal when delete icon is clicked", async () => {
        const store = configureStore()
        const { getByTestId, queryByTestId } = render(
            <Provider store={store}>
                <RemoveProductFromBasket id={1} />
            </Provider>
        )

        await waitFor(() => expect(getByTestId("confirm-delete")).toBeInTheDocument())
    })

    it("removes product from basket when confirm button is clicked", async () => {
        const store = configureStore()
        const dispatchSpy = jest.spyOn(store, "dispatch")

        const { getByTestId } = render(
            <Provider store={store}>
                <RemoveProductFromBasket id={1} />
            </Provider>
        )

        fireEvent.click(getByTestId("confirm-delete"))

        await waitFor(() => {
            expect(dispatchSpy).toHaveBeenCalledWith(basketActions.removeFromBasket(1))
        })
    })
})
