import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { CategoryPage } from "./CategoryPage"
import { StoreProvider } from "app/providers/StoreProvider"

test("renders CategoryPage with valid category ID", () => {
    const categoryData = {
        id: "1",
        name: "Category 1",
        categories: [],
    }

    render(
        <MemoryRouter initialEntries={["/categories/1"]}>
            <StoreProvider>
                <CategoryPage />
            </StoreProvider>
        </MemoryRouter>
    )

    expect(screen.getByText(categoryData.name)).toBeInTheDocument()
})

test("does not render CategoryPage with invalid category ID", () => {
    render(
        <MemoryRouter initialEntries={["/categories/invalid_id"]}>
            <CategoryPage />
        </MemoryRouter>
    )

    expect(screen.queryByText("Category 1")).not.toBeInTheDocument()
})
