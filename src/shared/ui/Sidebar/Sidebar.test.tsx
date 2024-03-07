import { render } from "@testing-library/react"
import { Sidebar } from "./Sidebar"

describe("Sidebar", () => {
    it("renders without crashing", () => {
        render(<Sidebar>{["1", "2", "3"]}</Sidebar>)
    })

    it("renders children correctly", () => {
        const { getByText } = render(
            <Sidebar>
                <div>Child Component</div>
            </Sidebar>
        )
        expect(getByText("Child Component")).toBeInTheDocument()
    })

    it("applies additional classNames correctly", () => {
        const { container } = render(<Sidebar>{["1", "2", "3"]}</Sidebar>)
        expect(container.firstChild).toHaveClass("wrapper")
    })
})
