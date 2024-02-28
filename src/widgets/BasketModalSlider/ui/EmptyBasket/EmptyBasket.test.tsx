import { render, screen, fireEvent } from "@testing-library/react"
import { EmptyBasket, EmptyBasketProps } from "./EmptyBasket"
import { useTranslation } from "react-i18next"

jest.mock("react-i18next", () => ({
    ...jest.requireActual("react-i18next"),
    useTranslation: jest.fn(),
}))

describe("EmptyBasket", () => {
    const mockOnClose = jest.fn()

    const renderComponent = () => {
        const props: EmptyBasketProps = {
            onClose: mockOnClose,
        }
        return render(<EmptyBasket {...props} />)
    }

    beforeEach(() => {
        ;(useTranslation as jest.Mock).mockReturnValue({
            t: jest.fn().mockReturnValue("empty"),
        })
    })

    test("renders empty basket text", () => {
        renderComponent()
        const emptyBasketText = screen.getByTestId("empty-basket-text")
        expect(emptyBasketText).toBeInTheDocument()
    })

    test("calls onClose when 'continue shopping' button is clicked", () => {
        renderComponent()
        const continueShoppingButton = screen.getByTestId("continue-shopping-button")
        fireEvent.click(continueShoppingButton)
        expect(mockOnClose).toHaveBeenCalled()
    })
})
