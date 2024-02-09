import { Story, Meta } from "@storybook/react"
import { CatalogModal, ModalProps } from "./CatalogModal"

export default {
    title: "Entities/CatalogModal",
    component: CatalogModal,
    argTypes: {
        isOpen: {
            control: "boolean",
            description: "Control the open state of the modal",
        },
        navTree: {
            control: "object",
            description: "Navigation tree data for the modal",
        },
        mouseEnter: { action: "mouseEnter" },
        mouseLeave: { action: "mouseLeave" },
        onClose: { action: "onClose" },
    },
} as Meta<ModalProps>

const Template: Story<ModalProps> = args => (
    <div style={{ position: "relative" }}>
        <CatalogModal {...args} styles={{ top: 0 }} />
    </div>
)

export const Default = Template.bind({})
Default.args = {
    isOpen: true,
    navTree: [
        {
            name: "test-1",
            id: 0,
            icon: "",
            categories: [
                {
                    name: "test1",
                    id: 1,
                    image: "",
                    parent_category_id: 1,
                },
            ],
        },
        {
            name: "test-2",
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
        {
            name: "test-3",
            id: 0,
            icon: "",
            categories: [
                {
                    name: "test3",
                    id: 1,
                    image: "",
                    parent_category_id: 1,
                },
            ],
        },
    ],
    mouseEnter: (id: number) => console.log(`Mouse Enter: ${id}`),
    mouseLeave: () => console.log("Mouse Leave"),
    onClose: () => console.log("Modal Closed"),
}

Default.decorators = [
    Story => (
        <div>
            <Story />
        </div>
    ),
]
