import { render, screen, fireEvent } from "@testing-library/react"
import { PaymentErrorModal } from "./PaymentErrorModal"
import { useDispatch, useSelector } from "react-redux"
import { modalsActions, ModalsList } from "entities/ModalSlider"

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}))

describe("PaymentErrorModal component", () => {
    beforeEach(() => {
        ;(useSelector as jest.Mock).mockReturnValue(ModalsList.PAYMENT_ERROR)
    })

    it("calls dispatch with close action when return button is clicked", () => {
        const dispatchMock = jest.fn()
        ;(useDispatch as jest.Mock).mockReturnValue(dispatchMock)
        render(<PaymentErrorModal />)
        fireEvent.click(screen.getByRole("button"))
        expect(dispatchMock).toHaveBeenCalledWith(modalsActions.close())
    })

    it("calls dispatch with close action when close button is clicked", () => {
        const dispatchMock = jest.fn()
        ;(useDispatch as jest.Mock).mockReturnValue(dispatchMock)
        render(<PaymentErrorModal />)
        fireEvent.click(screen.getByTestId("closeBtn"))
        expect(dispatchMock).toHaveBeenCalledWith(modalsActions.close())
    })
})
