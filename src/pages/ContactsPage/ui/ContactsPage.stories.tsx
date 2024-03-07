import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { ContactsPage } from "./ContactsPage"

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
