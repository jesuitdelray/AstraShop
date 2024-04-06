import { render } from "@testing-library/react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { ModalsList } from "entities/ModalSlider"
import { ErrorOrderModal } from "./ErrorOrderModal"

function mockReducer(state = { modals: { current: ModalsList.ORDER_ERROR } }) {
    return state
}

const store = createStore(mockReducer)

describe("ErrorOrderModal", () => {
    it("should render without crashing", () => {
        const { getByText } = render(
            <Provider store={store}>
                <ErrorOrderModal />
            </Provider>
        )
        expect(getByText("emptyBasket")).toBeInTheDocument()
        expect(getByText("returnBtn")).toBeInTheDocument()
    })
})
