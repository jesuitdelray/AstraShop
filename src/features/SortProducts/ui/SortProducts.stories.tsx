import { Provider } from "react-redux"
import { createStore, combineReducers, AnyAction, Reducer } from "redux"
import { Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { SortProducts, SortProductsProps } from "./SortProducts"
import { sortProductsReducer } from "../model/slice/sortProductsSlice"

const rootReducer = combineReducers({
    sortProducts: sortProductsReducer as Reducer<any, AnyAction>,
})

const mockStore = createStore(rootReducer)

export default {
    title: "Features/SortProducts",
    component: SortProducts,
    decorators: [
        (Story: Story) => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
}

const Template: Story<SortProductsProps> = args => <SortProducts {...args} />

export const Default = Template.bind({})
Default.args = {
    onChangeSort: action("onChangeSort"),
}
