import { render } from "@testing-library/react"
import { Header } from "./Header"
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "app/providers/StoreProvider"

describe("Header component", () => {
    it("renders correctly", () => {
        const BurgerModal = <div data-testid="burger-modal">Burger Modal</div>
        const BasketModal = <div data-testid="basket-modal">Basket Modal</div>
        const { getByTestId } = render(
            <BrowserRouter>
                <StoreProvider>
                    <Header BurgerModal={BurgerModal} BasketModal={BasketModal} />
                </StoreProvider>
            </BrowserRouter>
        )

        expect(getByTestId("burger-modal")).toBeInTheDocument()
        expect(getByTestId("basket-modal")).toBeInTheDocument()
    })

    it("renders with inverted logo on the main page", () => {
        window.location.pathname = "/"
        const BurgerModal = <div data-testid="burger-modal">Burger Modal</div>
        const BasketModal = <div data-testid="basket-modal">Basket Modal</div>
        const { getByTestId } = render(
            <BrowserRouter>
                <StoreProvider>
                    <Header BurgerModal={BurgerModal} BasketModal={BasketModal} />
                </StoreProvider>
            </BrowserRouter>
        )

        expect(getByTestId("logo")).toHaveAttribute("variant", "INVERTED")
    })

    it("renders with normal logo on sub-category page", () => {
        window.location.pathname = "/sub-category/123"
        const BurgerModal = <div data-testid="burger-modal">Burger Modal</div>
        const BasketModal = <div data-testid="basket-modal">Basket Modal</div>
        const { getByTestId } = render(
            <BrowserRouter>
                <StoreProvider>
                    <Header BurgerModal={BurgerModal} BasketModal={BasketModal} />
                </StoreProvider>
            </BrowserRouter>
        )

        expect(getByTestId("logo")).toHaveAttribute("variant", "NORMAL")
    })
})
