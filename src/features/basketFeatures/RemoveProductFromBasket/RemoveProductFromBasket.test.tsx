import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { RemoveProductFromBasket } from "./RemoveProductFromBasket"
import { StoreProvider } from "app/providers/StoreProvider"

const rootReducer = combineReducers({})

const store = createStore(rootReducer, applyMiddleware(thunk))

describe("RemoveProductFromBasket", () => {
    it("renders without crashing", () => {
        const { getByTestId } = render(
            <StoreProvider>
                <RemoveProductFromBasket id={1} />
            </StoreProvider>
        )

        expect(getByTestId("delete-icon")).toBeInTheDocument()
    })
})
