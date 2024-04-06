import { Story, Meta } from "@storybook/react"
import { VariantInfo } from "./VariantInfo"

export default {
    title: "Components/VariantInfo",
    component: VariantInfo,
} as Meta

const Template: Story<any> = args => <VariantInfo {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithProductDescription = Template.bind({})
WithProductDescription.args = {}
