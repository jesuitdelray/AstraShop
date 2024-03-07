import { render } from "@testing-library/react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { HeaderLeft } from "./HeaderLeft"

describe("HeaderLeft component", () => {
    const initialState = { currentModal: null }

    // eslint-disable-next-line default-param-last
    function reducer(state = initialState, action: any) {
        switch (action.type) {
            case "MODALS/SET_CURRENT":
                return { ...state, currentModal: action.payload }
            default:
                return state
        }
    }

    test("renders correctly with default props", () => {
        const store = createStore(reducer)

        const { container } = render(
            <Provider store={store}>
                <HeaderLeft />
            </Provider>
        )
        expect(container).toMatchSnapshot()
    })

    test("renders correctly with isMainPage prop", () => {
        const store = createStore(reducer)

        const { container } = render(
            <Provider store={store}>
                <HeaderLeft isMainPage={true || false} />
            </Provider>
        )
        expect(container).toMatchSnapshot()
    })
})
