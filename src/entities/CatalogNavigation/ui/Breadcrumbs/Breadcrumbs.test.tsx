import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { BrowserRouter as Router } from "react-router-dom"
import { Breadcrumbs } from "./Breadcrumbs"

const initialState = {
    catalogNavigation: {
        currentTree: [
            { id: 1, name: "Home", type: "CATALOG" },
            { id: 2, name: "Category1", type: "CATEGORY" },
        ],
    },
}

const mockReducer = (state = initialState) => state

const mockStore = createStore(mockReducer)

function renderWithProviders(ui: any) {
    return render(
        <Provider store={mockStore}>
            <Router>{ui}</Router>
        </Provider>
    )
}

describe("Breadcrumbs Component", () => {
    it("renders without crashing and displays breadcrumbs", () => {
        renderWithProviders(<Breadcrumbs />)
        expect(screen.getByText("Home")).toBeInTheDocument()
        expect(screen.getByText("Category1")).toBeInTheDocument()
    })
})
