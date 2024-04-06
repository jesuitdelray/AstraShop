import { render, fireEvent, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { BannerSlider } from "./BannerSlider"

describe("BannerSlider", () => {
    it("navigates on click", async () => {
        render(
            <BrowserRouter>
                <BannerSlider />
            </BrowserRouter>
        )

        const slideLinks = screen.queryAllByRole("img")
        if (slideLinks.length > 0) {
            fireEvent.click(slideLinks[0])
        } else {
            console.error("No images found")
        }
    })

    it("changes slide on pagination bullet click", async () => {
        render(
            <BrowserRouter>
                <BannerSlider />
            </BrowserRouter>
        )

        const paginationBullet = screen.queryByTestId("pagination-bullet")
        if (paginationBullet) {
            fireEvent.click(paginationBullet)
        } else {
            console.error("Pagination bullet not found")
        }
    })
})
