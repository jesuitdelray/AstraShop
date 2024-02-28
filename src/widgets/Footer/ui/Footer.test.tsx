import { render } from "@testing-library/react"
import { Footer } from "./Footer"
import { BrowserRouter } from "react-router-dom"

describe("Footer component", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })

    it("displays correct slogan text", () => {
        const { getByText } = render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )

        expect(getByText("footerSlogan")).toBeInTheDocument()
    })
})
