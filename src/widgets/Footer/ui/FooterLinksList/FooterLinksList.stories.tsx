import { Story, Meta } from "@storybook/react/types-6-0"
import { FooterLinksList, LinksListProps } from "./FooterLinksList"

export default {
    title: "Widgets/FooterLinksList",
    component: FooterLinksList,
    decorators: [Story => <Story />],
} as Meta<LinksListProps>

const Template: Story<LinksListProps> = args => <FooterLinksList {...args} />

export const Default = Template.bind({})
Default.args = {
    data: {
        title: "footerLinksList.title",
        list: [
            { id: "1", text: "footerLinksList.link1", path: "/link1" },
            { id: "2", text: "footerLinksList.link2", path: "/link2" },
        ],
    },
    className: "",
}
