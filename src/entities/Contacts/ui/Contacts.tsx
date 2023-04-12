import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./Contacts.module.scss"

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <p className={styles.title}>{t("Contacts")}</p>
            <div className={styles.column}>
                <Typography color={TypographyColor.DARK_GRAY}>(093) 892-22-26</Typography>
                <Typography color={TypographyColor.DARK_GRAY}>(096) 997-50-58</Typography>
                <Typography color={TypographyColor.DARK_GRAY}>
                    tovar-7km.office@gmail.com
                </Typography>
            </div>
        </div>
    )
}
