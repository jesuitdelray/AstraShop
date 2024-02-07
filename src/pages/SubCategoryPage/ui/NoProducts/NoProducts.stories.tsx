import { action } from "@storybook/addon-actions"
import { Story, Meta } from "@storybook/react"
import { NoProducts, NoProductsProps } from "./NoProducts"

export default {
    title: "Pages/SubCategoryPage/NoProducts",
    component: NoProducts,
    decorators: [Story => <Story />],
} as Meta

const Template: Story<NoProductsProps> = args => <NoProducts {...args} />

export const Default = Template.bind({})
Default.args = {
    onReturnClick: action("returnClicked"),
}
