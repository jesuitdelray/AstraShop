import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { filterProductsReducer } from "features/FilterProducts/model/slice/filterProductsSlice"
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup"

export default {
    title: "Features/CheckboxGroup",
    component: CheckboxGroup,
    decorators: [Story => <Provider store={store}>{<Story />}</Provider>],
} as Meta

const store = configureStore({
    reducer: {
        filterProducts: filterProductsReducer,
    },
    preloadedState: {
        filterProducts: {
            filters: [],
            priceRange: { min: 0, max: 0 },
            attributes: [1],
            isLoading: false,
        },
    },
})

const Template: Story<CheckboxGroupProps> = args => <CheckboxGroup {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "Example Title",
    list: [
        { id: 1, name: "Attribute 1" },
        { id: 2, name: "Attribute 2" },
        { id: 3, name: "Attribute 3" },
    ],
    onChangeFilters: () => console.log("Filters changed"),
}
