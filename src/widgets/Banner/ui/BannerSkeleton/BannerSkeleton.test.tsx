import { render } from "@testing-library/react"
import { BannerSkeleton } from "./BannerSkeleton"

describe("BannerSkeleton", () => {
    it("renders without crashing", () => {
        render(<BannerSkeleton />)
    })

    it("renders with the provided className", () => {
        const { container } = render(<BannerSkeleton />)
        expect(container.firstChild).toHaveClass("skeleton")
    })
})
