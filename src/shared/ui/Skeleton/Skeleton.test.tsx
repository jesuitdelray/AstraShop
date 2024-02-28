import { render } from "@testing-library/react"
import { Skeleton } from "./Skeleton"

describe("Skeleton", () => {
    it("renders without crashing", () => {
        render(<Skeleton />)
    })

    it("applies className correctly", () => {
        const { container } = render(<Skeleton className="custom-class" />)
        expect(container.firstChild).toHaveClass("custom-class")
    })

    it("applies height correctly", () => {
        const { container } = render(<Skeleton height="50px" />)
        expect(container.firstChild).toHaveStyle("height: 50px")
    })

    it("applies width correctly", () => {
        const { container } = render(<Skeleton width="100px" />)
        expect(container.firstChild).toHaveStyle("width: 100px")
    })

    it("applies border radius correctly", () => {
        const { container } = render(<Skeleton border="50%" />)
        expect(container.firstChild).toHaveStyle("border-radius: 50%")
    })

    it("applies additional styles correctly", () => {
        const { container } = render(<Skeleton style={{ backgroundColor: "red" }} />)
        expect(container.firstChild).toHaveStyle("background-color: red")
    })
})
