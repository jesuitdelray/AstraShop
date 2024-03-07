import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { Breadcrumbs } from "./Breadcrumbs"

export default {
    title: "Entities/Breadcrumbs",
    component: Breadcrumbs,
} as Meta

const Template: Story = args => (
    <StoreProvider>
        <Breadcrumbs {...args} />
    </StoreProvider>
)

export const Default = Template.bind({})
Default.args = {}
