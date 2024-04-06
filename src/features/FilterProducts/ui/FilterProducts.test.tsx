import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { FilterProducts, FilterProductsProps } from "./FilterProducts"

const rootReducer = jest.fn()

jest.mock("../model/selectors/filterProductsSelectors", () => ({
    getProductFilters: jest.fn(),
}))

jest.mock("react-redux", () => ({
    ...(jest.requireActual("react-redux") as {}),
    useDispatch: jest.fn(),
}))

describe("FilterProducts component", () => {
    let mockStore: any
    let mockOnChangeFilters: jest.Mock

    beforeEach(() => {
        mockOnChangeFilters = jest.fn()
    })

    test("renders FilterProducts component correctly", () => {
        const initialState = {}
        mockStore = createStore(rootReducer, initialState, applyMiddleware(thunk))

        const props: FilterProductsProps = {
            onChangeFilters: mockOnChangeFilters,
        }

        const { getByText } = render(
            <Provider store={mockStore}>
                <FilterProducts {...props} />
            </Provider>
        )

        expect(getByText("apply")).toBeInTheDocument()
    })

    test("clicking apply button calls onChangeFilters function", () => {
        const initialState = {}
        mockStore = createStore(rootReducer, initialState, applyMiddleware(thunk))

        const props: FilterProductsProps = {
            onChangeFilters: mockOnChangeFilters,
        }

        const { getByText } = render(
            <Provider store={mockStore}>
                <FilterProducts {...props} />
            </Provider>
        )

        fireEvent.click(getByText("apply"))
        expect(mockOnChangeFilters).toHaveBeenCalled()
    })
})
