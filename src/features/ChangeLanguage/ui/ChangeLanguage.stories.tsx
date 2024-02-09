import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { changeLanguageReducer } from "../model/slice/changeLanguageSlice"
import { ChangeLanguage, ChangeLanguageColor } from "./ChangeLanguage"
import { Languages } from "../config/config"

export default {
    title: "Features/ChangeLanguage",
    component: ChangeLanguage,
    decorators: [Story => <Provider store={store}>{Story()}</Provider>],
    argTypes: {
        color: {
            control: "select",
            options: [ChangeLanguageColor.NORMAL, ChangeLanguageColor.INVERTED],
        },
    },
} as Meta

const store = configureStore({
    reducer: {
        changeLanguage: changeLanguageReducer,
    },
    preloadedState: {
        changeLanguage: {
            language: Languages.ENGLISH,
        },
    },
})

const Template: Story<{ color: ChangeLanguageColor }> = args => <ChangeLanguage {...args} />

export const Default = Template.bind({})
Default.args = {
    color: ChangeLanguageColor.NORMAL,
}

export const Inverted = Template.bind({})
Inverted.args = {
    color: ChangeLanguageColor.INVERTED,
}
