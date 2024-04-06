import { Provider } from "react-redux"
import { Story, Meta } from "@storybook/react"
import { createStore, combineReducers } from "redux"

import { SearchDropdown, SearchDropdownProps } from "./SearchDropdown"

const mockProductsList = [
    { id: "1", name: "Продукт 1" },
    { id: "2", name: "Продукт 2" },
    { id: "3", name: "Продукт 3" },
]

const rootReducer = combineReducers({
    searchProducts: (state = { list: mockProductsList, loading: false, error: null }) => state,
})
const store = createStore(rootReducer)

export default {
    title: "Features/SearchDropdown",
    component: SearchDropdown,
    decorators: [Story => <Story />],
} as Meta

const Template: Story<SearchDropdownProps> = args => (
    <Provider store={store}>
        <SearchDropdown {...args} />
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    setIsDropdownOpen: () => {},
}
