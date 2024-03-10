import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { MainPage } from "./MainPage"

export default {
    title: "Pages/MainPage",
    component: MainPage,
} as Meta

const mockStore = {
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {},
}

const Template: Story = () => (
    <Provider store={mockStore as any}>
        <MainPage />
    </Provider>
)

export const Default = Template.bind({})
