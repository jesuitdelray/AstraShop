import { render, screen } from "@testing-library/react"
import { BasketItemsList } from "./BasketItemsList"

describe("BasketItemsList Component", () => {
    it("renders correctly with empty list", () => {
        render(<BasketItemsList list={[]} />)
        expect(screen.queryByText("No items in the basket")).toBeInTheDocument()
    })

    it("renders correctly with products list", () => {
        const products = [
            { id: 1, name: "Product 1", price: 10, images: [], quantity: 1 },
            { id: 2, name: "Product 2", price: 20, images: [], quantity: 2 },
        ]

        render(<BasketItemsList list={products} />)

        expect(screen.getByText("Product 1")).toBeInTheDocument()
        expect(screen.getByText("Product 2")).toBeInTheDocument()
    })
})
