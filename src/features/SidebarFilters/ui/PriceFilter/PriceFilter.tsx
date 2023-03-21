import { Input } from "shared/ui/Input/Input"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./PriceFilter.module.scss"

export function PriceFilter() {
    return (
        <div className={styles.container}>
            <Typography variant={TypographyVariant.P} className={styles.title}>
                Фильтровать по цене
            </Typography>
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    от
                </Typography>
                <Input value="" onChange={() => null} className={styles.input} />
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    до
                </Typography>
                <Input value="" onChange={() => null} className={styles.input} />
            </div>
        </div>
    )
}
