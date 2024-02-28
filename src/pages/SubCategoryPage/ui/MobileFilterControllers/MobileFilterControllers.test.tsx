import { render, fireEvent } from "@testing-library/react"
import { MobileFilterControllers } from "./MobileFilterControllers"

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}))

describe("MobileFilterControllers", () => {
    it("dispatches openFilters action when filter button is clicked", () => {
        const mockDispatch = jest.fn()
        jest.spyOn(require("react-redux"), "useDispatch").mockReturnValue(mockDispatch)

        const { getByTestId } = render(<MobileFilterControllers />)
        fireEvent.click(getByTestId("filter"))

        expect(mockDispatch).toHaveBeenCalled()
    })
})
