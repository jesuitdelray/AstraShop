import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "./ToggleProductInBasket"

const mockDispatch = jest.fn()
const mockProduct = { id: 1, name: "Test Product", images: [], price: 0 }

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}))

describe("ToggleProductInBasket", () => {
    it("renders add to basket button for a product not in the basket", () => {
        render(
            <ToggleProductInBasket
                product={mockProduct}
                variant={ToggleProductInBasketVariant.BUTTON}
            />
        )

        expect(screen.getByText("basketAddBtn")).toBeInTheDocument()
    })

    it("dispatches addToBasket action when add button is clicked", () => {
        render(
            <ToggleProductInBasket
                product={mockProduct}
                variant={ToggleProductInBasketVariant.BUTTON}
            />
        )

        fireEvent.click(screen.getByText("basketAddBtn"))
        expect(mockDispatch).toHaveBeenCalledWith(expect.anything())
    })
})
