import { render } from "@testing-library/react"
import { MainPage } from "./MainPage"

describe("MainPage component", () => {
    test("renders MainPage component with all child components", () => {
        const { getByTestId } = render(<MainPage />)

        expect(getByTestId("catalog-sidebar-nav")).toBeInTheDocument()
        expect(getByTestId("banner-slider")).toBeInTheDocument()
        expect(getByTestId("products-sale")).toBeInTheDocument()
        expect(getByTestId("banner-with-products-row")).toBeInTheDocument()
        expect(getByTestId("single-banner")).toBeInTheDocument()
        expect(getByTestId("products-row")).toBeInTheDocument()
        expect(getByTestId("banners-row")).toBeInTheDocument()
    })
})
