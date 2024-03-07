import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { SearchDropdown } from "./SearchDropdown"

// eslint-disable-next-line default-param-last
function reducer(state = {}, action: { type: string; payload?: any }) {
    switch (action.type) {
        case "SEARCH_PRODUCTS_START":
            return { ...state, isLoading: true }
        case "SEARCH_PRODUCTS_SUCCESS":
            return { ...state, isLoading: false, productsList: action.payload }
        case "SEARCH_PRODUCTS_ERROR":
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state
    }
}

describe("SearchDropdown", () => {
    it("should render without crashing", () => {
        const setIsDropdownOpen = jest.fn()
        const store = createStore(reducer)
        render(
            <Provider store={store}>
                <SearchDropdown setIsDropdownOpen={setIsDropdownOpen} />
            </Provider>
        )
    })
})
