import { render, fireEvent, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { SearchProduct } from "./SearchProduct"
import { createStore } from "redux"

const rootReducer = (state = {}) => {
    return state
}

describe("SearchProduct", () => {
    it("should render without crashing", () => {
        const store = createStore(rootReducer)
        render(
            <Provider store={store}>
                <SearchProduct />
            </Provider>
        )
    })
})
