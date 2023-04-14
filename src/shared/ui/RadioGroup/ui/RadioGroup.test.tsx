import { render, screen } from "@testing-library/react"
import { useState } from "react"
import userEvent from "@testing-library/user-event"
import { RadioGroup } from "./RadioGroup"

describe("RadioGroup test", () => {
    const options = [
        { label: "Почта", value: "option1", id: "1" },
        { label: "Интайм", value: "option2", id: "2" },
        { label: "Автолюкс", value: "option3", id: "3" },
    ]

    test("RadioGroup render", () => {
        render(
            <RadioGroup
                title="RadioGroup test"
                options={options}
                activeInput="option1"
                onChange={jest.fn()}
            />
        )
        expect(screen.getByText("RadioGroup test")).toBeInTheDocument()
        expect(screen.getByLabelText("Почта")).toBeChecked()
        expect(screen.getByLabelText("Почта")).toBeInTheDocument()
        expect(screen.getByLabelText("Интайм")).toBeInTheDocument()
        expect(screen.getByLabelText("Автолюкс")).toBeInTheDocument()
    })

    test("RadioGroup isRequired", () => {
        render(
            <RadioGroup
                title="RadioGroup test"
                options={options}
                activeInput="option1"
                onChange={jest.fn()}
                isRequired
            />
        )
        expect(screen.getByText("RadioGroup test")).toContainHTML("*")
    })

    test("RadioGroup custom className", () => {
        render(
            <RadioGroup
                title="RadioGroup test"
                options={options}
                activeInput="option1"
                onChange={jest.fn()}
                className="testClassName"
                isRequired
            />
        )
        expect(screen.getByTestId("radioGroupContainer")).toHaveClass("testClassName")
    })

    test("RadioGroup checked/unchecked", () => {
        function RadioGroupTest() {
            const [active, setActive] = useState("option1")
            const changeHandler = (value: string) => setActive(value)

            return (
                <RadioGroup
                    title="RadioGroup test"
                    options={options}
                    activeInput={active}
                    onChange={changeHandler}
                />
            )
        }
        render(<RadioGroupTest />)
        expect(screen.getByLabelText("Почта")).toBeChecked()
        expect(screen.getByLabelText("Интайм")).not.toBeChecked()
        expect(screen.getByLabelText("Автолюкс")).not.toBeChecked()
        userEvent.click(screen.getByLabelText("Интайм"))
        expect(screen.getByLabelText("Почта")).not.toBeChecked()
        expect(screen.getByLabelText("Интайм")).toBeChecked()
        expect(screen.getByLabelText("Автолюкс")).not.toBeChecked()
        userEvent.click(screen.getByLabelText("Автолюкс"))
        expect(screen.getByLabelText("Почта")).not.toBeChecked()
        expect(screen.getByLabelText("Интайм")).not.toBeChecked()
        expect(screen.getByLabelText("Автолюкс")).toBeChecked()
    })
})
