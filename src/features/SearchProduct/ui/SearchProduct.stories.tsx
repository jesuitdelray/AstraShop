// Предположим, что у вас есть такой базовый файл для истории Storybook
import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { SearchProduct } from "./SearchProduct"

const mockReducer = combineReducers({
    someReducer: (state = {}, action) => state,
    anotherReducer: (state = {}, action) => state,
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
