import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, AnyAction } from "redux"
import { Story, Meta } from "@storybook/react"
import { CatalogSidebarNav } from "./CatalogSidebarNav"

interface CatalogNavigationState {
    tree: Array<{
        id: number
        name: string
        icon: string
    }>
}

interface AppState {
    catalogNavigation: CatalogNavigationState
}

const catalogNavigationReducer = (
    state: CatalogNavigationState = { tree: [] },
    action: AnyAction
): CatalogNavigationState => {
    return state
}

const rootReducer = combineReducers<AppState>({
    catalogNavigation: catalogNavigationReducer,
})

const createMockStore = (initialState: AppState) => createStore(rootReducer, initialState)

export default {
    title: "Entities/CatalogNavigation/CatalogSidebarNav",
    component: CatalogSidebarNav,
    decorators: [
        (Story: () => JSX.Element) => {
            const mockStore = createMockStore({
                catalogNavigation: {
                    tree: [
                        { id: 1, name: "Category 1", icon: "https://example.com/icon1.png" },
                        { id: 2, name: "Category 2", icon: "https://example.com/icon2.png" },
                    ],
                },
            })

            return (
                <Provider store={mockStore}>
                    <Story />
                </Provider>
            )
        },
    ],
} as Meta

const Template: Story<typeof CatalogSidebarNav> = args => <CatalogSidebarNav {...args} />

export const Default = Template.bind({})
Default.args = {}
