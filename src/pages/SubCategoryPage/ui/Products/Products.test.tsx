import { render } from "@testing-library/react"
import { Products } from "./Products"

describe("Products Component", () => {
    it("renders skeleton when loading", () => {
        const { getAllByTestId } = render(<Products isLoading={!true} products={[]} />)
        const skeletonCards = getAllByTestId("product-card-skeleton")
        expect(skeletonCards).toHaveLength(5)
    })

    it("renders product cards when not loading", () => {
        const products = [
            { id: 1, name: "Product 1", price: 10, images: [], is_new: true },
            { id: 2, name: "Product 2", price: 20, images: [], is_new: false },
        ]
        const { getAllByTestId } = render(<Products isLoading={false} products={products} />)
        const productCards = getAllByTestId("product-card")
        expect(productCards).toHaveLength(products.length)
    })
})
