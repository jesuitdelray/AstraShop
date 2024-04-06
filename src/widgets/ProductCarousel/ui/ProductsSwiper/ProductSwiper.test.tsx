import React from "react"
import { render, screen } from "@testing-library/react"
import { ProductsSwiper, IProductSwiperVariant } from "./ProductsSwiper"

describe("ProductsSwiper Component", () => {
    it("renders correctly with loading state", () => {
        render(
            <ProductsSwiper isLoading variant={IProductSwiperVariant.FULL}>
                {null}
            </ProductsSwiper>
        )

        expect(screen.getAllByTestId("product-skeleton")).toHaveLength(8)
    })

    it("renders correctly with children", () => {
        render(
            <ProductsSwiper isLoading={false} variant={IProductSwiperVariant.FULL}>
                <div>Product 1</div>
                <div>Product 2</div>
            </ProductsSwiper>
        )

        expect(screen.getByText("Product 1")).toBeInTheDocument()
        expect(screen.getByText("Product 2")).toBeInTheDocument()
    })
})
