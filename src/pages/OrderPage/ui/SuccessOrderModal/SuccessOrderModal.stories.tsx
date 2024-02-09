import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Story, Meta } from "@storybook/react"
import { SuccessOrderModal } from "./SuccessOrderModal"
import { ModalsList } from "entities/ModalSlider"

const customInitialState = { current: ModalsList.SUCCESS }

const modalSlice = createSlice({
    name: "modals",
    initialState: customInitialState,
    reducers: {},
})

const store = configureStore({
    reducer: {
        modals: modalSlice.reducer,
    },
})

export default {
    title: "Pages/OrderPage/SuccessOrderModal",
    component: SuccessOrderModal,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story<typeof SuccessOrderModal> = args => <SuccessOrderModal {...args} />

export const Default = Template.bind({})
