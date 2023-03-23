import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./Contacts.module.scss"

export function Contacts() {
    return (
        <div>
            <p className={styles.title}>Контакты</p>
            <div className={styles.text}>
                <Typography
                    className={styles.content}
                    color={TypographyColor.DARK_GRAY}
                >
                    (093) 892-22-26
                </Typography>
                <Typography
                    className={styles.content}
                    color={TypographyColor.DARK_GRAY}
                >
                    (096) 997-50-58
                </Typography>
                <Typography
                    className={styles.content}
                    color={TypographyColor.DARK_GRAY}
                >
                    tovar-7km.office@gmail.com
                </Typography>
            </div>
        </div>
    )
}
