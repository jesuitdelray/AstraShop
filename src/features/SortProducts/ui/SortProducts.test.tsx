import { render, fireEvent } from "@testing-library/react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { SortProducts } from ".."

// eslint-disable-next-line default-param-last
const mockReducer = (state = { sortOrder: null }, action: any) => {
    switch (action.type) {
        case "SET_ORDER":
            return { ...state, sortOrder: action.payload }
        default:
            return state
    }
}

describe("SortProducts", () => {
    it("should render without crashing", () => {
        const store = createStore(mockReducer)
        const { getByText } = render(
            <Provider store={store}>
                <SortProducts />
            </Provider>
        )
        expect(getByText("sortBy")).toBeInTheDocument()
        expect(getByText("sortByLowToHigh")).toBeInTheDocument()
        expect(getByText("sortByHighToLow")).toBeInTheDocument()
    })

    it("should call onChangeSort callback when button is clicked", () => {
        const onChangeSortMock = jest.fn()
        const store = createStore(mockReducer)
        const { getByText } = render(
            <Provider store={store}>
                <SortProducts onChangeSort={onChangeSortMock} />
            </Provider>
        )

        fireEvent.click(getByText("sortByLowToHigh"))
        expect(onChangeSortMock).toHaveBeenCalled()

        fireEvent.click(getByText("sortByHighToLow"))
        expect(onChangeSortMock).toHaveBeenCalledTimes(2)
    })
})
