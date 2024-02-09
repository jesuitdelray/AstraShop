import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { Story, Meta } from "@storybook/react"
import { ProductGallery } from "./ProductGallery"
import { Args } from "@storybook/addons"

interface initialState {
    productDetails: {
        data: {
            images: string[]
        }
    }
}

const initialState = {
    productDetails: {
        data: {
            images: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
            ],
        },
    },
}

const createMockStore = (initialState: initialState) =>
    configureStore({
        reducer: () => initialState,
    })

const mockStore = createMockStore(initialState)

export default {
    title: "Pages/ProductGallery",
    component: ProductGallery,
    decorators: [
        (StoryFn: Story) => (
            <Provider store={mockStore}>
                <StoryFn />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = (args: Args) => <ProductGallery {...args} />

export const Default = Template.bind({})
