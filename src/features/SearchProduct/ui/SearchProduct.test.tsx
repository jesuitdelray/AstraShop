import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { SearchProduct } from "./SearchProduct"

function rootReducer(state = {}) {
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
