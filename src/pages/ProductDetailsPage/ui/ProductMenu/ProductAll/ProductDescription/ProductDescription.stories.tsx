import { Story, Meta } from "@storybook/react"
import { ProductInfo } from "./ProductInfo/ProductInfo"

export default {
    title: "Pages/ProductAll/ProductDescription",
    component: ProductInfo,
} as Meta

const Template: Story = args => <ProductInfo {...args} />

export const Default = Template.bind({})
Default.args = {
    className: "customClass",
    description:
        "This is a sample description for a product that includes several features and benefits.",
}
