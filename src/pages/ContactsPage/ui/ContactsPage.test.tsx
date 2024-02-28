import { render, screen } from "@testing-library/react"
import { ContactsPage } from "./ContactsPage"

test("renders ContactsPage with all components", () => {
    jest.mock("swiper/react", () => ({
        Swiper: ({ children }) => <div data-testid="Swiper-testId">{children}</div>,
        SwiperSlide: ({ children }) => <div data-testid="SwiperSlide-testId">{children}</div>,
    }))

    render(<ContactsPage />)

    expect(screen.getByText("Contacts")).toBeInTheDocument()
    expect(screen.getByTestId("schedule")).toBeInTheDocument()
    expect(screen.getByTestId("contacts")).toBeInTheDocument()
    expect(screen.getByTestId("top-products")).toBeInTheDocument()
    expect(screen.getByTestId("banners")).toBeInTheDocument()
})
