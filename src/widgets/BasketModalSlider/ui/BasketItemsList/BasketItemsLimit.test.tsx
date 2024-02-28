import { render, screen, fireEvent } from "@testing-library/react"
import { BasketItemsList } from "./BasketItemsList"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Product } from "entities/Product"
import { StoreProvider } from "app/providers/StoreProvider"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}))

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}))

describe("BasketItemsList", () => {
    beforeEach(() => {
        ;(useDispatch as jest.Mock).mockClear()
    })

    test("renders BasketItemsList component with a list of products", () => {
        const productList: Product[] = [
            { id: 1, name: "Product 1", price: 10, images: [], quantity: 2 },
            { id: 2, name: "Product 2", price: 20, images: [], quantity: 1 },
        ]

        render(
            <StoreProvider>
                <BasketItemsList list={productList} />
            </StoreProvider>
        )

        const product1 = screen.getByText("Product 1")
        const product2 = screen.getByText("Product 2")

        expect(product1).toBeInTheDocument()
        expect(product2).toBeInTheDocument()
    })

    test("clicking on a product navigates to its details page", () => {
        const productList: Product[] = [{ id: 1, name: "Product 1", price: 10, images: [] }]
        const mockNavigate = jest.fn()
        const mockDispatch = jest.fn()

        ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
        ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)

        render(
            <StoreProvider>
                <BasketItemsList list={productList} />
            </StoreProvider>
        )

        const product = screen.getByText("Product 1")
        fireEvent.click(product)

        expect(mockNavigate).toHaveBeenCalledWith("/product_details/1")
        expect(mockDispatch).toHaveBeenCalled()
    })
})
