import { render } from "@testing-library/react"
import { VariantReviews } from "./VariantReviews"

describe("VariantReviews component", () => {
    it("renders without crashing", () => {
        render(<VariantReviews />)
    })

    it("renders 'No reviews' message", () => {
        const { getByText } = render(<VariantReviews />)
        expect(getByText("No reviews")).toBeInTheDocument()
    })
})
