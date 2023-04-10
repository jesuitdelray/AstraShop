import { ChangeLanguageIcon } from "shared/assets/icons/others"
import { useState } from "react"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import styles from "./ChangeLanguage.module.scss"

const languages = ["Русский", "English", "Français"]

export function ChangeLanguage() {
    const [languageShow, setLanguageShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <ChangeLanguageIcon
                className={styles.menuItem}
                onMouseEnter={() => setLanguageShow(true)}
            />
            {languageShow && (
                <div
                    className={styles.languageListContainer}
                    onMouseLeave={() => {
                        setTimeout(() => {
                            setLanguageShow(false)
                        }, 1000)
                    }}
                >
                    {languages.map(language => (
                        <Button variant={ButtonVariant.CLEAR_INVERTED} className={styles.btn}>
                            {language}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    )
}
