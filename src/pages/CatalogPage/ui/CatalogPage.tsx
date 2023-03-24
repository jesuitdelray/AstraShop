import { CrossIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./CatalogPage.module.scss"

export function CatalogPage() {
    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                Клавиатуры
            </Typography>
            <div className={styles.filter}>
                <Typography variant={TypographyVariant.P}>Фильтр</Typography>
            </div>
        </div>
    )
}
