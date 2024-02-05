import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BugButton } from "./BugButton"

export default {
    title: "Example/BugButton",
    component: BugButton,
} as ComponentMeta<typeof BugButton>

const Template: ComponentStory<typeof BugButton> = args => <BugButton />

export const Default = Template.bind({})
