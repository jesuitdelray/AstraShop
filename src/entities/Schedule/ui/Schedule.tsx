import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./Schedule.module.scss"

interface ScheduleProps {
    className?: string
}

export function Schedule({ className }: ScheduleProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography className={styles.title}>График работы</Typography>
            <div className={styles.column}>
                <Typography color={TypographyColor.DARK_GRAY}>Пн-Пт: 8.00 - 20.00</Typography>
                <Typography color={TypographyColor.DARK_GRAY}>Сб: 8.00 - 16.00</Typography>
                <Typography color={TypographyColor.DARK_GRAY}>Вс: Выходной</Typography>
            </div>
        </div>
    )
}
