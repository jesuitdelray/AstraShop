import { render } from "@testing-library/react"
import { VariantPictures } from "./VariantPictures"
import { StoreProvider } from "app/providers/StoreProvider"

describe("VariantPictures component", () => {
    it("renders without crashing", () => {
        render(
            <StoreProvider>
                <VariantPictures />
            </StoreProvider>
        )
    })

    it("renders no images when no images are provided", () => {
        const { queryByTestId } = render(
            <StoreProvider>
                <VariantPictures />
            </StoreProvider>
        )

        expect(queryByTestId("product-image")).toBeNull()
    })
})
