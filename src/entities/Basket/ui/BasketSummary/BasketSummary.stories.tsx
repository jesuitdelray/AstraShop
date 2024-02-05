import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BasketSummary, BasketSummaryProps, BasketSummaryVariant } from "./BasketSummary"
import { StoreProvider } from "app/providers/StoreProvider"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import i18n from "shared/config/i18n/i18n"

export default {
    title: "Entities/BasketSummary",
    component: BasketSummary,
    decorators: [
        Story => (
            <StoreProvider>
                <Story />
            </StoreProvider>
        ),
    ],
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: [BasketSummaryVariant.DEFAULT, BasketSummaryVariant.VERTICAL],
            },
        },
    },
} as ComponentMeta<typeof BasketSummary>

const Template: ComponentStory<typeof BasketSummary> = (args: BasketSummaryProps) => (
    <BasketSummary {...args} />
)

export const Default = Template.bind({})
Default.args = {
    isCentered: false,
    variant: BasketSummaryVariant.DEFAULT,
    onOrderClick: () => alert("Confirm order clicked"),
    onExitClick: () => alert("Continue shopping clicked"),
}

export const Centered = Template.bind({})
Centered.args = {
    ...Default.args,
    isCentered: true,
}

export const Vertical = Template.bind({})
Vertical.args = {
    ...Default.args,
    variant: BasketSummaryVariant.VERTICAL,
}
