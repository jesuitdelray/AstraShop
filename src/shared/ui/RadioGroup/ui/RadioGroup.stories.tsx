import { RadioGroup } from "shared/ui/RadioGroup"
import { ComponentMeta, ComponentStory } from "@storybook/react"

const options = [
    { label: "Почта", value: "option1", id: "1" },
    { label: "Интайм", value: "option2", id: "2" },
    { label: "Автолюкс", value: "option3", id: "3" },
]

export default {
    title: "shared/RadioGroup",
    component: RadioGroup,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args: any) => <RadioGroup {...args} />

export const RadiogroupWithTitle = Template.bind({})
RadiogroupWithTitle.args = {
    title: "Тип доставки",
    options,
    activeInput: options[0].value,
    onChange: v => console.log(v),
}

export const RadiogroupWithTitleSecond = Template.bind({})
RadiogroupWithTitleSecond.args = {
    title: "Тип доставки",
    options,
    activeInput: options[1].value,
    onChange: v => console.log(v),
}

export const RadiogroupWithTitleThird = Template.bind({})
RadiogroupWithTitleThird.args = {
    title: "Тип доставки",
    options,
    activeInput: options[2].value,
    onChange: v => console.log(v),
}

export const RadiogroupWithTitleIsRequired = Template.bind({})
RadiogroupWithTitleIsRequired.args = {
    title: "Тип доставки",
    isRequired: true,
    options,
    activeInput: options[0].value,
    onChange: v => console.log(v),
}
