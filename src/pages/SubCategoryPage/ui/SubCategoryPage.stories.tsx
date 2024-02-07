// SubCategoryPage.stories.tsx
import React from "react"
import { Story, Meta } from "@storybook/react"
import { SubCategoryPage } from "./SubCategoryPage"
import { StoreProvider } from "app/providers/StoreProvider"

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
