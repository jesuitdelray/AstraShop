import {render, screen} from "@testing-library/react"
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";

describe("Button test", () => {
    test("Test render", () => {
        render(<Button>Submit</Button>)
        expect(screen.getByText("Submit")).toBeInTheDocument()
    })

    test("Test fullfilled red theme", () => {
        render(<Button theme={ButtonTheme.FULLFILLED_RED}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("fullfilled-red")
        screen.debug()
    })

    test("Test fullfilled grey theme", () => {
        render(<Button theme={ButtonTheme.FULLFILLED_GREY}>Submit</Button>)
        expect(screen.getByText("Submit")).toHaveClass("fullfilled-grey")
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

