import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { CatalogSidebar } from "./CatalogSidebar"

export default {
    title: "entities/CatalogSidebar",
    component: CatalogSidebar,
} as Meta

const Template: Story = args => (
    <StoreProvider>
        <CatalogSidebar {...args} />
    </StoreProvider>
)

export const Default = Template.bind({})
