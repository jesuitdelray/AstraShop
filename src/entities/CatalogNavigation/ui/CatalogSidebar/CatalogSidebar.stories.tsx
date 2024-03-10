import { Meta, Story } from "@storybook/react"
import { Provider } from "react-redux"
import { CatalogSidebarNav } from "./CatalogSidebarNav/CatalogSidebarNav"

export default {
    title: "entities/CatalogSidebarNav",
    component: CatalogSidebarNav,
} as Meta

const mockStore = {
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {},
}

const Template: Story = () => (
    <Provider store={mockStore as any}>
        <CatalogSidebarNav />
    </Provider>
)

export const Default = Template.bind({})
