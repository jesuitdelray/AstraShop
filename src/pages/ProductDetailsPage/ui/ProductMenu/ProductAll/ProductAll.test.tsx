import { render } from "@testing-library/react"
import { ProductAll } from "./ProductAll"

test("renders ProductAll component", () => {
    const { container } = render(<ProductAll />)
    expect(container.firstChild).toBeInTheDocument()
})

test("renders ProductGallery component inside ProductAll", () => {
    const { getByTestId } = render(<ProductAll />)
    expect(getByTestId("product-gallery")).toBeInTheDocument()
})

test("renders ProductPriceInfo component inside ProductAll", () => {
    const { getByTestId } = render(<ProductAll />)
    expect(getByTestId("product-price-info")).toBeInTheDocument()
})

test("renders ProductDescription component inside ProductAll", () => {
    const { getByTestId } = render(<ProductAll />)
    expect(getByTestId("product-description")).toBeInTheDocument()
})
