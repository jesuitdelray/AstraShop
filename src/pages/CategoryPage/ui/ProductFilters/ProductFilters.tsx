import { ReactElement } from "react"
import { FilterIcon, SortIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductFilters.module.scss"

interface ProductFiltersProps {
    className?: string
}

export function ProductFilters({ className }: ProductFiltersProps): ReactElement {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography
                variant={TypographyVariant.P}
                color={TypographyColor.DARK_GRAY}
                className={styles.filter}
            >
                <FilterIcon className={styles.icon} />
                Фильтр
            </Typography>
            <Typography
                variant={TypographyVariant.P}
                color={TypographyColor.DARK_GRAY}
                className={styles.filter}
            >
                <SortIcon className={styles.icon} />
                Сортировать
            </Typography>
        </div>
    )
}
