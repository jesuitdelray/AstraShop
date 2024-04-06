import { render, screen } from "@testing-library/react"
import { AboutPage } from "./AboutPage"

jest.mock("widgets/ProductCarousel", () => ({
    ProductsRow: jest.fn(() => <div data-testid="products-row">Products Row</div>),
}))

jest.mock("widgets/Banner", () => ({
    BannersRow: jest.fn(() => <div data-testid="banners-row">Banners Row</div>),
}))

describe("AboutPage Component", () => {
    it("renders page with correct content", () => {
        render(<AboutPage />)

        expect(screen.getByTestId("about-page")).toBeInTheDocument()
        expect(screen.getByTestId("products-row")).toBeInTheDocument()
        expect(screen.getByTestId("banners-row")).toBeInTheDocument()
    })
})
