import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ProductPriceInfo } from "./ProductPriceInfo"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}))

describe("ProductPriceInfo component", () => {
    beforeEach(() => {
        (useSelector as jest.Mock).mockClear();
        (useDispatch as jest.Mock).mockClear();
        (useNavigate as jest.Mock).mockClear()
        jest.clearAllMocks()
    })

    test("renders ProductPriceInfo component", () => {
        (useSelector as jest.Mock).mockReturnValueOnce({})
        const { container } = render(<ProductPriceInfo />)
        expect(container.firstChild).toBeInTheDocument()
    })

    test("clickHandler adds product to basket if it's not already in basket", () => {
        const mockProductDetails = { id: 1, name: "Product 1", price: 10 };
        (useSelector as jest.Mock).mockReturnValueOnce(mockProductDetails);
        (useSelector as jest.Mock).mockReturnValueOnce([])
        const mockDispatch = jest.fn();
        (useDispatch as jest.Mock).mockReturnValueOnce(mockDispatch)
        const mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate)

        const { getByText } = render(<ProductPriceInfo />)
        fireEvent.click(getByText("Buy Now"))

        expect(mockDispatch).toHaveBeenCalledWith({
            type: "ADD_TO_BASKET",
            payload: mockProductDetails,
        })
        expect(mockNavigate).toHaveBeenCalledWith("/order")
    })

    test("clickHandler does not add product to basket if it's already in basket", () => {
        const mockProductDetails = { id: 1, name: "Product 1", price: 10 };
        (useSelector as jest.Mock).mockReturnValueOnce(mockProductDetails);
        (useSelector as jest.Mock).mockReturnValueOnce([mockProductDetails])
        const mockDispatch = jest.fn();
        (useDispatch as jest.Mock).mockReturnValueOnce(mockDispatch)
        const mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate)

        const { getByText } = render(<ProductPriceInfo />)
        fireEvent.click(getByText("Buy Now"))

        expect(mockDispatch).not.toHaveBeenCalled()
        expect(mockNavigate).toHaveBeenCalledWith("/order")
    })
})
