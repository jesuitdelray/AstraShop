import { PlusIcon, MinusIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./BasketProductCounter.module.scss"

interface BasketProductCounterProps {
    className?: string
}

export function BasketProductCounter({ className }: BasketProductCounterProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <MinusIcon className={styles.icon} />
            <Typography variant={TypographyVariant.P}>1</Typography>
            <PlusIcon className={styles.icon} />
        </div>
    )
}
