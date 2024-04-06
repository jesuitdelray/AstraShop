import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { BurgerMenu } from "./BurgerMenu"

describe("BurgerMenu Component", () => {
    // eslint-disable-next-line default-param-last
    function rootReducer(state = { modals: { current: "" } }, action: any) {
        switch (action.type) {
            case "OPEN_BURGER_MODAL":
                return { modals: { current: "BURGER" } }
            case "CLOSE_BURGER_MODAL":
                return { modals: { current: "" } }
            default:
                return state
        }
    }

    test("renders without crashing", () => {
        const store = createStore(rootReducer)
        const { getByText } = render(
            <Provider store={store}>
                <BurgerMenu />
            </Provider>
        )
        expect(getByText("Your Logo")).toBeInTheDocument()
    })

    test("clicking on logo should close the menu", () => {
        const store = createStore(rootReducer)
        const { getByAltText } = render(
            <Provider store={store}>
                <BurgerMenu />
            </Provider>
        )

        expect(store.getState().modals.current).toBe("")

        fireEvent.click(getByAltText("Your Logo"))

        expect(store.getState().modals.current).toBe("BURGER")
    })
})
