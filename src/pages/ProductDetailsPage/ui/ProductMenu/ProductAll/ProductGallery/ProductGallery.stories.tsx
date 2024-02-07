import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { ProductGallery } from "./ProductGallery"
import { createSlice } from "@reduxjs/toolkit"

const mockImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
]

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: {
        images: mockImages,
    },
    reducers: {},
})

const store = configureStore({
    reducer: {
        productDetails: productDetailsSlice.reducer,
    },
})

export default {
    title: "Components/ProductAll/ProductGallery",
    component: ProductGallery,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as Meta

const Template: Story = () => <ProductGallery />

export const Default = Template.bind({})
