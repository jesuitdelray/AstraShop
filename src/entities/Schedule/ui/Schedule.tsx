import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./Schedule.module.scss"

export function Schedule() {
    return (
        <div>
            <p className={styles.title}>График работы</p>
            <div className={styles.text}>
                <Typography
                    className={styles.content}
                    color={TypographyColor.DARK_GRAY}
                >
                    Пн-Пт: 8.00 - 20.00
                </Typography>
                <Typography
                    className={styles.content}
                    color={TypographyColor.DARK_GRAY}
                >
                    Сб: 8.00 - 16.00
                </Typography>
                <Typography
                    className={styles.content}
                    color={TypographyColor.DARK_GRAY}
                >
                    Вс: Выходной
                </Typography>
            </div>
        </div>
    )
}
