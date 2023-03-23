import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { information } from "widgets/Footer/model/list"
import styles from "./LinksList.module.scss"

export function LinksList() {
    return (
        <div>
            <p className={styles.title}>Информация</p>
            {information.map(text => (
                <div className={styles.text}>
                    <Typography
                        className={styles.content}
                        color={TypographyColor.DARK_GRAY}
                    >
                        {text.text}
                    </Typography>
                </div>
            ))}
        </div>
    )
}
