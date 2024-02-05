import { Story } from "@storybook/react"
import { NavigationList, NavigationListVariant, NavigationListColor } from "./NavigationList"

export default {
    title: "Entities/NavigationList",
    component: NavigationList,
    decorators: [
        (Story: Story) => (
            <div style={{ padding: "3rem" }}>
                <Story />
            </div>
        ),
    ],
}

const Template: Story = args => <NavigationList {...args} variant={NavigationListVariant.DESKTOP} />

export const DesktopNormal = Template.bind({})
DesktopNormal.args = {
    variant: NavigationListVariant.DESKTOP,
    color: NavigationListColor.NORMAL,
    displayName: "test",
}
