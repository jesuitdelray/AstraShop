import { render, screen } from "@testing-library/react"
import { ProductsSwiper, IProductSwiperVariant } from "./ProductsSwiper"

describe("ProductsSwiper Component", () => {
    test("renders correctly in loading state with skeleton slides", () => {
        render(
            <ProductsSwiper
                isLoading={false}
                variant={IProductSwiperVariant.WITH_BANNER}
                slidesPerView={4}
                isWithPagination={true}
            >
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
                <div>Slide 4</div>
                <div>Slide 5</div>
            </ProductsSwiper>
        )

        const skeletonSlides = screen.getAllByTestId("product-card-skeleton")
        expect(skeletonSlides.length).toBe(8)
    })

    test("renders correctly with children slides", () => {
        render(
            <ProductsSwiper
                isLoading={false}
                variant={IProductSwiperVariant.WITH_BANNER}
                slidesPerView={4}
                isWithPagination={true}
            >
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
                <div>Slide 4</div>
                <div>Slide 5</div>
            </ProductsSwiper>
        )

        const childSlides = screen.getAllByTestId("swiper-slide")
        expect(childSlides.length).toBe(5)
    })
})
