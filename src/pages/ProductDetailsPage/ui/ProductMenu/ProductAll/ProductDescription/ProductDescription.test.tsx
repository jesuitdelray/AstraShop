import { render } from "@testing-library/react"
import { useSelector } from "react-redux"
import { StoreProvider } from "app/providers/StoreProvider"
import { ProductDescription } from "./ProductDescription"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}))

jest.mock("../../../../model/selectors/productDetailsSelectors", () => ({
    getProductDetailsDescription: jest.fn(),
    getProductDetailsAttributes: jest.fn(),
}))

describe("ProductDescription component", () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it("renders product description and attributes", () => {
        const productDesc = "Sample description"
        const productAttributes = ["Attribute 1", "Attribute 2"]

        ;(useSelector as jest.Mock).mockReturnValueOnce(productDesc)
        ;(useSelector as jest.Mock).mockReturnValueOnce(productAttributes)

        const { getByText } = render(
            <StoreProvider>
                <ProductDescription />
            </StoreProvider>
        )

        expect(getByText(productDesc)).toBeInTheDocument()
        productAttributes.forEach(attr => {
            expect(getByText(attr)).toBeInTheDocument()
        })
    })
})
