import { Story, Meta } from "@storybook/react"
import { ILayoutProps, Layout } from "./Layout"

export default {
    title: "Pages/MainPage/Layout",
    component: Layout,
} as Meta

const Template: Story<ILayoutProps> = args => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
    children: [
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>Block 1</div>,
        <div style={{ backgroundColor: "lightcoral", padding: "20px" }}>Block 2</div>,
        <div style={{ backgroundColor: "lightgreen", padding: "20px" }}>Block 3</div>,
    ],
    gap: "15px",
}
