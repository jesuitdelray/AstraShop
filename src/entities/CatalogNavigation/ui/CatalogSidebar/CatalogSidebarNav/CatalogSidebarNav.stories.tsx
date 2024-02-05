import { CatalogSidebarNav } from "./CatalogSidebarNav"
import { StoreProvider } from "app/providers/StoreProvider"

export default {
    title: "Components/CatalogSidebarNav",
    component: CatalogSidebarNav,
    argTypes: {
        mockNavigationTree: { control: "object" },
    },
}

const mockNavigationTree = [
    {
        id: 1,
        name: "Category 1",
        icon: "https://example.com/icon1.png",
    },
    {
        id: 2,
        name: "Category 2",
        icon: "https://example.com/icon2.png",
    },
]

export const Default = (args: any) => (
    <StoreProvider>
        <CatalogSidebarNav {...args} />
    </StoreProvider>
)

Default.args = {
    mockNavigationTree: mockNavigationTree,
}
