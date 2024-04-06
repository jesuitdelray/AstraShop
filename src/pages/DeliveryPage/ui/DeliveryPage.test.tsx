import React from "react"
import { render } from "@testing-library/react"
import { DeliveryPage } from "./DeliveryPage"

describe("DeliveryPage component", () => {
    test("renders DeliveryPage component with all child components", () => {
        const { getByText, getByTestId } = render(<DeliveryPage />)

        expect(getByText("Shipping and Payment")).toBeInTheDocument()
        expect(getByText("Delivery Method")).toBeInTheDocument()
        expect(getByText("Return and Exchange of Products")).toBeInTheDocument()

        expect(getByTestId("nova-pochta-icon")).toBeInTheDocument()
        expect(getByTestId("intime-icon")).toBeInTheDocument()
        expect(getByTestId("autolux-icon")).toBeInTheDocument()

        expect(getByText("Return Info Details")).toBeInTheDocument()
        expect(getByText("Return Info Shipping")).toBeInTheDocument()
        expect(getByText("Return Info Obligations")).toBeInTheDocument()

        expect(getByTestId("products-row")).toBeInTheDocument()
        expect(getByTestId("banners-row")).toBeInTheDocument()
    })
})
