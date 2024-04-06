import React from "react"
import { render } from "@testing-library/react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { OrderPage } from "./OrderPage"

// Mocking useDispatch and useSearchParams
jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}))
jest.mock("react-router-dom", () => ({
    useSearchParams: jest.fn(),
}))

describe("OrderPage component", () => {
    beforeEach(() => {
        (useDispatch as jest.Mock).mockClear();
        (useSearchParams as jest.Mock).mockClear()
        jest.clearAllMocks()
    })

    test("dispatches actions on successful payment", () => {
        const mockDispatch = jest.fn();
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
        (useSearchParams as jest.Mock).mockReturnValue({
            get: jest.fn().mockReturnValue("success"),
        })

        render(<OrderPage />)

        expect(mockDispatch).toHaveBeenCalledTimes(2)
        expect(mockDispatch).toHaveBeenCalledWith({ type: "OPEN_SUCCESS_MODAL" })
        expect(mockDispatch).toHaveBeenCalledWith({ type: "CLEAR_BASKET" })
    })

    test("dispatches action on failed payment", () => {
        const mockDispatch = jest.fn();
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
        (useSearchParams as jest.Mock).mockReturnValue({
            get: jest.fn().mockReturnValue("failure"),
        })

        render(<OrderPage />)

        expect(mockDispatch).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledWith({ type: "OPEN_PAYMENT_ERROR_MODAL" })
    })
})
