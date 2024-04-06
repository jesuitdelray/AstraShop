import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { AboutPage } from "./AboutPage"

export default {
    title: "Pages/AboutPage",
    component: AboutPage,
} as Meta

const mockStore = {
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {},
}

const Template: Story = args => (
    <Provider store={mockStore as any}>
        <AboutPage {...args} />
    </Provider>
)

export const Default: Story = Template.bind({})
