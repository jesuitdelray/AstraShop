import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CatalogModal } from "./CatalogModal"

export default {
    title: "shared/Modal",
    component: CatalogModal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CatalogModal>

const Template: ComponentStory<typeof CatalogModal> = args => (
    <div className="app">
        <CatalogModal {...args} />
    </div>
)

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ",
}
