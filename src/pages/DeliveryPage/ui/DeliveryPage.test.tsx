import { render, screen } from "@testing-library/react"
import { DeliveryPage } from "./DeliveryPage"

describe("DeliveryPage Component", () => {
    it("renders correctly", () => {
        render(<DeliveryPage />)

        expect(screen.getByText("Shipping and Payment")).toBeInTheDocument()
        expect(screen.getByText("Delivery Method")).toBeInTheDocument()
        expect(screen.getByAltText("Nova Pochta Icon")).toBeInTheDocument()
        expect(screen.getByAltText("Intime Icon")).toBeInTheDocument()
        expect(screen.getByAltText("Autolux Icon")).toBeInTheDocument()
        expect(screen.getByText("Return and Exchange of Products")).toBeInTheDocument()
        expect(screen.getByText("ReturnInfoDetails")).toBeInTheDocument()
        expect(screen.getByText("ReturnInfoShipping")).toBeInTheDocument()
        expect(screen.getByText("ReturnInfoObligations")).toBeInTheDocument()
    })
})
