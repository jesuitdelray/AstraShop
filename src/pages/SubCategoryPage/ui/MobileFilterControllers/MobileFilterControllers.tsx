import { modalsActions } from "entities/ModalSlider"
import { ReactElement } from "react"
import { useDispatch } from "react-redux"
import { FilterIcon, SortIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./MobileFilterControllers.module.scss"

interface MobileFilterControllersProps {
    className?: string
}

export function MobileFilterControllers({ className }: MobileFilterControllersProps): ReactElement {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography
                variant={TypographyVariant.P}
                color={TypographyColor.DARK_GRAY}
                className={styles.filter}
                onClick={() => dispatch(modalsActions.openFilters())}
                data-testid="filter"
            >
                <FilterIcon className={styles.icon} />
                {t("filter")}
            </Typography>
            <Typography
                variant={TypographyVariant.P}
                color={TypographyColor.DARK_GRAY}
                className={styles.filter}
                onClick={() => dispatch(modalsActions.openSort())}
            >
                <SortIcon className={styles.icon} data-testid="sort-by" />
                {t("sortBy")}
            </Typography>
        </div>
    )
}
