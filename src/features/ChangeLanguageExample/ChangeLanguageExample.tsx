import i18n from "shared/config/i18n/i18n"

export function ChangeLanguageExample() {
    function clickHandler() {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
    }

    return <button onClick={clickHandler}>Lang</button>
}
