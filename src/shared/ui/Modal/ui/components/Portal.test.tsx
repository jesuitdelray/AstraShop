import { render } from "@testing-library/react"
import { Portal } from "./Portal"

describe("Portal Component", () => {
    test("renders children inside portal", () => {
        const portalRoot = document.createElement("div")
        portalRoot.setAttribute("id", "portal-root")
        document.body.appendChild(portalRoot)

        const { getByText } = render(
            <Portal element={portalRoot}>
                <div>Test Portal Content</div>
            </Portal>
        )

        expect(getByText("Test Portal Content")).toBeInTheDocument()

        document.body.removeChild(portalRoot)
    })
})
