import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { FilterProducts } from "./FilterProducts"

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
}))

describe("FilterProducts", () => {
    test("renders without crashing", () => {
        require("react-redux").useSelector.mockImplementation(() => [])

        render(<FilterProducts onChangeFilters={() => {}} />)

        expect(screen.getByText("apply")).toBeInTheDocument()
    })
})
