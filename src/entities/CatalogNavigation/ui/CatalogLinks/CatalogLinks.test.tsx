import { render } from "@testing-library/react"
import { Provider, useSelector } from "react-redux"
import { createStore } from "redux"
import { BrowserRouter as Router } from "react-router-dom"
import { CatalogLinks } from "./CatalogLinks"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}))

describe("CatalogLinks component", () => {
    test("renders category links", () => {
        const mockNavigationTree = [
            { id: 1, name: "Category 1", categories: [] },
            { id: 2, name: "Category 2", categories: [] },
        ];

        (useSelector as jest.Mock).mockReturnValue(mockNavigationTree)

        const { getByText } = render(
            <Provider store={createStore(() => ({}))}>
                <Router>
                    <CatalogLinks />
                </Router>
            </Provider>
        )

        expect(getByText("Category 1")).toBeInTheDocument()
        expect(getByText("Category 2")).toBeInTheDocument()
    })

    test("renders subcategory links", () => {
        const mockNavigationTree = [
            { id: 1, name: "Category 1", categories: [{ id: 11, name: "Subcategory 1-1" }] },
            { id: 2, name: "Category 2", categories: [{ id: 21, name: "Subcategory 2-1" }] },
        ];

        (useSelector as jest.Mock).mockReturnValue(mockNavigationTree)

        const { getByText } = render(
            <Provider store={createStore(() => ({}))}>
                <Router>
                    <CatalogLinks />
                </Router>
            </Provider>
        )

        expect(getByText("Subcategory 1-1")).toBeInTheDocument()
        expect(getByText("Subcategory 2-1")).toBeInTheDocument()
    })
})
