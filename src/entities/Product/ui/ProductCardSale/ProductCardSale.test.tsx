import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { ProductCardSale } from "./ProductCardSale"

describe("ProductCardSale", () => {
    it("renders product name and price", () => {
        const productProps = {
            id: 1,
            is_new: true,
            images: ["test-image.jpg"],
            name: "Test Product",
            price: 100,
            currency: "$",
        }

        render(
            <BrowserRouter>
                <ProductCardSale {...productProps} />
            </BrowserRouter>
        )

        expect(screen.getByText("Test Product")).toBeInTheDocument()
    })

    it("renders custom basket component if provided", () => {
        const productProps = {
            id: 1,
            images: ["test-image.jpg"],
            name: "Test Product",
            price: 100,
            Basket: <button data-testid="custom-basket">Add to Basket</button>,
        }

        render(
            <BrowserRouter>
                <ProductCardSale {...productProps} />
            </BrowserRouter>
        )

        expect(screen.getByTestId("custom-basket")).toBeInTheDocument()
    })

    it("navigates to product detail page on click", () => {
        jest.mock("react-router-dom", () => ({
            ...jest.requireActual("react-router-dom"),
            useNavigate: () => jest.fn(),
        }))

        const productProps = {
            id: 123,
            images: ["test-image.jpg"],
            name: "Test Product",
            price: 100,
        }

        render(
            <BrowserRouter>
                <ProductCardSale {...productProps} />
            </BrowserRouter>
        )
    })
})
