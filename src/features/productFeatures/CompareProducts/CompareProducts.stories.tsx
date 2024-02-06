import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import { CompareProducts } from "./CompareProducts"

export default {
    title: "Features/CompareProducts",
    component: CompareProducts,
} as Meta

const Template: Story<{ className: string }> = args => <CompareProducts {...args} />

export const Active = Template.bind({})
Active.args = {}
Active.decorators = [
    Story => {
        const [isActive, setIsActive] = useState(true)
        return <div onClick={() => setIsActive(!isActive)}>{Story()}</div>
    },
]
