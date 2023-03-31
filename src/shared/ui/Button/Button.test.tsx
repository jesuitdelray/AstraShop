import { render, screen } from "@testing-library/react"
import { Button, ButtonVariant } from "./Button"

describe("Button test", () => {
    test("Test render", () => {
        render(<Button>Submit</Button>)
        expect(screen.getByText("Submit")).toBeInTheDocument()
    })

    test("Test filled red theme", () => {
        render(<Button variant={ButtonVariant.FILLED_RED}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("filled-red")
        screen.debug()
    })

    test("Test filled grey theme", () => {
        render(<Button variant={ButtonVariant.FILLED_GREY}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("filled-grey")
        screen.debug()
    })
})
