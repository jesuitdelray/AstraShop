import { classNames } from "shared/lib/classNames/classNames"
import { useState } from "react"
import { productImagesListType } from "../../model/lists"
import styles from "./ProductImages.module.scss"

interface ProductImagesProps {
    className?: string
    list: productImagesListType[]
}

export function ProductImages({ className, list }: ProductImagesProps) {
    const [active, setActive] = useState(0)

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.mainImg}>
                {list.map((item, index) => {
                    const { id, img } = item
                    return index === active ? <img src={img} alt="" key={id} /> : null
                })}
            </div>
            <div className={styles.imgRow}>
                {list.map((item, index) => {
                    const { id, img } = item
                    return (
                        <div
                            key={id}
                            onClick={() => setActive(index)}
                            className={classNames(styles.secondaryImg, {
                                [styles.active]: active === index,
                            })}
                        >
                            <img src={img} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
