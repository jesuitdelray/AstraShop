import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { MemoryRouter } from "react-router-dom"
import { CategoryPage } from "./CategoryPage"
import { CategoryLinks } from "./CategoryLinks/CategoryLinks"
import { catalogNavigationReducer } from "entities/CatalogNavigation"

const initialState = {
    catalogNavigation: {
        tree: [
            {
                name: "Electronics",
                id: 1,
                icon: "",
                categories: [
                    { name: "Laptops", id: 11, image: "laptops.jpg", parent_category_id: 1 },
                    {
                        name: "Smartphones",
                        id: 12,
                        image: "smartphones.jpg",
                        parent_category_id: 1,
                    },
                ],
            },
            {
                name: "Clothing",
                id: 2,
                icon: "",
                categories: [
                    {
                        name: "Men's Clothing",
                        id: 21,
                        image: "mens_clothing.jpg",
                        parent_category_id: 2,
                    },
                    {
                        name: "Women's Clothing",
                        id: 22,
                        image: "womens_clothing.jpg",
                        parent_category_id: 2,
                    },
                ],
            },
        ],
        currentTree: [],
        isLoading: false,
    },
}

const mockStore = configureStore({
    reducer: combineReducers({
        catalogNavigation: catalogNavigationReducer,
    }),
    preloadedState: initialState,
})

export default {
    title: "Pages/CategoryPage",
    component: CategoryPage,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <CategoryPage />

export const Default = Template.bind({})

export const CategoryLinksStory: Story = () => (
    <CategoryLinks data={initialState.catalogNavigation.tree[0]} />
)
CategoryLinksStory.storyName = "CategoryLinks"
