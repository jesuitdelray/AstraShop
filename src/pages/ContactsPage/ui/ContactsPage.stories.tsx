import { Story, Meta } from "@storybook/react"
import { ContactsPage } from "./ContactsPage"
import { StoreProvider } from "app/providers/StoreProvider"

export default {
    title: "Pages/ContactsPage",
    component: ContactsPage,
    decorators: [(Story: Story) => <Story />],
} as Meta

const Template: Story = args => (
    <StoreProvider>
        <ContactsPage {...args} />
    </StoreProvider>
)

export const Default = Template.bind({})
Default.args = {}
