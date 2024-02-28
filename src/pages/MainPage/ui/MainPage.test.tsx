import { render, screen } from "@testing-library/react"
import { MainPage } from "./MainPage"

describe("MainPage component", () => {
    it("renders correctly", () => {
        render(<MainPage />)
        expect(screen.getByTestId("catalog-sidebar-nav")).toBeInTheDocument()
        expect(screen.getByTestId("banner-slider")).toBeInTheDocument()
        expect(screen.getByTestId("products-sale")).toBeInTheDocument()
        expect(screen.getByTestId("banner-with-products-row")).toBeInTheDocument()
        expect(screen.getByTestId("single-banner")).toBeInTheDocument()
        expect(screen.getByTestId("products-row")).toBeInTheDocument()
        expect(screen.getByTestId("banners-row")).toBeInTheDocument()
    })
})
