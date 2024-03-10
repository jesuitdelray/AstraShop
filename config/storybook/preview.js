import React from "react"
import { addDecorator } from "@storybook/react"
import i18n from "i18next"
import { initReactI18next, I18nextProvider } from "react-i18next"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator"

const BASE_URL = "https://example.com"

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "Welcome to React": "Welcome to React",
            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
})

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

addDecorator(Story => (
    <I18nextProvider i18n={i18n}>
        <Story />
    </I18nextProvider>
))

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)

window.__STORYBOOK_BASE_URL__ = BASE_URL
