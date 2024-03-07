import { render, fireEvent } from "@testing-library/react"
import { useDispatch } from "react-redux"
import { MobileFilterControllers } from "./MobileFilterControllers"

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}))

describe("MobileFilterControllers", () => {
    it("dispatches openFilters action when filter button is clicked", () => {
        const mockDispatch = jest.fn();
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch)

        const { getByTestId } = render(<MobileFilterControllers />)
        fireEvent.click(getByTestId("filter"))

        expect(mockDispatch).toHaveBeenCalled()
    })
})
