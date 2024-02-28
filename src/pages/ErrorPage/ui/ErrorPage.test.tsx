import { render, screen, fireEvent } from "@testing-library/react"
import { ErrorPage } from "./ErrorPage"

describe("ErrorPage component", () => {
    it("renders error message", () => {
        render(<ErrorPage />)
        const errorMessage = screen.getByText(/errorPageError/i)
        expect(errorMessage).toBeInTheDocument()
    })

    it("renders button with correct text", () => {
        render(<ErrorPage />)
        const button = screen.getByRole("button", { name: /errorPageComeBackToMain/i })
        expect(button).toBeInTheDocument()
    })
})
