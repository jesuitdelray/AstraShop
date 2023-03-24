import { useState } from "react"
import { SortProducts } from "features/SortProducts"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { ProductCard } from "entities/ProductCard/ProductCard"
import { ProductCardList } from "../model/list"
import { ProductFilters } from "./ProductFilters/ProductFilters"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    const [sortingPattern, setSortingPattern] = useState("")

    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                Клавиатуры
            </Typography>

            <SortProducts
                sortingPattern={sortingPattern}
                setSortingPattern={setSortingPattern}
                className={styles.desktopFilters}
            />
            <ProductFilters className={styles.mobileFilters} />

            <div className={styles.products}>
                {ProductCardList.map(item => {
                    const { id } = item
                    return <ProductCard key={id} {...item} className={styles.product} />
                })}
            </div>
            <Button variant={ButtonVariant.OUTLINE} className={styles.btn}>
                Показать еще товар
            </Button>
        </div>
    )
}
