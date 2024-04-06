import { render, fireEvent } from "@testing-library/react"
import { CompareProducts } from "./CompareProducts"

describe("CompareProducts", () => {
    it("should render without crashing", () => {
        render(<CompareProducts />)
    })

    it("should toggle isActive state on click", () => {
        const { getByTestId } = render(<CompareProducts />)
        const scaleIcon = getByTestId("scale-icon")

        fireEvent.click(scaleIcon)
        expect(scaleIcon).toHaveClass("active")

        fireEvent.click(scaleIcon)
        expect(scaleIcon).not.toHaveClass("active")
    })
})
