import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import { Story, Meta } from "@storybook/react"

import { ErrorOrderModal } from "./ErrorOrderModal"
import { ModalsList, modalsReducer } from "entities/ModalSlider"

const rootReducer = combineReducers({
    modals: modalsReducer,
})

const mockStore = createStore(rootReducer, {
    modals: { current: ModalsList.ORDER_ERROR },
})

export default {
    title: "Features/ErrorOrderModal",
    component: ErrorOrderModal,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <ErrorOrderModal />

export const Default = Template.bind({})
