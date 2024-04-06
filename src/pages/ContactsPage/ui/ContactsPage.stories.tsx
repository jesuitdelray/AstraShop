import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { ContactsPage } from "./ContactsPage"

export default {
    title: "Pages/ContactsPage",
    component: ContactsPage,
} as Meta

const mockStore = {
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {},
}

const Template: Story = args => (
    <Provider store={mockStore as any}>
        <ContactsPage {...args} />
    </Provider>
)

export const Default: Story = Template.bind({})
