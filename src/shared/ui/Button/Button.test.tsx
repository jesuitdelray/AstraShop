import { render, screen } from "@testing-library/react"
import { Button, ButtonSize, ButtonVariant } from "shared/ui/Button/Button"

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

    test("Test small size", () => {
        render(<Button size={ButtonSize.SMALL}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("small")
        screen.debug()
    })

    test("Test large size", () => {
        render(<Button>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("large")
        screen.debug()
    })
})
