import { render } from "@testing-library/react"
import { Sidebar } from "./Sidebar"

describe("Sidebar", () => {
    it("renders without crashing", () => {
        render(<Sidebar children={["1", "2", "3"]} />)
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
        const { container } = render(<Sidebar children={["1", "2", "3"]} />)
        expect(container.firstChild).toHaveClass("wrapper")
    })
})
