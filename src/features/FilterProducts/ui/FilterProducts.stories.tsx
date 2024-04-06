import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { ModalsList, modalsReducer } from "entities/ModalSlider"
import { configureStore } from "@reduxjs/toolkit"
import { FilterProducts, FilterProductsProps } from "./FilterProducts"
import { filterProductsReducer } from "../model/slice/filterProductsSlice"

const store = configureStore({
    reducer: {
        modals: modalsReducer,
        filterProducts: filterProductsReducer,
    },
    preloadedState: {
        modals: {
            current: ModalsList.NONE,
        },
        filterProducts: {
            filters: [
                {
                    id: 1,
                    name: "Price Range",
                    type: "price_range",
                    info: { from: 0, to: 1000 },
                },
                {
                    id: 2,
                    name: "Attributes",
                    type: "attributes",
                    info: [
                        { id: 1, name: "Attribute 1" },
                        { id: 2, name: "Attribute 2" },
                    ],
                },
            ],
            priceRange: { min: 0, max: 1000 },
            attributes: [],
            isLoading: false,
        },
    },
})

export default {
    title: "Features/FilterProducts/FilterProducts",
    component: FilterProducts,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story<FilterProductsProps> = args => <FilterProducts {...args} />

export const Default = Template.bind({})
Default.args = {
    onChangeFilters: () => console.log("Filters changed"),
}
