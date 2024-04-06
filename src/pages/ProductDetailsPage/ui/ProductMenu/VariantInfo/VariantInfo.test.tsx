import { render } from "@testing-library/react"
import { VariantInfo } from "./VariantInfo"

test("renders VariantInfo component", () => {
    const { container } = render(<VariantInfo />)
    expect(container.firstChild).toBeInTheDocument()
})

test("renders ProductDescription component inside VariantInfo", () => {
    const { getByTestId } = render(<VariantInfo />)
    expect(getByTestId("product-description")).toBeInTheDocument()
})
