import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { PaymentErrorModal } from "./PaymentErrorModal"
import { ModalsList } from "entities/ModalSlider"
import { configureStore } from "@reduxjs/toolkit"
import { AnyAction, combineReducers } from "@reduxjs/toolkit"

const modalReducer = (state = { current: ModalsList.PAYMENT_ERROR }, action: AnyAction) => state

const store = configureStore({
    reducer: combineReducers({
        modal: modalReducer,
    }),
    preloadedState: {
        modal: {
            current: ModalsList.PAYMENT_ERROR,
        },
    },
})

export default {
    title: "Components/PaymentErrorModal",
    component: PaymentErrorModal,
    decorators: [
        (Story: () => JSX.Element) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <PaymentErrorModal />

export const Default = Template.bind({})
