import { render, screen } from "@testing-library/react"
import { SingleBanner } from "./SingleBanner"

// Mocking useNavigate
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}))

test("renders SingleBanner component with provided className", () => {
    const className = "custom-class"
    render(<SingleBanner imgIndex={0} className={className} />)

    const bannerContainer = screen.getByTestId("single-banner-container")
    expect(bannerContainer).toHaveClass(className)
})
