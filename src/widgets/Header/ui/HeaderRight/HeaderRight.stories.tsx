import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { Story, Meta } from "@storybook/react"
import { HeaderRight, IHeaderRightProps } from "./HeaderRight"
import { ModalsList, modalsReducer } from "entities/ModalSlider"
import { basketReducer } from "entities/Basket"

const initialState = {
    modals: {
        current: ModalsList.BURGER,
    },
    basket: {
        products: [],
    },
}

const store = configureStore({
    reducer: {
        modals: modalsReducer,
        basket: basketReducer,
    },
    preloadedState: initialState,
})

export default {
    title: "Widgets/HeaderRight",
    component: HeaderRight,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story<IHeaderRightProps> = args => <HeaderRight {...args} />

export const Default = Template.bind({})
Default.args = {
    isMainPage: false,
}

export const OnMainPage = Template.bind({})
OnMainPage.args = {
    isMainPage: true,
}
