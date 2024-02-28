import { render, fireEvent } from "@testing-library/react"
import { SortModalSlider } from "./SortModalSlider"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"

const initialState = {
    modal: {
        current: null,
    },
}

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
