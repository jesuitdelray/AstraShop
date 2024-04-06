import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Copyright } from "./Copyright"

describe("Copyright", () => {
    it("renders with correct text", () => {
        render(<Copyright />)
        expect(screen.getByText("© AstraShop™ 2018–2023")).toBeInTheDocument()
    })

    it("accepts a className prop and applies it to the container", () => {
        const testClassName = "test-class"
        const { container } = render(<Copyright className={testClassName} />)
        expect(container.firstChild).toHaveClass(testClassName)
    })
})
