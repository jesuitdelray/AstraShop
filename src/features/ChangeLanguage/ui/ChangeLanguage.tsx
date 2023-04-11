import { useDispatch, useSelector } from "react-redux"
import { ChangeLanguageIcon } from "shared/assets/icons/others"
import i18n from "shared/config/i18n/i18n"
import { classNames } from "shared/lib/classNames/classNames"
import { useEffect, useRef, useState } from "react"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import styles from "./ChangeLanguage.module.scss"
import { changeLanguageActions } from "../model/slice/changeLanguageSlice"
import { getStorageLanguage } from "../model/selectors/changeLanguageSelectors"
import { languagesData } from "../config/config"

export function ChangeLanguage() {
    const currentLanguage = useSelector(getStorageLanguage)
    const [dropdownActive, setDropdownActive] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch()

    function onMouseEnterHandler() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }

        setDropdownActive(true)
    }

    function mouseLeaveHandler() {
        const delay = window.innerWidth < 769 ? 0 : 400

        timeoutRef.current = setTimeout(() => {
            setDropdownActive(false)
        }, delay)
    }

    useEffect(() => {
        function closeDropdown(e: MouseEvent) {
            if (e.target !== dropdownRef.current) {
                setDropdownActive(false)
            }
        }
        document.body.addEventListener("click", closeDropdown)

        return () => document.body.removeEventListener("click", closeDropdown)
    }, [])

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <ChangeLanguageIcon className={styles.menuItem} />
            {dropdownActive && (
                <div ref={dropdownRef} className={styles.languageListContainer}>
                    {languagesData.map(language => {
                        const { id, text, languagesCode } = language

                        return (
                            <Button
                                key={id}
                                variant={ButtonVariant.CLEAR_INVERTED}
                                onClick={() => {
                                    i18n.changeLanguage(languagesCode)
                                    dispatch(
                                        changeLanguageActions.setCurrentLanguage(languagesCode)
                                    )
                                    setDropdownActive(false)
                                }}
                                className={classNames(
                                    styles.btn,
                                    { [styles.active]: currentLanguage === languagesCode },
                                    []
                                )}
                            >
                                {text}
                            </Button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
