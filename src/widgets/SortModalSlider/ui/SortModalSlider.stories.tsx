import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { Story, Meta } from "@storybook/react"
import { SortModalSlider, SortModalSliderProps } from "./SortModalSlider"
import { ModalsList, modalsReducer } from "entities/ModalSlider"
import { sortProductsOrderType, sortProductsReducer } from "features/SortProducts"

const initialState = {
    modals: {
        current: ModalsList.SORT,
    },
    sortProducts: {
        order: sortProductsOrderType.ASC,
    },
}

const mockStore = createStore(
    combineReducers({
        modals: modalsReducer,
        sortProducts: sortProductsReducer,
    }),
    initialState
)

export default {
    title: "Widgets/SortModalSlider",
    component: SortModalSlider,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story<SortModalSliderProps> = args => <SortModalSlider {...args} />

export const Default = Template.bind({})
Default.args = {
    onChangeSort: () => console.log("Sort changed"),
}
