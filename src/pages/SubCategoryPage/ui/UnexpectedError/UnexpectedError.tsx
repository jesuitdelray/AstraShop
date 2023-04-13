import { useTranslation } from "react-i18next"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Button } from "shared/ui/Button/Button"
import styles from "./UnexpectedError.module.scss"

export function UnexpectedError() {
    const { t } = useTranslation()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant={TypographyVariant.H2} className={styles.title}>
                    {t("loadingProcessUnexpectedError")}
                </Typography>
                <Button>{t("returnBtn")}</Button>
            </div>
        </div>
    )
}
