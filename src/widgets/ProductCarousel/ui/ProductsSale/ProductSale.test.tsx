import { render } from "@testing-library/react"
import { ProductsSale } from "./ProductsSale"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

jest.mock("../../model/selectors/productCarouselSelector", () => ({
    getProductCarouselTopProducts: jest.fn(),
}))

jest.mock("../../model/services/fetchTopProducts/fetchTopProducts", () => ({
    fetchTopProducts: jest.fn(),
}))

describe("ProductsSale component", () => {
    it("renders without crashing", () => {
        const { container } = render(<ProductsSale />)
        expect(container).toBeInTheDocument()
    })
})
