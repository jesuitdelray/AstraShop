import { render } from "@testing-library/react"
import { ProductPriceInfo } from "./ProductPriceInfo"
import { StoreProvider } from "app/providers/StoreProvider"

describe("ProductPriceInfo component", () => {
    it("renders without crashing", () => {
        render(
            <StoreProvider>
                <ProductPriceInfo />
            </StoreProvider>
        )
    })

    it("displays 'Add to Basket' button", () => {
        const { getByText } = render(
            <StoreProvider>
                <ProductPriceInfo />
            </StoreProvider>
        )
        const addToBasketButton = getByText(/Add to Basket/i)
        expect(addToBasketButton).toBeInTheDocument()
    })
})
