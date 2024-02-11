import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import { BasketSummary } from "./BasketSummary"

const mockBasketReducer = () => ({})

const mockRootReducer = combineReducers({
    basket: mockBasketReducer,
})

const store = createStore(mockRootReducer)

describe("BasketSummary", () => {
    const mockOnOrderClick = jest.fn()
    const mockOnExitClick = jest.fn()

    beforeEach(() => {
        render(
            <Provider store={store}>
                <BasketSummary onOrderClick={mockOnOrderClick} onExitClick={mockOnExitClick} />
            </Provider>
        )
    })

    it("calls onOrderClick when order button is clicked", () => {
        fireEvent.click(screen.getByText("basketConfirmTheOrder"))
        expect(mockOnOrderClick).toHaveBeenCalled()
    })

    it("calls onExitClick when continue shopping button is clicked", () => {
        fireEvent.click(screen.getByText("continueShopping"))
        expect(mockOnExitClick).toHaveBeenCalled()
    })
})
