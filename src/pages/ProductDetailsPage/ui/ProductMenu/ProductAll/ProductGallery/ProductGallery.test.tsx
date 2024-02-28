import { render, fireEvent, RenderResult } from "@testing-library/react"
import { useSelector } from "react-redux"
import { ProductGallery } from "./ProductGallery"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}))

describe("ProductGallery component", () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it("changes current image when clicking on small image", () => {
        const productImages: string[] = ["image1.jpg", "image2.jpg", "image3.jpg"]

        ;(useSelector as jest.Mock).mockReturnValue(productImages)

        const { getByTestId }: RenderResult = render(<ProductGallery />)

        fireEvent.click(getByTestId("smallImage-1"))

        expect(getByTestId("bigImage-1")).toBeInTheDocument()
    })
})
