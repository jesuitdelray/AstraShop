import { render } from "@testing-library/react"
import { ProductCardSaleSkeleton } from "./ProductCardSaleSkeleton"

describe("ProductCardSaleSkeleton", () => {
    it("should render without errors", () => {
        const { container } = render(<ProductCardSaleSkeleton />)
        expect(container).toBeInTheDocument()
    })

    it("should apply custom className", () => {
        const customClassName = "test-class"
        const { container } = render(<ProductCardSaleSkeleton className={customClassName} />)
        expect(container.firstChild).toHaveClass(customClassName)
    })

    it("should display skeleton elements", () => {
        const { getByTestId } = render(<ProductCardSaleSkeleton />)
        expect(getByTestId("skeleton-header")).toBeInTheDocument()
        expect(getByTestId("skeleton-footer")).toBeInTheDocument()
        expect(getByTestId("skeleton-price")).toBeInTheDocument()
    })
})
