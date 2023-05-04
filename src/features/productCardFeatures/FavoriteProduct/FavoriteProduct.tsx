import { Heart } from "shared/assets/icons/productCardFeatures"
import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./FavoriteProduct.module.scss"

interface FavoriteProductProps {
    className?: string
}

export function FavoriteProduct({ className }: FavoriteProductProps) {
    const [isActive, setIsActive] = useState(false)

    function clickHandler(e: MouseEvent) {
        setIsActive(prev => !prev)
        e.stopPropagation()
    }

    return (
        <Heart
            onClick={clickHandler}
            className={classNames(styles.heartIcon, { [styles.active]: isActive }, [className])}
        />
    )
}
