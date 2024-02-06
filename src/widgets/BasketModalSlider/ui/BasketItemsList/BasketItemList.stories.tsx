import { Story, Meta } from "@storybook/react"
import { BasketItemsList, BasketItemsListProps } from "./BasketItemsList"
import { StoreProvider } from "app/providers/StoreProvider"
import { Product } from "entities/Product"

const mockProducts: Product[] = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        images: ["path/to/image1.png"],
        quantity: 2,
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        images: ["path/to/image2.png"],
        quantity: 1,
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        images: ["path/to/image3.png"],
        quantity: 3,
    },
]

export default {
    title: "Widgets/BasketItemsList",
    component: BasketItemsList,
} as Meta<typeof BasketItemsList>

const Template: Story<BasketItemsListProps> = args => (
    <StoreProvider>
        <BasketItemsList {...args} />
    </StoreProvider>
)

export const DefaultView = Template.bind({})
DefaultView.args = {
    list: mockProducts,
} as BasketItemsListProps
