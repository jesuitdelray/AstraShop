import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { BrowserRouter } from "react-router-dom"
import { CatalogModal } from "./CatalogModal"

describe("CatalogModal Component", () => {
    const mockClose = jest.fn()
    const mockMouseEnter = jest.fn()
    const mockMouseLeave = jest.fn()
    const mockNavTree = [{ id: 1, name: "Category 1", icon: "icon1.svg", categories: [] }]

    const renderWithRouter = (ui: any, { route = "/" } = {}) => {
        window.history.pushState({}, "Test page", route)

        return render(ui, { wrapper: BrowserRouter })
    }

    it("renders correctly", () => {
        const { getByText } = renderWithRouter(
            <CatalogModal
                isOpen={true || false}
                navTree={mockNavTree}
                onClose={mockClose}
                mouseEnter={mockMouseEnter}
                mouseLeave={mockMouseLeave}
            />
        )
        expect(getByText("Category 1")).toBeInTheDocument()
    })

    it("calls mouseEnter and mouseLeave on navigation item hover", () => {
        const { getByText } = renderWithRouter(
            <CatalogModal
                isOpen={true || false}
                navTree={mockNavTree}
                onClose={mockClose}
                mouseEnter={mockMouseEnter}
                mouseLeave={mockMouseLeave}
            />
        )

        const categoryLink = getByText("Category 1")
        fireEvent.mouseEnter(categoryLink)
        expect(mockMouseEnter).toHaveBeenCalledTimes(1)

        fireEvent.mouseLeave(categoryLink)
        expect(mockMouseLeave).toHaveBeenCalledTimes(1)
    })
})
