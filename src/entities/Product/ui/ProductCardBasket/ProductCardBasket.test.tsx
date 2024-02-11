import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ProductCardBasket } from "./ProductCardBasket"

describe("ProductCardBasket", () => {
    it("renders correctly", () => {
        const product = {
            id: 1,
            name: "Product Name",
            price: 200,
            currency: "$",
            quantity: 1,
            Delete: <button>Delete</button>,
            Counter: <div>Counter</div>,
            images: ["image1.jpg"],
        }
        render(<ProductCardBasket {...product} />)

        expect(screen.getByText("Product Name")).toBeInTheDocument()
        expect(screen.getByText("Counter")).toBeInTheDocument()
        expect(screen.getByText("Delete")).toBeInTheDocument()
    })
})
