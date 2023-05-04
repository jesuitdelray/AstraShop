import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ProductMenu.module.scss"
import { navList as list } from "./const/navList"

export function ProductMenu() {
    const [current, setCurrent] = useState(0)

    return (
        <div>
            <div className={styles.navigation}>
                {list.map((item, index) => (
                    <div
                        className={classNames(styles.navItem, {
                            [styles.navActive]: index === current,
                        })}
                        onClick={() => setCurrent(index)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            <div>{list.map((item, index) => (index === current ? item.el : null))}</div>
        </div>
    )
}
