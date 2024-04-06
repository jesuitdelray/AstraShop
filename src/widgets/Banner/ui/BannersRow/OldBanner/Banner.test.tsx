import { render } from "@testing-library/react"
import { Banner, BannerVariant, BannerColor } from "./Banner"

describe("Banner Component", () => {
    const defaultProps = {
        title: "Banner Title",
        desc: "Banner description",
        img: "path/to/image.jpg",
        variant: BannerVariant.NORMAL,
        color: BannerColor.NORMAL,
        link: "/products",
    }

    test("renders with default props", () => {
        const { getByText, getByAltText } = render(<Banner {...defaultProps} />)
        expect(getByText("Banner Title")).toBeInTheDocument()
        expect(getByText("Banner description")).toBeInTheDocument()
        expect(getByAltText("")).toBeInTheDocument()
    })

    test("renders with main variant and filled button", () => {
        const { getByText } = render(<Banner {...defaultProps} variant={BannerVariant.MAIN} />)
        expect(getByText("view")).toBeInTheDocument()
    })

    test("renders with top variant and clear button", () => {
        const { getByText } = render(<Banner {...defaultProps} variant={BannerVariant.TOP} />)
        expect(getByText("viewProducts")).toBeInTheDocument()
    })
})
