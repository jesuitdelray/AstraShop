import { render } from "@testing-library/react"
import { useSelector } from "react-redux"
import { ProductDescription } from "./ProductDescription"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}))

describe("ProductDescription component", () => {
    beforeEach(() => {
        (useSelector as jest.Mock).mockClear()
        jest.clearAllMocks()
    })

    test("renders ProductDescription component", () => {
        (useSelector as jest.Mock).mockReturnValueOnce("Test description");
        (useSelector as jest.Mock).mockReturnValueOnce(["Attribute 1", "Attribute 2"])

        const { getByText } = render(<ProductDescription />)

        expect(getByText("Test description")).toBeInTheDocument()
        expect(getByText("Attribute 1")).toBeInTheDocument()
        expect(getByText("Attribute 2")).toBeInTheDocument()
    })
})
