import { Provider, useSelector } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { CatalogLinks } from "./CatalogLinks"

const initialState = {
    tree: [
        {
            id: 1,
            name: "Category 1",
            icon: "",
            categories: [
                {
                    id: 11,
                    name: "Sub-category 1",
                    image: "https://placehold.co/300x300",
                },
                {
                    id: 12,
                    name: "Sub-category 2",
                    image: "https://placehold.co/300x300",
                },
            ],
        },
        {
            id: 2,
            name: "Category 2",
            icon: "",
            categories: [
                {
                    id: 21,
                    name: "Sub-category 1",
                    image: "https://placehold.co/300x300",
                },
                {
                    id: 22,
                    name: "Sub-category 2",
                    image: "https://placehold.co/300x300",
                },
            ],
        },
    ],
    currentTree: [],
    isLoading: false,
    error: null,
}

const catalogNavigationSlice = createSlice({
    name: "catalogNavigation",
    initialState,
    reducers: {},
})

const makeMockStore = () =>
    configureStore({
        reducer: {
            catalogNavigation: catalogNavigationSlice.reducer,
        },
    })

function M() {
    const v = useSelector((store: any) => store.catalogNavigation.currentTree)
    return <div>{v}</div>
}

export default {
    title: "Entities/CatalogLinks",
    component: CatalogLinks,
    decorators: [
        (Story: React.ComponentType) => (
            <Provider store={makeMockStore()}>
                <M />
                <Story />
            </Provider>
        ),
    ],
}

export const Default = () => <CatalogLinks />
