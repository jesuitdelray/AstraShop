import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { ProductDetailsPage } from "./ProductDetailsPage"

export default {
    title: "Pages/ProductDetailsPage",
    component: ProductDetailsPage,
    parameters: {
        docs: {
            description: {
                story: "Product Details Page component.",
            },
        },
    },
} as Meta

// Create a mock store for Redux
const mockStore = {
    getState: () => ({}),
    dispatch: () => {},
    subscribe: () => {},
    replaceReducer: () => {},
    selectors: {
        getProductDetailsError: null,
        getProductDetailsName: null,
        getProductParents: null,
    },
}

// Create a Template component that accepts parameters
const Template: Story = args => (
    <Provider store={mockStore as any}>
        <ProductDetailsPage {...args} />
    </Provider>
)

// Define default story
export const Default = Template.bind({})

// Mock data for the Default story
Default.args = {
    id: "1", // Mocked id parameter
    productName: "Mock Product Name",
    productParentsData: [
        { id: 1, name: "Parent Category 1", parent_category_id: null },
        { id: 2, name: "Parent Category 2", parent_category_id: 1 },
    ],
    productRequestError: null, // Mocked error state
}
