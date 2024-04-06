import { render, RenderResult } from "@testing-library/react"
import { useSelector } from "react-redux"
import { VariantPictures } from "./VariantPictures"

// Mocking useSelector
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}))

describe("VariantPictures component", () => {
    let mockUseSelector: jest.Mock

    beforeEach(() => {
        mockUseSelector = useSelector as jest.Mock
    })

    test("renders VariantPictures component", () => {
        mockUseSelector.mockReturnValueOnce([])
        const { container }: RenderResult = render(<VariantPictures />)
        expect(container.firstChild).toBeInTheDocument()
    })

    test("displays all product images", () => {
        const mockImages: string[] = ["image1.jpg", "image2.jpg", "image3.jpg"]
        mockUseSelector.mockReturnValueOnce(mockImages)

        const { getAllByAltText }: RenderResult = render(<VariantPictures />)
        const imageElements: HTMLElement[] = getAllByAltText("")

        expect(imageElements).toHaveLength(mockImages.length)

        imageElements.forEach((element, index) => {
            expect(element).toHaveAttribute("src", mockImages[index])
        })
    })
})
