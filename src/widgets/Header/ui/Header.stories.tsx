import { Story, Meta } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"
import { Header, HeaderProps } from "./Header"

export default {
    title: "Widgets/Header",
    component: Header,
    decorators: [Story => <Story />],
} as Meta

const Template: Story<HeaderProps> = args => (
    <StoreProvider>
        <Header {...args} />
    </StoreProvider>
)

export const Default = Template.bind({})
Default.args = {
    BurgerModal: <div>Burger Modal Placeholder</div>,
    BasketModal: <div>Basket Modal Placeholder</div>,
}
