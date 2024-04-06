import { Story, Meta } from "@storybook/react"
import { Skeleton } from "./Skeleton"

export default {
    title: "Components/Skeleton",
    component: Skeleton,
    argTypes: {
        className: { control: "text" },
        height: { control: "text" },
        width: { control: "text" },
        border: { control: "text" },
    },
} as Meta

const Template: Story<any> = args => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithCustomProps = Template.bind({})
WithCustomProps.args = {
    className: "customClass",
    height: 100,
    width: 200,
    border: "5px",
    style: { color: "red" },
}
