import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { CategoryLinks, CategoryLinksProps } from "./CategoryLinks"

const mockData: CategoryLinksProps = {
    data: {
        id: 1,
        name: "Category 1",
        icon: "",
        categories: [
            { parent_category_id: 0, id: 11, name: "Subcategory 1", image: "subcategory1.jpg" },
            { parent_category_id: 1, id: 12, name: "Subcategory 2", image: "subcategory2.jpg" },
        ],
    },
}

describe("CategoryLinks Component", () => {
    it("renders correctly", () => {
        render(
            <MemoryRouter>
                <CategoryLinks {...mockData} />
            </MemoryRouter>
        )

        expect(screen.getByText(mockData.data.name)).toBeInTheDocument()

        mockData.data.categories.forEach(category => {
            expect(screen.getByText(category.name)).toBeInTheDocument()
        })
    })
})
