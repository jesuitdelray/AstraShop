import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { NavigationList, NavigationListVariant, NavigationListColor } from "./NavigationList"
import { desktopItemsList, mobileItemsList } from "../model/list"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "/mockedPath",
    }),
}))

jest.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: any) => key,
    }),
}))

describe("NavigationList", () => {
    it("renders desktop variant correctly", () => {
        render(
            <BrowserRouter>
                <NavigationList variant={NavigationListVariant.DESKTOP} />
            </BrowserRouter>
        )

        desktopItemsList.forEach(item => {
            expect(screen.getByText(item.text)).toBeInTheDocument()
        })
    })

    it("renders mobile variant correctly", () => {
        render(
            <BrowserRouter>
                <NavigationList variant={NavigationListVariant.MOBILE} />
            </BrowserRouter>
        )

        mobileItemsList.forEach(item => {
            expect(screen.getByText(item.text)).toBeInTheDocument()
        })
    })

    it("applies inverted color correctly", () => {
        render(
            <BrowserRouter>
                <NavigationList
                    variant={NavigationListVariant.DESKTOP}
                    color={NavigationListColor.INVERTED}
                />
            </BrowserRouter>
        )

        expect(screen.getByText(desktopItemsList[0].text).closest("div")).toHaveClass("list")
    })

    it("calls onLinkClick when a link is clicked", () => {
        const onLinkClickMock = jest.fn()
        render(
            <BrowserRouter>
                <NavigationList
                    variant={NavigationListVariant.DESKTOP}
                    onLinkClick={onLinkClickMock}
                />
            </BrowserRouter>
        )

        fireEvent.click(screen.getByText(desktopItemsList[0].text))
        expect(onLinkClickMock).toHaveBeenCalledTimes(1)
    })
})
