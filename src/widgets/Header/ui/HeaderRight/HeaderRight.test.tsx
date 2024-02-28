import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { HeaderRight } from "./HeaderRight"
import { StoreProvider } from "app/providers/StoreProvider"

describe("HeaderRight component", () => {
    beforeEach(() => {
        // Mock window.innerWidth
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            value: 800,
        })
    })

    it("renders SmallBasket when current modal is not BASKET and window width is >= 769", () => {
        const { getByTestId } = render(
            <StoreProvider>
                <HeaderRight isMainPage={false} />
            </StoreProvider>
        )
        expect(getByTestId("small-basket")).toBeInTheDocument()
    })

    it("renders CrossIcon when current modal is BASKET and window width is < 769", () => {
        window.innerWidth = 700
        const { getByTestId } = render(
            <StoreProvider>
                <HeaderRight isMainPage={true} />
            </StoreProvider>
        )
        expect(getByTestId("cross-icon")).toBeInTheDocument()
    })

    it("dispatches openBasket action when SmallBasket is clicked", () => {
        const mockDispatch = jest.fn()
        const { getByTestId } = render(
            <StoreProvider>
                <HeaderRight isMainPage={true} />
            </StoreProvider>
        )
        fireEvent.click(getByTestId("small-basket"))
        expect(mockDispatch).toHaveBeenCalledWith({ type: "OPEN_BASKET" })
    })

    it("dispatches close action when CrossIcon is clicked", () => {
        const mockDispatch = jest.fn()
        window.innerWidth = 700
        const { getByTestId } = render(
            <StoreProvider>
                <HeaderRight isMainPage={true} />
            </StoreProvider>
        )
        fireEvent.click(getByTestId("cross-icon"))
        expect(mockDispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" })
    })

    it("passes correct props to SmallBasket based on isMainPage prop", () => {
        const { getByTestId } = render(
            <StoreProvider>
                <HeaderRight isMainPage={true} />
            </StoreProvider>
        )
        expect(getByTestId("small-basket")).toHaveAttribute("color", "INVERTED")
    })
})
