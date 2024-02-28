import { render, fireEvent } from "@testing-library/react"
import { ToggleBasketIcon } from "./ToggleBasketIcon"

describe("ToggleBasketIcon", () => {
    it("renders without crashing", () => {
        const onClick = jest.fn()
        render(<ToggleBasketIcon onClick={onClick} isFilled={false} />)
    })

    it("calls onClick when clicked", () => {
        const onClick = jest.fn()
        const { container } = render(<ToggleBasketIcon onClick={onClick} isFilled={false} />)
        fireEvent.click(container!.firstChild as HTMLElement)
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("applies className correctly", () => {
        const { container } = render(
            <ToggleBasketIcon onClick={() => {}} isFilled={false} className="custom-class" />
        )
        expect(container!.firstChild).toHaveClass("custom-class")
    })
})
