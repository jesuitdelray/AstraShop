import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Button } from "shared/ui/Button/Button"
import { classNames } from "shared/lib/classNames/classNames"
import { RoutePath } from "shared/config/routeConfig/const"
import styles from "./UnexpectedError.module.scss"

interface UnexpectedErrorProps {
    className?: string
}

export function UnexpectedError({ className }: UnexpectedErrorProps) {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <div className={styles.container}>
                <Typography variant={TypographyVariant.H2} className={styles.title}>
                    {t("loadingProcessUnexpectedError")}
                </Typography>
                <Button onClick={() => navigate(RoutePath.main)}>{t("returnBtn")}</Button>
            </div>
        </div>
    )
}
