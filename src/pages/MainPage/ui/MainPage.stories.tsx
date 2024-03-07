import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { MainPage } from "./MainPage"

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
