import { render, screen } from "@testing-library/react"
import { SubmitOrder } from "./SubmitOrder"

jest.mock("./ErrorOrderModal/ErrorOrderModal", () => ({
    ErrorOrderModal: jest.fn(() => <div data-testid="error-modal">Error Modal</div>),
}))

jest.mock("./OrderForm/OrderForm", () => ({
    OrderForm: jest.fn(() => <form data-testid="order-form">Order Form</form>),
}))

describe("SubmitOrder Component", () => {
    it("renders ErrorOrderModal and OrderForm components", () => {
        render(<SubmitOrder />)
        expect(screen.getByTestId("error-modal")).toBeInTheDocument()
        expect(screen.getByTestId("order-form")).toBeInTheDocument()
    })
})
