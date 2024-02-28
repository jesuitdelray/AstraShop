import { render, RenderResult } from "@testing-library/react"
import { Provider, RootStateOrAny, useSelector } from "react-redux"
import { createStore, Store } from "redux"
import { SuccessOrderModal } from "./SuccessOrderModal"
import { ModalsList } from "entities/ModalSlider"

const initialState: RootStateOrAny = {
    modals: {
        currentModal: "SUCCESS",
    },
}

const mockStore = createStore((state: RootStateOrAny = initialState): RootStateOrAny => {
    return state
})

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

describe("SuccessOrderModal", () => {
    let component: RenderResult

    beforeEach(() => {
        ;(useSelector as jest.Mock).mockReturnValue(ModalsList.SUCCESS)
        component = render(
            <Provider store={mockStore as Store}>
                <SuccessOrderModal />
            </Provider>
        )
    })

    test("renders without crashing", () => {
        const { getByTestId } = component
        expect(getByTestId("overlay")).toBeInTheDocument()
    })
})
