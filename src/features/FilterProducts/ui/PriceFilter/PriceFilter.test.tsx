import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { PriceFilter } from "./PriceFilter"
import { StoreProvider } from "app/providers/StoreProvider"

jest.mock("swiper/react", () => ({
    Swiper: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="swiper">{children}</div>
    ),
    SwiperSlide: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="swiper-slide">{children}</div>
    ),
}))

describe("PriceFilter Component Tests", () => {
    it("renders without crashing and allows user input", () => {
        const onChangeFilters = jest.fn()

        const { getByTestId } = render(
            <StoreProvider>
                <PriceFilter
                    title="Price Range"
                    range={{ from: 0, to: 100 }}
                    onChangeFilters={onChangeFilters}
                />
            </StoreProvider>
        )

        const minInput = getByTestId("minInput") as HTMLInputElement
        const maxInput = getByTestId("maxInput") as HTMLInputElement

        fireEvent.change(minInput, { target: { value: "20" } })
        fireEvent.change(maxInput, { target: { value: "80" } })

        expect(minInput.value).toBe("20")
        expect(maxInput.value).toBe("80")
    })
})
