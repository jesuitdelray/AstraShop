import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { configureStore } from "@reduxjs/toolkit"
import { HeaderRight } from "./HeaderRight"

describe("HeaderRight Component", () => {
    it("renders without crashing", () => {
        const initialState = {
            modals: {
                current: "BURGER",
            },
            basket: {
                products: [],
            },
        }

        const store = configureStore({
            reducer: {
                modals: () => initialState.modals,
                basket: () => initialState.basket,
            },
        })

        render(
            <Provider store={store}>
                <HeaderRight isMainPage={false} />
            </Provider>
        )
    })

    it("renders correctly when on main page", () => {
        const initialState = {
            modals: {
                current: "BURGER",
            },
            basket: {
                products: [],
            },
        }

        const store = configureStore({
            reducer: {
                modals: () => initialState.modals,
                basket: () => initialState.basket,
            },
        })

        const { container } = render(
            <Provider store={store}>
                <HeaderRight isMainPage={!true} />
            </Provider>
        )

        expect(container.firstChild).toHaveClass("main-page")
    })
})
