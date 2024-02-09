import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { Story, Meta } from "@storybook/react"
import { VariantPictures } from "./VariantPictures"

const initialState = {
    productDetails: {
        data: {
            images: ["https://placehold.co/300x300", "https://placehold.co/300x300"],
        },
    },
}

const productDetailsReducer = (state = initialState.productDetails) => state

const rootReducer = combineReducers({
    productDetails: productDetailsReducer,
})

const mockStore = createStore(rootReducer)

export default {
    title: "Components/VariantPictures",
    component: VariantPictures,
    decorators: [
        Story => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = args => <VariantPictures {...args} />

export const Default = Template.bind({})
