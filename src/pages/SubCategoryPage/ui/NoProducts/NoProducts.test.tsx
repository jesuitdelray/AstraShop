import { render, fireEvent } from "@testing-library/react"
import { NoProducts } from "./NoProducts"

describe("NoProducts", () => {
    it("renders title and button correctly", () => {
        const onReturnClick = jest.fn()
        const { getByText } = render(<NoProducts onReturnClick={onReturnClick} />)
        expect(getByText("loadingProcessNoProduct")).toBeInTheDocument()
        expect(getByText("returnBtn")).toBeInTheDocument()
    })

    it("calls onReturnClick when button is clicked", () => {
        const onReturnClick = jest.fn()
        const { getByText } = render(<NoProducts onReturnClick={onReturnClick} />)
        fireEvent.click(getByText("returnBtn"))
        expect(onReturnClick).toHaveBeenCalledTimes(1)
    })
})
