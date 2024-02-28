import { render, screen } from "@testing-library/react"
import { NotFoundPage } from "./NotFoundPage"

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}))

describe("NotFoundPage component", () => {
    it("renders page not found message and a button to main page", () => {
        render(<NotFoundPage />)
        expect(screen.getByText("pageDoesNotExist")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
    })
})
