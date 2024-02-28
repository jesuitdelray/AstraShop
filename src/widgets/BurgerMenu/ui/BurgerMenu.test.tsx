import { render, fireEvent, screen } from "@testing-library/react"
import { BurgerMenu } from "./BurgerMenu"
import { ModalsList } from "entities/ModalSlider"
import { RootStateOrAny } from "react-redux"
import { StoreProvider } from "app/providers/StoreProvider"

describe("BurgerMenu", () => {
    let mockDispatch: jest.Mock<any>
    let mockSelector: jest.Mock<RootStateOrAny>

    beforeEach(() => {
        mockDispatch = jest.fn()
        mockSelector = jest.fn()
        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useDispatch: () => mockDispatch,
            useSelector: (selector: (state: RootStateOrAny) => unknown) => selector(mockSelector()),
        }))
    })

    test("renders BurgerMenu component", () => {
        mockSelector.mockReturnValue("BURGER" as ModalsList.BURGER)
        render(
            <StoreProvider>
                <BurgerMenu />
            </StoreProvider>
        )
        expect(screen.getByTestId("burger-menu")).toBeInTheDocument()
    })

    test("clicking on logo triggers onClose function", () => {
        mockSelector.mockReturnValue("BURGER" as ModalsList.BURGER)
        render(
            <StoreProvider>
                <BurgerMenu />
            </StoreProvider>
        )
        fireEvent.click(screen.getByTestId("burger-menu-logo"))
        expect(mockDispatch).toHaveBeenCalled()
    })

    test("clicking on navigation list link triggers onClose function", () => {
        mockSelector.mockReturnValue("BURGER" as ModalsList.BURGER)
        render(
            <StoreProvider>
                <BurgerMenu />
            </StoreProvider>
        )
        fireEvent.click(screen.getByTestId("burger-menu-nav-link"))
        expect(mockDispatch).toHaveBeenCalled()
    })
})
