import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { SubCategoryPage } from "./SubCategoryPage"

export default {
    title: "Pages/SubCategoryPage",
    component: SubCategoryPage,
    decorators: [
        StoryComponent => (
            <StoreProvider>
                <div style={{ padding: "3rem" }}>
                    <StoryComponent />
                </div>
            </StoreProvider>
        ),
    ],
} as Meta<typeof SubCategoryPage>

const Template: Story = () => <SubCategoryPage />

export const Default = Template.bind({})
