import { Story, Meta } from "@storybook/react"
import { DeliveryPage } from "./DeliveryPage"
import { StoreProvider } from "app/providers/StoreProvider"

export default {
    title: "Pages/DeliveryPage",
    component: DeliveryPage,
    decorators: [(Story: Story) => <Story />],
} as Meta

const Template: Story = args => (
    <StoreProvider>
        <DeliveryPage {...args} />
    </StoreProvider>
)

export const Default = Template.bind({})
Default.args = {}
