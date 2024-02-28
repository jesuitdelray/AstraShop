import { render } from "@testing-library/react"
import { ProductInfo } from "./ProductInfo"

describe("ProductInfo Component", () => {
    it("does not render article if no data provided", () => {
        const { queryByTestId } = render(<ProductInfo />)
        const articleElement = queryByTestId("article")
        expect(articleElement).not.toBeInTheDocument()
    })
})
