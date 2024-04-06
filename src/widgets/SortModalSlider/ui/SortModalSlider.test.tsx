import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { SortModalSlider } from "./SortModalSlider"

const initialState = {
    modal: {
        current: null,
    },
}

// eslint-disable-next-line default-param-last
function modalReducer(state = initialState, action: any) {
    switch (action.type) {
        case "MODAL_CLOSE":
            return {
                ...state,
                current: null,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    modal: modalReducer,
})

describe("SortModalSlider component", () => {
    it("renders without crashing", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = render(
            <Provider store={store}>
                <SortModalSlider onChangeSort={() => {}} />
            </Provider>
        )
    })
})
