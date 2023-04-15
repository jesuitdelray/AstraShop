import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Button } from "shared/ui/Button/Button"
import { RoutePath } from "shared/config/routeConfig/const"
import styles from "./UnexpectedError.module.scss"

export function UnexpectedError() {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant={TypographyVariant.H2} className={styles.title}>
                    {t("loadingProcessUnexpectedError")}
                </Typography>
                <Button onClick={() => navigate(RoutePath.main)}>{t("returnBtn")}</Button>
            </div>
        </div>
    )
}
