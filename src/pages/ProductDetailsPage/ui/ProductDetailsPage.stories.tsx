import { StoreProvider } from "app/providers/StoreProvider"
import { ProductDetailsPage } from "./ProductDetailsPage"

export default {
    title: "Pages/ProductDetailsPage",
    component: ProductDetailsPage,
}

const Template = () => (
    <StoreProvider>
        <ProductDetailsPage />
    </StoreProvider>
)

export const Default = Template.bind({})
