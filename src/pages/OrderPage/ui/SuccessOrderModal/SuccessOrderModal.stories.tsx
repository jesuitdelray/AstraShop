import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Story, Meta } from "@storybook/react"
import { ModalsList } from "entities/ModalSlider"
import { SuccessOrderModal } from "./SuccessOrderModal"

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
