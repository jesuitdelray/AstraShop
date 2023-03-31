import { fireEvent, render, screen } from "@testing-library/react"
import { AppRouter } from "app/providers/router"
import { MemoryRouter } from "react-router-dom"
import { AppLink } from "./AppLink"

describe("Applink", () => {
    test("Applink test", () => {
        render(
            <MemoryRouter>
                <AppLink to="/">Applink test</AppLink>
            </MemoryRouter>
        )
        expect(screen.getByText("Applink test")).toBeInTheDocument()
    })
    test("Applink test on click", () => {
        render(
            <MemoryRouter>
                <AppLink to="/about">Applink test</AppLink>
                <AppRouter />
            </MemoryRouter>
        )
        fireEvent.click(screen.getByText("Applink test"))
        expect(window.location.pathname).toEqual("/about")
    })
})
