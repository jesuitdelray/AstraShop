import { render, fireEvent } from "@testing-library/react"
import { AddProductToFavorite } from "./AddProductToFavorite"

describe("AddProductToFavorite", () => {
    it("should render without crashing", () => {
        render(<AddProductToFavorite />)
    })

    it("should toggle isActive state on click", () => {
        const { getByTestId } = render(<AddProductToFavorite />)
        const heartIcon = getByTestId("heart-icon")

        fireEvent.click(heartIcon)
        expect(heartIcon).toHaveClass("active")

        fireEvent.click(heartIcon)
        expect(heartIcon).not.toHaveClass("active")
    })
})
