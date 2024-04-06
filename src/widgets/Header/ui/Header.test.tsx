import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./Header"

describe("Header Component", () => {
    it("renders without crashing", () => {
        const mockBurgerModal = <div data-testid="burger-modal">Burger Modal</div>
        const mockBasketModal = <div data-testid="basket-modal">Basket Modal</div>

        const { getByTestId } = render(
            <Router>
                <Header BurgerModal={mockBurgerModal} BasketModal={mockBasketModal} />
            </Router>
        )

        expect(getByTestId("burger-modal")).toBeInTheDocument()
        expect(getByTestId("basket-modal")).toBeInTheDocument()
    })

    it("renders correctly with props", () => {
        const mockBurgerModal = <div data-testid="burger-modal">Burger Modal</div>
        const mockBasketModal = <div data-testid="basket-modal">Basket Modal</div>

        const { getByTestId } = render(
            <Router>
                <Header BurgerModal={mockBurgerModal} BasketModal={mockBasketModal} />
            </Router>
        )

        expect(getByTestId("header-left")).toBeInTheDocument()
        expect(getByTestId("navigation-list")).toBeInTheDocument()
        expect(getByTestId("header-right")).toBeInTheDocument()
        expect(getByTestId("search-product")).toBeInTheDocument()
    })
})
