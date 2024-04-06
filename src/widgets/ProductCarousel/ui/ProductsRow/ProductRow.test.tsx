import { createStore, Reducer } from "redux"

const mockTopProducts = [
    { id: 1, name: "Product 1", price: 10, images: [], is_new: true },
    { id: 2, name: "Product 2", price: 20, images: [], is_new: false },
]

interface RootState {
    topProducts: {
        id: number
        name: string
        price: number
        images: never[]
        is_new: boolean
    }[]
    newProducts: {
        id: number
        name: string
        price: number
        images: never[]
        is_new: boolean
    }[]
}

interface Action {
    type: string
    payload?: any
}

const rootReducer: Reducer<RootState, Action> = (
    // eslint-disable-next-line default-param-last
    state = { topProducts: [], newProducts: [] },
    action
) => {
    switch (action.type) {
        case "FETCH_TOP_PRODUCTS_SUCCESS":
            return { ...state, topProducts: mockTopProducts }
        default:
            return state
    }
}

const store = createStore(rootReducer)
