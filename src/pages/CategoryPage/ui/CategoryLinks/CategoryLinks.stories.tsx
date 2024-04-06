import { Story, Meta } from "@storybook/react"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { CategoryLinks, CategoryLinksProps } from "./CategoryLinks"

export default {
    title: "Pages/Category/CategoryLinks",
    component: CategoryLinks,
} as Meta

const mockData = {
    id: 1,
    icon: "",
    name: "Sample Category",
    categories: [
        {
            id: 1,
            name: "Subcategory 1",
            image: productPlaceholder,
            parent_category_id: 0,
        },
        {
            id: 2,
            name: "Subcategory 2",
            image: productPlaceholder,
            parent_category_id: 1,
        },
    ],
}

const Template: Story<CategoryLinksProps> = args => <CategoryLinks {...args} />

export const Default = Template.bind({})
Default.args = {
    data: mockData,
    className: "",
}
