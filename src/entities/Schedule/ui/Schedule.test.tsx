import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Schedule } from "./Schedule"

describe("Schedule", () => {
    it("renders without crashing", () => {
        render(<Schedule />)
        expect(screen.getByText("scheduleTitle")).toBeInTheDocument()
    })

    it("displays schedule for Monday to Friday", () => {
        render(<Schedule />)
        expect(screen.getByText("scheduleMondayFriday")).toBeInTheDocument()
    })

    it("displays schedule for Saturday", () => {
        render(<Schedule />)
        expect(screen.getByText("scheduleSaturday")).toBeInTheDocument()
    })

    it("displays schedule for Weekend", () => {
        render(<Schedule />)
        expect(screen.getByText("scheduleWeekend")).toBeInTheDocument()
    })
})
