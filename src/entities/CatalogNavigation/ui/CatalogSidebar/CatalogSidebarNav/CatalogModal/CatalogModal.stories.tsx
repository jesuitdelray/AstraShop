import { Story, Meta } from "@storybook/react"
import { CatalogModal, ModalProps } from "./CatalogModal"
import { navigationCategory } from "../../../../model/types/list"

export default {
    title: "Components/CatalogModal",
    component: CatalogModal,
} as Meta

const mockNavTree: navigationCategory[] = [
    {
        name: "Electronics",
        id: 1,
        icon: "",
        categories: [
            { name: "Laptops", id: 11, image: "", parent_category_id: 1 },
            { name: "Cameras", id: 12, image: "", parent_category_id: 1 },
        ],
    },
    {
        name: "Clothing",
        id: 2,
        icon: "",
        categories: [
            { name: "Men", id: 21, image: "", parent_category_id: 2 },
            {
                name: "Women",
                id: 22,
                image: "",
                parent_category_id: 2,
            },
        ],
    },
]

const Template: Story<ModalProps> = args => <CatalogModal {...args} />

export const Default = Template.bind({})
Default.args = {
    isOpen: true,
    navTree: mockNavTree,
    mouseEnter: (id: number) => console.log(`Mouse Enter: ${id}`),
    mouseLeave: () => console.log("Mouse Leave"),
    onClose: () => console.log("Modal Closed"),
}
