import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { CatalogSidebarNav } from "./CatalogSidebarNav"

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}))

describe("CatalogSidebarNav", () => {
    beforeEach(() => {
        (useSelector as jest.Mock).mockImplementation(selector => {
            if (selector.name === "getNavigationTree") {
                return [{ id: 1, name: "Category 1", icon: "" }]
            }
            if (selector.name === "getNavigationTreeError") {
                return null
            }
            return []
        });
        (useDispatch as jest.Mock).mockReturnValue(jest.fn())
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <CatalogSidebarNav />
            </BrowserRouter>
        )

        expect(screen.getByText("Category 1")).toBeInTheDocument()
    })
})
