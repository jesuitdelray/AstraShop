import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ProductCardSkeleton } from "./ProductCardSkeleton"

describe("ProductCardSkeleton", () => {
    it("renders correctly", () => {
        const customClassName = "custom-classname"
        render(<ProductCardSkeleton className={customClassName} />)
        const container = document.querySelector(`.${customClassName}`)
        expect(container).toBeInTheDocument()
        const skeletons = container?.querySelectorAll(".Skeleton")
        expect(skeletons).toHaveLength(4)
    })
})
