import { render, screen, fireEvent } from "@testing-library/react"
import { BasketModalSlider } from "./BasketModalSlider"
import { useSelector, useDispatch } from "react-redux"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}))

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}))

describe("BasketModalSlider", () => {
    beforeEach(() => {
        ;(useDispatch as jest.Mock).mockClear()
        ;(useSelector as jest.Mock).mockClear()
    })

    test("renders BasketModalSlider component with empty basket", () => {
        ;(useSelector as jest.Mock).mockReturnValueOnce([])
        render(<BasketModalSlider />)

        const emptyBasketMessage = screen.getByText("empty")
        expect(emptyBasketMessage).toBeInTheDocument()
    })

    test("clicking on the cross icon closes the modal", () => {
        const mockDispatch = jest.fn()
        ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
        ;(useSelector as jest.Mock).mockReturnValueOnce([])

        render(<BasketModalSlider />)

        const crossIcon = screen.getByTestId("cross-icon")
        fireEvent.click(crossIcon)

        expect(mockDispatch).toHaveBeenCalled()
    })
})
