import { fireEvent, render, screen } from "@testing-library/react"
import { AppRouter } from "app/providers/router"
import { MemoryRouter, Route, Router, Routes } from "react-router-dom"
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
        const onClick = jest.fn()
        render(
            <MemoryRouter>
                <AppLink to="/about" onClick={onClick}>
                    Applink test
                </AppLink>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/about" element={<></>} />
                </Routes>
            </MemoryRouter>
        )
        fireEvent.click(screen.getByText("Applink test"))
        expect(onClick).toHaveBeenCalled()
    })
})

test("clicking filter links updates product query params", () => {
    let testHistory, testLocation
    render(
        <MemoryRouter initialEntries={["/my/initial/route"]}>
            <App />
            <Route
                path="*"
                render={({ history, location }) => {
                    testHistory = history
                    testLocation = location
                    return null
                }}
            />
        </MemoryRouter>,
        node
    )

    act(() => {
        // example: click a <Link> to /products?id=1234
    })

    // assert about url
    expect(testLocation.pathname).toBe("/products")
    const searchParams = new URLSearchParams(testLocation.search)
    expect(searchParams.has("id")).toBe(true)
    expect(searchParams.get("id")).toEqual("1234")
})
