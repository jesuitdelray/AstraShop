import { render, fireEvent } from "@testing-library/react"
import { ProductMenu } from "./ProductMenu"

test("renders ProductMenu component", () => {
    const { getByText } = render(<ProductMenu />)

    const navigationElement = getByText("Navigation Item")
    expect(navigationElement).toBeInTheDocument()
})

test("changes current item when clicked", () => {
    const { getByText } = render(<ProductMenu />)

    const firstNavItem = getByText("First Navigation Item")
    const secondNavItem = getByText("Second Navigation Item")
    fireEvent.click(secondNavItem)
    expect(firstNavItem).not.toHaveClass("navActive")
    expect(secondNavItem).toHaveClass("navActive")
})
