import { render, fireEvent } from "@testing-library/react"
import { BugButton } from "./BugButton"

describe("BugButton component", () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {})

    afterEach(() => {
        errorSpy.mockClear()
    })

    afterAll(() => {
        errorSpy.mockRestore()
    })

    test("renders BugButton component correctly", () => {
        const { getByText } = render(<BugButton />)
        expect(getByText("Throw Error")).toBeInTheDocument()
    })

    test("clicking the button throws an error", () => {
        const { getByText } = render(<BugButton />)
        fireEvent.click(getByText("Throw Error"))
        expect(errorSpy).toHaveBeenCalled()
    })
})
