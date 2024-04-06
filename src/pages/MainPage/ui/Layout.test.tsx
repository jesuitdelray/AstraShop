import { render, screen } from "@testing-library/react"
import { Layout, Row } from "./Layout"

describe("Row component", () => {
    it("renders correctly with schema", () => {
        render(
            <Row schema={{ 768: [1, 2, 1], 1024: [1, 1, 1] }}>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </Row>
        )
        const row = screen.getByTestId("row")
        expect(row).toBeInTheDocument()
        expect(row.children).toHaveLength(3)

        expect(row.children[0]).toHaveTextContent("Child 1")
        expect(row.children[1]).toHaveTextContent("Child 2")
        expect(row.children[2]).toHaveTextContent("Child 3")
    })
})

describe("Layout component", () => {
    it("renders correctly", () => {
        render(
            <Layout gap="10px">
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </Layout>
        )
        const layout = screen.getByTestId("layout")
        expect(layout).toBeInTheDocument()
        expect(layout.children).toHaveLength(3)

        expect(layout).toHaveStyle({ display: "flex", flexDirection: "column", gap: "10px" })
    })
})
