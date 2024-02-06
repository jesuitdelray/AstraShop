import React from "react"
import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { filterProductsReducer } from "features/FilterProducts/model/slice/filterProductsSlice"
import { PriceFilter, PriceFilterProps } from "./PriceFilter"

export default {
    title: "Features/PriceFilter",
    component: PriceFilter,
    decorators: [Story => <Provider store={store}>{<Story />}</Provider>],
} as Meta

const store = configureStore({
    reducer: {
        filterProducts: filterProductsReducer,
    },
})

const Template: Story<PriceFilterProps> = args => <PriceFilter {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "Price Range",
    range: {
        from: 0,
        to: 1000,
    },
    onChangeFilters: () => console.log("Filters changed"),
}
