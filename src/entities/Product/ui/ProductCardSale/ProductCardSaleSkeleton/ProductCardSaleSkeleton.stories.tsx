import { Story, Meta } from "@storybook/react"
import { ProductCardSaleSkeleton } from "./ProductCardSaleSkeleton"

export default {
    title: "Entities/Skeletons/ProductCardSaleSkeleton",
    component: ProductCardSaleSkeleton,
} as Meta

const Template: Story<{ className: string }> = args => <ProductCardSaleSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {}
