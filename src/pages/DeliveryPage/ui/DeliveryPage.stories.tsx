import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { DeliveryPage } from "./DeliveryPage"

export default {
    title: "Pages/DeliveryPage",
    component: DeliveryPage,
    decorators: [(Story: Story) => <Story />],
} as Meta

const mockStore = {
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {},
}

const Template: Story = args => (
    <Provider store={mockStore as any}>
        <DeliveryPage {...args} />
    </Provider>
)

export const Default = Template.bind({})
Default.args = {}
