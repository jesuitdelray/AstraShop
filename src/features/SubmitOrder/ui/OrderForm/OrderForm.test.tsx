import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { OrderForm } from "./OrderForm"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
}))

jest.mock("../../model/services/createNewOrder/createNewOrder", () => ({
    createNewOrder: jest.fn(),
}))

describe("OrderForm component", () => {
    const mockReducer = combineReducers({
        basket: () => ({}),
    })

    let store: any

    beforeEach(() => {
        store = createStore(mockReducer, applyMiddleware(thunk))
    })

    it("renders all necessary inputs and buttons", () => {
        render(
            <Provider store={store}>
                <OrderForm />
            </Provider>
        )

        expect(screen.getByLabelText("Name")).toBeInTheDocument()
        expect(screen.getByLabelText("Phone")).toBeInTheDocument()
        expect(screen.getByLabelText("Email")).toBeInTheDocument()
        expect(screen.getByLabelText("City")).toBeInTheDocument()
        expect(screen.getByLabelText("Type of Delivery")).toBeInTheDocument()
        expect(screen.getByLabelText("Post")).toBeInTheDocument()
        expect(screen.getByLabelText("Agreement")).toBeInTheDocument()
        expect(screen.getByText("Order")).toBeInTheDocument()
        expect(screen.getByText("Exit")).toBeInTheDocument()
    })

    it("submits the form when Order button is clicked", () => {
        render(
            <Provider store={store}>
                <OrderForm />
            </Provider>
        )

        fireEvent.change(screen.getByLabelText("Name"), { target: { value: "John Doe" } })
        fireEvent.change(screen.getByLabelText("Phone"), { target: { value: "1234567890" } })
        fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@example.com" } })
        fireEvent.change(screen.getByLabelText("City"), { target: { value: "New York" } })
        fireEvent.click(screen.getByLabelText("Agreement"))
        fireEvent.click(screen.getByText("Order"))
    })
})
