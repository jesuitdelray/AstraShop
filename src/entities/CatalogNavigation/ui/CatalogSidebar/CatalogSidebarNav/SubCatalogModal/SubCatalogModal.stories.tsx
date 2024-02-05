import { CSSProperties } from "react"
import { Story, Meta } from "@storybook/react"
import { SubCatalogModal } from "./SubCatalogModal"

interface ModalProps {
    className?: string
    isOpen: boolean
    navTree: any
    hoveredId: number
    styles: CSSProperties
    onClose: () => void
}

export default {
    title: "Entities/SubCatalogModal",
    component: SubCatalogModal,
    argTypes: {
        isOpen: {
            control: "boolean",
        },
        navTree: {
            control: "object",
        },
        hoveredId: {
            control: "number",
        },
    },
} as Meta

const Template: Story<ModalProps> = (args: ModalProps) => <SubCatalogModal {...args} />

export const Default = Template.bind({})
Default.args = {
    isOpen: true,
    navTree: [
        {
            id: 1,
            categories: [
                {
                    id: 11,
                    name: "Category 1",
                },
                {
                    id: 12,
                    name: "Category 2",
                },
                {
                    id: 13,
                    name: "Category 3",
                },
                {
                    id: 14,
                    name: "Category 4",
                },
            ],
        },
    ],
    hoveredId: 1,
    onClose: () => {},
}
