import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom" // Import MemoryRouter
import { FooterLinksList, LinksListProps } from "./FooterLinksList"

describe("FooterLinksList component", () => {
    const testData: LinksListProps = {
        data: {
            title: "Test Title",
            list: [
                { id: "1", text: "Link 1", path: "/link1" },
                { id: "2", text: "Link 2", path: "/link2" },
                { id: "3", text: "Link 3", path: "/link3" },
            ],
        },
        className: "test-class",
    }

    it("renders FooterLinksList component with correct title and links", () => {
        const { getByText } = render(
            <MemoryRouter>
                {" "}
                {/* Wrap your component with MemoryRouter */}
                <FooterLinksList {...testData} />
            </MemoryRouter>
        )

        const titleElement = getByText("Test Title")
        expect(titleElement).toBeInTheDocument()

        testData.data.list.forEach(link => {
            const linkElement = getByText(link.text)
            expect(linkElement).toBeInTheDocument()
            expect(linkElement.getAttribute("href")).toBe(link.path)
        })
    })
})
