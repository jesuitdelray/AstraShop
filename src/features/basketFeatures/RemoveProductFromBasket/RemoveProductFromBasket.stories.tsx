import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { RemoveProductFromBasket } from "./RemoveProductFromBasket"

export default {
    title: "Features/RemoveProductFromBasket",
    component: RemoveProductFromBasket,
    decorators: [Story => <Provider store={store}>{Story()}</Provider>],
} as Meta

const basketSlice = createSlice({
    name: "basket",
    initialState: {},
    reducers: {},
})

const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
    },
})

const Template: Story<{ id: number }> = args => <RemoveProductFromBasket {...args} />

export const Default = Template.bind({})
Default.args = {
    id: 1,
}
