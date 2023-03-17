import { ShoppingBagIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Label, LabelColor, LabelFontSize } from "shared/ui/Label/Label"
import styles from "./SmallBasket.module.scss"

const BASKET_COUNT = 0

interface SmallBasketProps {
    className?: string
}

export function SmallBasket({ className }: SmallBasketProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <ShoppingBagIcon className={styles.icon} />
            <Label
                value={BASKET_COUNT}
                fontSize={LabelFontSize.FONT_NORMAL}
                color={BASKET_COUNT ? LabelColor.RED : LabelColor.GRAY}
            />
        </div>
    )
}
