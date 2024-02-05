import { Story, Meta } from "@storybook/react"
import { ProductCardSkeleton } from "./ProductCardSkeleton"

export default {
    title: "Entities/ProductCardSkeleton",
    component: ProductCardSkeleton,
} as Meta

const Template: Story<{ className: string }> = args => <ProductCardSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {
    className: "",
}
