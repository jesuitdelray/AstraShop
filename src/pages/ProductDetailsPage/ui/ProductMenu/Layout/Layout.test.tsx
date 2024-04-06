import { render } from "@testing-library/react"
import { LayoutIsland, Layout } from "./Layout"

describe("LayoutIsland", () => {
    test("renders its children", () => {
        const { getByText } = render(
            <LayoutIsland column="left">
                <div>Hello, Island!</div>
            </LayoutIsland>
        )

        expect(getByText("Hello, Island!")).toBeInTheDocument()
    })
})

describe("Layout", () => {
    test("renders children in respective columns", () => {
        const { getByText } = render(
            <Layout>
                <div key="1">Left Column</div>
                <div key="2">Main Column</div>
                <div key="3">Right Column</div>
            </Layout>
        )

        expect(getByText("Left Column")).toBeInTheDocument()
        expect(getByText("Main Column")).toBeInTheDocument()
        expect(getByText("Right Column")).toBeInTheDocument()
    })

    test("renders a single child element", () => {
        const { getByText } = render(
            <Layout>
                <div>Main Column</div>
            </Layout>
        )

        expect(getByText("Main Column")).toBeInTheDocument()
    })
})
