import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Story, Meta } from "@storybook/react"
import { ModalsList } from "entities/ModalSlider"
import { PaymentErrorModal } from "./PaymentErrorModal"

const customInitialState = { current: ModalsList.PAYMENT_ERROR }

const modalSlice = createSlice({
    name: "modals",
    initialState: customInitialState,
    reducers: {
        closeModal: state => {
            state.current = ModalsList.NONE
        },
    },
})

const store = configureStore({
    reducer: {
        modals: modalSlice.reducer,
    },
})

export default {
    title: "Pages/OrderPage/PaymentErrorModal",
    component: PaymentErrorModal,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story<typeof PaymentErrorModal> = args => <PaymentErrorModal {...args} />

export const Default = Template.bind({})
