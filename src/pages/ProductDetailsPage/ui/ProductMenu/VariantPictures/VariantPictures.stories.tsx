// VariantPictures.stories.tsx
import React, { useState } from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, Store } from "redux"
import { Story, Meta } from "@storybook/react"
import { VariantPictures } from "./VariantPictures"

interface ProductDetailsState {
    images: string[]
}

interface AppState {
    productDetails: ProductDetailsState
}

const initialState: AppState = {
    productDetails: {
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        ],
    },
}

const rootReducer = combineReducers<AppState>({
    productDetails: (state: ProductDetailsState = initialState.productDetails, action) => {
        // Здесь вы можете добавить логику для обработки действий
        return state
    },
})

const store: Store<AppState> = createStore(rootReducer, initialState)

export default {
    title: "Components/VariantPictures",
    component: VariantPictures,
    decorators: [
        (Story: () => JSX.Element) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <VariantPictures />

export const Default = Template.bind({})
