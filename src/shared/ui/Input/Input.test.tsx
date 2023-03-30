import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { Input, InputType, InputProps } from "./Input"

describe("Input", () => {
    test("Text input render", () => {
        function Wrapper() {
            const [value, setValue] = useState("")

            return (
                <Input
                    id="test"
                    label="Name"
                    value={value}
                    placeholder="Enter text"
                    onChange={value => setValue(value)}
                    error="Enter correct text"
                    isRequired
                />
            )
        }

        render(<Wrapper />)
        expect(screen.getByTestId("InputContainer")).toHaveClass("incorrect")
        expect(screen.getByTestId("InputLabel")).toBeInTheDocument()
        expect(screen.getByTestId("InputLabel")).toContainHTML("*")
        expect(screen.getByTestId("Input")).toBeInTheDocument()
        expect(screen.getByTestId("Input")).toHaveAttribute("value", "")
        expect(screen.getByTestId("Input")).toHaveAttribute("type", InputType.TEXT)
        expect(screen.getByText("Enter correct text")).toBeInTheDocument()

        userEvent.type(screen.getByTestId("Input"), "a")
        expect(screen.getByTestId("Input")).toHaveAttribute("value", "a")
        screen.debug()
    })
})
