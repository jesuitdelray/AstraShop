import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "./Footer"

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
