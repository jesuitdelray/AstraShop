import { render, fireEvent } from "@testing-library/react"
import { ProductMenu } from "./ProductMenu"
import { StoreProvider } from "app/providers/StoreProvider"

describe("ProductMenu component", () => {
    it("renders without crashing", () => {
        render(
            <StoreProvider>
                <ProductMenu />
            </StoreProvider>
        )
    })

    it("activates menu item when clicked", () => {
        const { getByText } = render(
            <StoreProvider>
                <ProductMenu />
            </StoreProvider>
        )
        const firstMenuItem = getByText("First Item")
        expect(firstMenuItem).toHaveClass("navActive")
        const secondMenuItem = getByText("Second Item")
        fireEvent.click(secondMenuItem)
        expect(secondMenuItem).toHaveClass("navActive")
        expect(firstMenuItem).not.toHaveClass("navActive")
    })
})
