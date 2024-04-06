import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, Reducer, AnyAction } from "redux"
import { BannerWithProductsRow } from "./BannerWithProductsRow"

const mockTopProducts = [
    { id: 1, name: "Product 1", price: 10, images: [], is_new: true },
    { id: 2, name: "Product 2", price: 20, images: [], is_new: false },
]

interface TopProductsState {
    topProducts: {
        id: number
        name: string
        price: number
        images: never[]
        is_new: boolean
    }[]
}

const initialState: TopProductsState = {
    topProducts: [],
}

type TopProductsReducer = Reducer<TopProductsState, AnyAction>

// eslint-disable-next-line default-param-last
const rootReducer: TopProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TOP_PRODUCTS_SUCCESS":
            return { ...state, topProducts: mockTopProducts }
        default:
            return state
    }
}

describe("BannerWithProductsRow Component", () => {
    it("renders without crashing", () => {
        const store = createStore(rootReducer)

        const { getByText } = render(
            <Provider store={store}>
                <BannerWithProductsRow id={1} />
            </Provider>
        )

        expect(getByText("Category Products")).toBeInTheDocument()
        expect(getByText("Product 1")).toBeInTheDocument()
        expect(getByText("Product 2")).toBeInTheDocument()
    })
})
