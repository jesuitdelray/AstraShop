import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { ProductCard } from "./ProductCard"

describe("ProductCard", () => {
    const productProps = {
        id: 1,
        is_new: true,
        isTop: true,
        rating: 4.5,
        images: ["https://placehold.co/300x300"],
        name: "Product Name",
        price: 100,
        oldPrice: 120,
        currency: "$",
    }

    it("renders without errors", () => {
        render(
            <BrowserRouter>
                <ProductCard {...productProps} />
            </BrowserRouter>
        )
        expect(screen.getByText("Product Name")).toBeInTheDocument()
    })

    it("does not display the top label if product is not top", () => {
        render(
            <BrowserRouter>
                <ProductCard {...{ ...productProps, isTop: false }} />
            </BrowserRouter>
        )
        expect(screen.queryByTestId("product-top-label")).toBeNull()
    })
})
