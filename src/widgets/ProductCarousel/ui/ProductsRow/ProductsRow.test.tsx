import { render } from "@testing-library/react"
import { ProductsRow, ProducstRowVariant, IProductsRowProps } from "./ProductsRow"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

jest.mock("../../model/services/fetchTopProducts/fetchTopProducts", () => ({
    fetchTopProducts: jest.fn(),
}))

jest.mock("../../model/services/fetchNewProducts/fetchNewProducts", () => ({
    fetchNewProducts: jest.fn(),
}))

describe("ProductsRow component", () => {
    const defaultProps: IProductsRowProps = {
        variant: ProducstRowVariant.TOP_PRODUCTS,
    }

    it("renders without crashing", () => {
        const { container } = render(<ProductsRow {...defaultProps} />)
        expect(container).toBeInTheDocument()
    })

    it("renders title correctly for top products", () => {
        const { getByText } = render(<ProductsRow {...defaultProps} />)
        expect(getByText("productsTopProducts")).toBeInTheDocument()
    })

    it("renders title correctly for new products", () => {
        const { getByText } = render(<ProductsRow variant={ProducstRowVariant.NEW_PRODUCTS} />)
        expect(getByText("productsNewProducts")).toBeInTheDocument()
    })

    it("renders product cards correctly", () => {
        const mockProducts = [
            {
                id: 1,
                name: "Product 1",
                price: 10,
                images: ["image1.jpg"],
                is_new: false,
            },
            {
                id: 2,
                name: "Product 2",
                price: 20,
                images: ["image2.jpg"],
                is_new: true,
            },
        ]
        const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector")
        useSelectorMock.mockReturnValue(mockProducts)

        const { getByText } = render(<ProductsRow {...defaultProps} />)
        expect(getByText("Product 1")).toBeInTheDocument()
        expect(getByText("Product 2")).toBeInTheDocument()
    })
})
