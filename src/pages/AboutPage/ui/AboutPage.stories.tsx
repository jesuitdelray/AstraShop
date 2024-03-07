import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { AboutPage } from "./AboutPage"

export default {
    title: "Pages/AboutPage",
    component: AboutPage,
    decorators: [],
} as Meta

const Template: Story = args => (
    <StoreProvider>
        <AboutPage {...args} />
    </StoreProvider>
)

export const Default = Template.bind({})
