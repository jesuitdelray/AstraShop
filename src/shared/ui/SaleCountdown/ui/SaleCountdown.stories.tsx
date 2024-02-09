import { Story, Meta } from "@storybook/react"
import { SaleCountdown } from "./SaleCountdown"

jest.mock("../lib/useCountdown/useCountdown", () => ({
    useCountdown: () => ({
        hours: "08",
        minutes: "15",
        seconds: "30",
    }),
}))

export default {
    title: "Components/SaleCountdown",
    component: SaleCountdown,
} as Meta

const Template: Story<typeof SaleCountdown> = args => <SaleCountdown {...args} />

export const Default = Template.bind({})
