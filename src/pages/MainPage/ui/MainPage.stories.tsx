import { Story, Meta } from "@storybook/react"
import { MainPage } from "./MainPage"
import { StoreProvider } from "app/providers/StoreProvider"

export default {
    title: "Pages/MainPage",
    component: MainPage,
} as Meta

const Template: Story = () => (
    <StoreProvider>
        <MainPage />
    </StoreProvider>
)

export const Default = Template.bind({})
