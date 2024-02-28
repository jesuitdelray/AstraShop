import React from "react"
import { render } from "@testing-library/react"
import { BannerWithProductsRow } from "./BannerWithProductsRow"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}))

jest.mock("../../model/services/fetchTopProducts/fetchTopProducts", () => ({
    fetchTopProducts: jest.fn(),
}))

describe("BannerWithProductsRow component", () => {
    it("renders without crashing", () => {
        render(<BannerWithProductsRow id={1} />)
    })

    it("renders title correctly", () => {
        const { getByText } = render(<BannerWithProductsRow id={1} />)
        expect(getByText("Category Products")).toBeInTheDocument()
    })

    it("renders product cards correctly", () => {
        const mockProducts = [
            {
                id: 1,
                name: "Product 1",
                price: 10,
                images: ["image1.jpg"],
                is_new: false,
            },
            {
                id: 2,
                name: "Product 2",
                price: 20,
                images: ["image2.jpg"],
                is_new: true,
            },
        ]
        jest.spyOn(React, "useEffect").mockImplementationOnce(f => f())
        jest.spyOn(React, "useState").mockReturnValueOnce([false, jest.fn()])
        jest.spyOn(React, "useEffect").mockImplementationOnce(f => f())
        jest.spyOn(React, "useState").mockReturnValueOnce([mockProducts, jest.fn()])

        const { getByText } = render(<BannerWithProductsRow id={1} />)

        expect(getByText("Product 1")).toBeInTheDocument()
        expect(getByText("Product 2")).toBeInTheDocument()
    })
})
