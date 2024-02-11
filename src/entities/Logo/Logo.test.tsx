import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { Logo } from "./Logo"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: ({
        children,
        onClick,
        className,
    }: {
        children: React.ReactNode
        onClick?: () => void
        className?: string
        to?: string
    }) => (
        <div data-testid="mockedLink" onClick={onClick} className={className}>
            {children}
        </div>
    ),
}))

describe("Logo", () => {
    it("renders correctly", () => {
        render(
            <BrowserRouter>
                <Logo />
            </BrowserRouter>
        )
        expect(screen.getByText("AstraShop")).toBeInTheDocument()
    })
})
