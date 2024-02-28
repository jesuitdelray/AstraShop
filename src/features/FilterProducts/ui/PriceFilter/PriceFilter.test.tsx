import { render, fireEvent } from "@testing-library/react"
import { PriceFilter, PriceFilterProps } from "./PriceFilter"
import { Provider } from "react-redux"
import { createStore, AnyAction, Store } from "redux"

jest.mock("react-redux", () => {
    const ActualReactRedux = jest.requireActual("react-redux")
    return {
        ...ActualReactRedux,
        useDispatch: jest.fn(() => jest.fn()),
        useSelector: jest.fn(),
        Provider: ActualReactRedux.Provider,
    }
})

const rootReducer = (state: RootState = initialState, action: AnyAction): RootState => {
    return state
}

interface RootState {}

const initialState: RootState = {}

const store: Store<RootState, AnyAction> = createStore(rootReducer)

describe("PriceFilter Component Tests", () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it("renders without crashing and allows user input", () => {
        const onChangeFiltersMock = jest.fn()

        const props: PriceFilterProps = {
            title: "Price Range",
            range: { from: 0, to: 100 },
            onChangeFilters: onChangeFiltersMock,
        }

        const { getByTestId } = render(
            <Provider store={store}>
                <PriceFilter {...props} />
            </Provider>
        )

        const minInput: HTMLInputElement = getByTestId("minInput") as HTMLInputElement
        const maxInput: HTMLInputElement = getByTestId("maxInput") as HTMLInputElement

        fireEvent.change(minInput, { target: { value: "20" } })
        fireEvent.change(maxInput, { target: { value: "80" } })

        expect(minInput.value).toBe("20")
        expect(maxInput.value).toBe("80")
    })
})
