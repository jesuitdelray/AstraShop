import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { RadioButton } from "./RadioButton"

describe("RadioButton test", () => {
    test("RadioButton render", () => {
        render(<RadioButton id="test" />)
        expect(screen.getByTestId("radioBtn")).toBeInTheDocument()
        expect(screen.getByTestId("radioBtn")).toHaveAttribute("value", "")
        expect(screen.getByTestId("radioBtn")).not.toBeChecked()
        expect(screen.queryByTestId("radioBtnLabel")).not.toBeInTheDocument()
    })

    test("RadioButton only type='radio'", () => {
        render(<RadioButton label="Test" id="test" type="text" />)
        expect(screen.getByTestId("radioBtn")).toHaveAttribute("type", "radio")
    })

    test("RadioButton with label", () => {
        render(<RadioButton label="Test" id="test" />)
        expect(screen.getByLabelText("Test")).toBeInTheDocument()
    })

    test("RadioButton with value", () => {
        render(<RadioButton id="test" value="test-value" />)
        expect(screen.getByTestId("radioBtn")).toHaveAttribute("value", "test-value")
    })

    test("RadioButton with custom className", () => {
        render(<RadioButton id="test" className="classNameTest" />)
        expect(screen.getByTestId("radioBtnContainer")).toHaveClass("classNameTest")
    })

    test("RadioButton onChange test", () => {
        const onChangeMock = jest.fn()
        render(<RadioButton id="test" onChange={onChangeMock} />)
        userEvent.click(screen.getByTestId("radioBtn"))
        expect(onChangeMock).toHaveBeenCalled()
    })

    test("RadioButton checked/unchecked", () => {
        render(<RadioButton id="test" onChange={jest.fn()} />)
        expect(screen.getByTestId("radioBtn")).not.toBeChecked()
        userEvent.click(screen.getByTestId("radioBtn"))
        expect(screen.getByTestId("radioBtn")).toBeChecked()
    })
})
