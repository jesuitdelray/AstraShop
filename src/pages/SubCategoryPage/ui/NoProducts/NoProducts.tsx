import { useTranslation } from "react-i18next"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Button } from "shared/ui/Button/Button"
import styles from "./NoProducts.module.scss"

export interface NoProductsProps {
    onReturnClick: () => void
}

export function NoProducts({ onReturnClick }: NoProductsProps) {
    const { t } = useTranslation()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant={TypographyVariant.H2} className={styles.title}>
                    {t("loadingProcessNoProduct")}
                </Typography>
                <Button onClick={onReturnClick}>{t("returnBtn")}</Button>
            </div>
        </div>
    )
}
