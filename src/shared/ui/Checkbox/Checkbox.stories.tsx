import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Checkbox } from "./Checkbox"

export default {
    title: "shared/Checkbox",
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args: any) => (
    <Checkbox {...args} />
)

export const Checked = Template.bind({})
Checked.args = {
    id: "321",
    label: "Let`s write our first letter",
    checked: true,
}

export const UnChecked = Template.bind({})
UnChecked.args = {
    id: "321",
    label: "Let`s write our first letter",
    checked: false,
}
