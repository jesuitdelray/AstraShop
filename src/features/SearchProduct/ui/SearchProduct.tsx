import { useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { SearchIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./SearchProduct.module.scss"

interface SearchProductProps {
    className?: string
}

export function SearchProduct({ className }: SearchProductProps) {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)

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
                placeholder="Search Product"
                className={styles.searchbar}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </div>
    )
}
