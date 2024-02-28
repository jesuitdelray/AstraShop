import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { ProductAll } from "./ProductAll"
import { StoreProvider } from "app/providers/StoreProvider"

describe("ProductAll component", () => {
    it("renders without crashing", () => {
        render(
            <Router>
                <StoreProvider>
                    <ProductAll />
                </StoreProvider>
            </Router>
        )
    })

    it("renders ProductGallery component", () => {
        const { getByTestId } = render(
            <Router>
                <StoreProvider>
                    <ProductAll />
                </StoreProvider>
            </Router>
        )
        const productGalleryComponent = getByTestId("product-gallery")
        expect(productGalleryComponent).toBeInTheDocument()
    })

    it("renders ProductPriceInfo component", () => {
        const { getByTestId } = render(
            <Router>
                <StoreProvider>
                    <ProductAll />
                </StoreProvider>
            </Router>
        )
        const productPriceInfoComponent = getByTestId("product-price-info")
        expect(productPriceInfoComponent).toBeInTheDocument()
    })

    it("renders ProductDescription component", () => {
        const { getByTestId } = render(
            <Router>
                <StoreProvider>
                    <ProductAll />
                </StoreProvider>
            </Router>
        )
        const productDescriptionComponent = getByTestId("product-description")
        expect(productDescriptionComponent).toBeInTheDocument()
    })
})
