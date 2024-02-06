import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { BasketModalSlider } from "./BasketModalSlider"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { ModalsList } from "entities/ModalSlider"

const modalsSlice = createSlice({
    name: "modals",
    initialState: { current: "" },
    reducers: {
        close: state => {
            state.current = ""
        },
    },
})

const basketSlice = createSlice({
    name: "basket",
    initialState: { products: [] },
    reducers: {},
})

const mockStore = configureStore({
    reducer: {
        modals: modalsSlice.reducer,
        basket: basketSlice.reducer,
    },
    preloadedState: {
        modals: { current: ModalsList.BASKET },
        basket: {
            products: [],
        },
    },
})

export default {
    title: "Widgets/BasketModalSlider",
    component: BasketModalSlider,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <BasketModalSlider />

export const Default = Template.bind({})
