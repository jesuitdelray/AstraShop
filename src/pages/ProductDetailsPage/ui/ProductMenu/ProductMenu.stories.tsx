import { StoreProvider } from "app/providers/StoreProvider"
import { ProductMenu } from "./ProductMenu"
import "./ProductMenu.module.scss"

const mockNavList = [
    { name: "Tab 1", el: <div>Content for Tab 1</div> },
    { name: "Tab 2", el: <div>Content for Tab 2</div> },
    { name: "Tab 3", el: <div>Content for Tab 3</div> },
]

export default {
    title: "Pages/ProductMenu",
    component: ProductMenu,
}

const Template = (args: any) => (
    <StoreProvider>
        <ProductMenu {...args} navList={mockNavList} />
    </StoreProvider>
)

export const Default = Template.bind({})
