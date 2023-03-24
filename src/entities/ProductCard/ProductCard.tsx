import styles from "entities/ProductCard/ProductCard.module.scss"
import { Button, ButtonSize, ButtonVariant } from "shared/ui/Button/Button"
import { classNames } from "shared/lib/classNames/classNames"
import { ReactElement } from "react"

export interface ProductCardProps {
    id?: string
    isNew?: boolean
    newText?: string
    className?: string
    image?: string
    description?: string
    price?: number
    currency?: string
    onClick?: () => void
}

export const ProductCard = (props: ProductCardProps): ReactElement => {
    const {
        isNew,
        newText = "новый",
        image,
        className,
        id,
        description,
        price,
        currency,
        onClick,
    } = props

    return (
        <div className={classNames(styles.container, {}, [className])} onClick={onClick}>
            <div className={styles.header}>
                {!!isNew && (
                    <div className={styles.button}>
                        <Button variant={ButtonVariant.FILLED_RED} size={ButtonSize.SMALL}>
                            {newText}
                        </Button>
                    </div>
                )}
                {!!image && (
                    <img className={styles.image} src={image} alt={newText} decoding="async" />
                )}
            </div>
            <div className={styles.footer}>
                {!!description && <div className={styles.footerDescription}>{description}</div>}
                {!!price && !!currency && (
                    <div className={styles.footerPrice}>
                        {price} {currency}
                    </div>
                )}
            </div>
        </div>
    )
}
