import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { catalogNavigationReducer } from "entities/CatalogNavigation"
import { CatalogPage } from "./CatalogPage"

const store = createStore(
    combineReducers({
        catalogNavigation: catalogNavigationReducer,
    }),
    applyMiddleware(thunk)
)

export default {
    title: "Pages/CatalogPage",
    component: CatalogPage,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <CatalogPage />

export const Default = Template.bind({})
