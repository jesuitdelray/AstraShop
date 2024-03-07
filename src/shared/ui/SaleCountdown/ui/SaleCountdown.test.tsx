import { render } from "@testing-library/react"
import { SaleCountdown } from "./SaleCountdown"
import { useCountdown } from "../lib/useCountdown/useCountdown"

jest.mock("../lib/useCountdown/useCountdown")

describe("SaleCountdown", () => {
    it("renders the countdown correctly", () => {
        (useCountdown as jest.Mock).mockReturnValue({ hours: "01", minutes: "30", seconds: "15" })
        const { getByText } = render(<SaleCountdown />)
        expect(getByText("01:30:15")).toBeInTheDocument()
    })
})
