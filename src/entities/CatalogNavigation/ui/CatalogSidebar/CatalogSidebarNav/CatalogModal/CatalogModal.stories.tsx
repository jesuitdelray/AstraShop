import { Story, Meta } from "@storybook/react"
import { CatalogModal, ModalProps } from "./CatalogModal"
import { navigationCategory } from "../../../../model/types/list"
import { Portal } from "../Portal/Portal"

export default {
    title: "Components/CatalogModal",
    component: CatalogModal,
} as Meta

const mockNavTree: navigationCategory[] = [
    {
        name: "test",
        id: 0,
        icon: "",
        categories: [
            {
                name: "test2",
                id: 1,
                image: "",
                parent_category_id: 1,
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
