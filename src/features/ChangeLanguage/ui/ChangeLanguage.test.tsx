import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { ChangeLanguage } from "./ChangeLanguage"

jest.mock("shared/config/i18n/i18n", () => ({
    changeLanguage: jest.fn(),
}))

// eslint-disable-next-line default-param-last
const mockLanguageReducer = (state = "en", action: any) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return action.payload
        default:
            return state
    }
}

const mockRootReducer = combineReducers({
    language: mockLanguageReducer,
})

const mockStore = createStore(mockRootReducer)

describe("ChangeLanguage Component", () => {
    it("render component", () => {
        render(
            <Provider store={mockStore}>
                <ChangeLanguage />
            </Provider>
        )
        screen.debug()

        const wrapper = screen.getByTestId("wrapper")

        expect(wrapper).toBeInTheDocument()
    })
})
