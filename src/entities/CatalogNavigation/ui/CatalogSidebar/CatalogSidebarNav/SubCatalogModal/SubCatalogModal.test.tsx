import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { SubCatalogModal } from "./SubCatalogModal"
import { navigationTreeType } from "entities/CatalogNavigation/model/types/list"

const mockNavTree: navigationTreeType = [
    {
        id: 1,
        name: "Category 1",
        icon: "icon1.svg",
        categories: [
            {
                id: 11,
                name: "Subcategory 1",
                image: "image1.svg",
                parent_category_id: 1,
            },
        ],
    },
    {
        id: 2,
        name: "Category 2",
        icon: "icon2.svg",
        categories: [
            {
                id: 21,
                name: "Subcategory 2",
                image: "image2.svg",
                parent_category_id: 2,
            },
        ],
    },
]

const renderWithRouter = (component: any) => {
    return render(<BrowserRouter>{component}</BrowserRouter>)
}

it("does not render when isOpen is false", () => {
    const { queryByTestId } = renderWithRouter(
        <SubCatalogModal isOpen={false} navTree={[]} onClose={() => {}} hoveredId={0} styles={{}} />
    )
    expect(queryByTestId("modal")).toBeNull()
})

it("displays SubMenu for active hoveredId", () => {
    const { getByText } = renderWithRouter(
        <SubCatalogModal
            isOpen={true}
            navTree={mockNavTree}
            hoveredId={1}
            onClose={() => {}}
            styles={{}}
        />
    )
    expect(getByText("Subcategory 1")).toBeInTheDocument()
})
