import { useState } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "./Checkbox"

describe("Checkbox test", () => {
    function CheckboxTest() {
        const [checked, setChecked] = useState(false)
        const handleChange = () => setChecked(prev => !prev)

        return (
            <Checkbox
                label="Test checkbox"
                checked={checked}
                id="test"
                onChange={handleChange}
                className="test"
                error="error test"
            />
        )
    }

    test("Checkbox render", () => {
        render(<CheckboxTest />)
        const input = screen.getByTestId("checkbox")

        expect(input).toBeInTheDocument()
        expect(screen.getByTestId("label")).toBeInTheDocument()
        expect(input).not.toBeChecked()
        expect(input).not.toHaveClass("checked")
    })

    test("Checkbox with custom class", () => {
        render(<CheckboxTest />)
        const input = screen.getByTestId("checkbox")

        expect(screen.getByTestId("checkboxLabel")).toHaveClass("test")
    })

    test("Checkbox checked", () => {
        render(<CheckboxTest />)
        const input = screen.getByTestId("checkbox")

        expect(input).not.toBeChecked()
        userEvent.click(input)
        expect(input).toBeChecked()
        expect(screen.getByTestId("checkboxLabel")).toHaveClass("checked")
        userEvent.click(input)
        expect(input).not.toBeChecked()
        expect(screen.getByTestId("checkboxLabel")).not.toHaveClass("checked")
    })

    test("Checkbox checked with error", () => {
        render(<CheckboxTest />)
        const error = screen.getByTestId("error")

        expect(error).toBeInTheDocument()
        expect(error).toHaveClass("error")
        expect(error).toHaveTextContent("error test")
    })

    test("Checkbox checked without error", () => {
        render(
            <Checkbox
                label="Test checkbox"
                checked={!true}
                id="test"
                onChange={() => {}}
                className="test"
                error=""
            />
        )

        const error = screen.queryByTestId("error")

        expect(screen.getByTestId("checkboxLabel")).toBeInTheDocument()
        expect(error).not.toBeInTheDocument()
        expect(error).toBeFalsy()
    })
})
