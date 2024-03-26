import { Story, Meta } from "@storybook/react"
import { ModalsList } from "entities/ModalSlider"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { BurgerMenu } from "./BurgerMenu"

const modalsSlice = createSlice({
    name: "modals",
    initialState: { current: ModalsList.BURGER },
    reducers: {
        close: state => {
            state.current = ModalsList.BURGER
        },
    },
})

const mockStore = configureStore({
    reducer: {
        modals: modalsSlice.reducer,
    },
    preloadedState: {
        modals: { current: ModalsList.BURGER },
    },
})

export default {
    title: "Widgets/BurgerMenu",
    component: BurgerMenu,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <BurgerMenu />

export const Default = Template.bind({})

Default.parameters = {
    chromatic: { delay: 1000 },
}
