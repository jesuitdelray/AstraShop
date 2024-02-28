import { render } from "@testing-library/react"
import { VariantInfo } from "./VariantInfo"
import { StoreProvider } from "app/providers/StoreProvider"

describe("VariantInfo component", () => {
    it("renders without crashing", () => {
        render(
            <StoreProvider>
                <VariantInfo />
            </StoreProvider>
        )
    })

    it("renders ProductDescription component", () => {
        const { getByTestId } = render(
            <StoreProvider>
                <VariantInfo />
            </StoreProvider>
        )
        const productDescriptionComponent = getByTestId("product-description")
        expect(productDescriptionComponent).toBeInTheDocument()
    })
})
