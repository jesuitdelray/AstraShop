import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { SearchProduct } from "./SearchProduct"

const mockReducer = combineReducers({
    someReducer: (state = {}) => state,
    anotherReducer: (state = {}) => state,
})

const mockStore = createStore(mockReducer, {})

export default {
    title: "Features/SearchProduct",
    component: SearchProduct,
    decorators: [
        (Story: any) => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
}

export const Default = () => <SearchProduct />
