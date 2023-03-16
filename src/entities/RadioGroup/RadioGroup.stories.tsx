import {ComponentMeta, ComponentStory} from "@storybook/react";
import {RadioDirection, RadioGroup} from "entities/RadioGroup/RadioGroup";

const drinks = [
    {label: "Coffee", value: "Coffee", checked: true},
    {label: "Tea", value: "Tea"},
    {label: "Coca Cola", value: "cola"},
];

export default {
    title: "shared/RadioGroup",
    component: RadioGroup,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args: any) => (
    <RadioGroup {...args} />
);

export const HorizontalDirectionWithLabel = Template.bind({});
HorizontalDirectionWithLabel.args = {
    name: "test",
    label: "Some label text",
    options: drinks,
    direction: RadioDirection.HORIZONTAL,
};

export const VerticalDirectionWithLabel = Template.bind({});
VerticalDirectionWithLabel.args = {
    name: "test",
    label: "Some label text",
    options: drinks,
    direction: RadioDirection.VERTICAL,
};

export const HorizontalDirectionWithoutLabel = Template.bind({});
HorizontalDirectionWithoutLabel.args = {
    name: "test",
    options: drinks,
    direction: RadioDirection.HORIZONTAL,
};

export const VerticalDirectionWithoutLabel = Template.bind({});
VerticalDirectionWithoutLabel.args = {
    name: "test",
    options: drinks,
    direction: RadioDirection.VERTICAL,
};
