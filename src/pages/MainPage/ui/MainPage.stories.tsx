import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { MainPage } from "./MainPage"

const MockTimer = () => <div>00:00:00</div>

jest.mock("./Timer", () => ({
    __esModule: true,
    default: MockTimer,
}))

const mockStore = {
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {},
}

export default {
    title: "Pages/MainPage",
    component: MainPage,
} as Meta

const Template: Story = () => (
    <Provider store={mockStore as any}>
        <MainPage />
    </Provider>
)

export const Default = Template.bind({})
