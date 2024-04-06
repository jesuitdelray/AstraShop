import React from "react"
import { render } from "@testing-library/react"
import { CatalogSidebar } from "./CatalogSidebar"

describe("CatalogSidebar component", () => {
    test("renders Sidebar, Logo, CatalogSidebarNav, and Copyright components", () => {
        const { getByTestId } = render(<CatalogSidebar />)

        expect(getByTestId("sidebar")).toBeInTheDocument()

        expect(getByTestId("logo")).toBeInTheDocument()

        expect(getByTestId("catalog-sidebar-nav")).toBeInTheDocument()

        expect(getByTestId("copyright")).toBeInTheDocument()
    })
})
