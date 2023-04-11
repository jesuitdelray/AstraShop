import { useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { SearchIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import styles from "./SearchProduct.module.scss"

interface SearchProductProps {
    className?: string
}

export function SearchProduct({ className }: SearchProductProps) {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <SearchIcon
                className={classNames(
                    styles.icon,
                    { [styles.active]: value || hover || active },
                    []
                )}
            />
            <Input
                value={value}
                onChange={value => setValue(value)}
                placeholder={`${t("inputSearchPlaceholder")}`}
                className={styles.searchbar}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </div>
    )
}
