import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Story, Meta } from "@storybook/react"
import { HeaderLeft, HeaderLeftProps } from "./HeaderLeft"
import { ModalsList } from "entities/ModalSlider"

const modalsSlice = createSlice({
    name: "modals",
    initialState: {
        current: ModalsList.NONE,
    },
    reducers: {
        openBurger: state => {
            state.current = ModalsList.BURGER
        },
        close: state => {
            state.current = ModalsList.NONE
        },
    },
})

const store = configureStore({
    reducer: {
        modals: modalsSlice.reducer,
    },
})

export default {
    title: "Widgets/HeaderLeft",
    component: HeaderLeft,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story<HeaderLeftProps> = args => <HeaderLeft {...args} />

export const Default = Template.bind({})
Default.args = {
    className: "",
    isMainPage: false,
}
