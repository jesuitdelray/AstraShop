import React, { ReactNode } from "react"
import { Story, Meta } from "@storybook/react"
import { LayoutIsland } from "./Layout"

const MockGetLayoutColumns = (children: ReactNode) => {
    const all = React.Children.toArray(children)
    const left = all.filter((child: any) => child.props.column === "left")
    const right = all.filter((child: any) => child.props.column === "right")
    return { left, right }
}

export default {
    title: "Pages/Layout",
    component: LayoutIsland,
} as Meta

const Template: Story<{ children: ReactNode }> = ({ children }) => {
    const { left, right } = MockGetLayoutColumns(children)

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>{left}</div>
            <div style={{ flex: 1 }}>{right}</div>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    children: [
        <LayoutIsland column="left" key="1">
            Left Content 1
        </LayoutIsland>,
        <LayoutIsland column="right" key="2">
            Right Content 1
        </LayoutIsland>,
        <LayoutIsland column="left" key="3">
            Left Content 2
        </LayoutIsland>,
        <LayoutIsland column="right" key="4">
            Right Content 2
        </LayoutIsland>,
    ],
}
