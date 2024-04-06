import React from "react"
import { render } from "@testing-library/react"
import { Skeleton } from "./Skeleton"

describe("Skeleton Component", () => {
    it("renders correctly with default props", () => {
        const { container } = render(<Skeleton />)
        const skeletonElement = container.firstChild
        expect(skeletonElement).toBeInTheDocument()
        expect(skeletonElement).toHaveClass("Skeleton")
    })

    it("renders correctly with custom props", () => {
        const { container } = render(
            <Skeleton
                className="customClass"
                height={100}
                width={200}
                border="5px"
                style={{ color: "red" }}
            />
        )
        const skeletonElement = container.firstChild
        expect(skeletonElement).toBeInTheDocument()
        expect(skeletonElement).toHaveClass("Skeleton", "customClass")
        expect(skeletonElement).toHaveStyle({
            height: "100px",
            width: "200px",
            borderRadius: "5px",
            color: "red",
        })
    })
})
