import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { SmallBasket } from "./SmallBasket"

describe("SmallBasket", () => {
    const mockOnClick = jest.fn()

    it("should display the correct basket count", () => {
        const basketCount = 5
        render(<SmallBasket basketCount={basketCount} onClick={mockOnClick} />)
        expect(screen.getByText(basketCount.toString())).toBeInTheDocument()
    })

    it("should call onClick when clicked", () => {
        const basketCount = 5
        render(<SmallBasket basketCount={basketCount} onClick={mockOnClick} />)
        fireEvent.click(screen.getByText(basketCount.toString()))
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})
