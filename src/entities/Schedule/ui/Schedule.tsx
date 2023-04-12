import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./Schedule.module.scss"

interface ScheduleProps {
    className?: string
}

export function Schedule({ className }: ScheduleProps) {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography className={styles.title}>{t("scheduleTitle")}</Typography>
            <div className={styles.column}>
                <Typography color={TypographyColor.DARK_GRAY}>
                    {t("scheduleMondayFriday")}
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY}>{t("scheduleSaturday")}</Typography>
                <Typography color={TypographyColor.DARK_GRAY}>{t("scheduleWeekend")}</Typography>
            </div>
        </div>
    )
}
