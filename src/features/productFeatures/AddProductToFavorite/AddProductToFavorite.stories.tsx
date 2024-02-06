import { Story, Meta } from "@storybook/react"
import { AddProductToFavorite } from "./AddProductToFavorite"

export default {
    title: "Features/AddProductToFavorite",
    component: AddProductToFavorite,
} as Meta

const Template: Story<{ className: string }> = args => <AddProductToFavorite {...args} />

export const Default = Template.bind({})
Default.args = {
    className: "",
}
