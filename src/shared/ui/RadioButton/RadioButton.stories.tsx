import {ComponentMeta, ComponentStory} from "@storybook/react";
import {RadioButton} from "shared/ui/RadioButton/RadioButton";

export default {
    title: "shared/RadioButton",
    component: RadioButton,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args: any) => (
    <RadioButton {...args} />
);

export const UncheckedWithoutLabel = Template.bind({});
UncheckedWithoutLabel.args = {
    value: "test",
    checked: false,
};

export const UncheckedWithLabel = Template.bind({});
UncheckedWithLabel.args = {
    value: "test",
    checked: false,
    label: "Test label",
};

export const CheckedWithoutLabel = Template.bind({});
CheckedWithoutLabel.args = {
    value: "test",
    checked: true,
};

export const CheckedWithLabel = Template.bind({});
CheckedWithLabel.args = {
    value: "test",
    checked: true,
    label: "Test label",
};
