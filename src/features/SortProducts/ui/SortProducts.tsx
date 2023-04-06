import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { sortOrder } from "pages/SubCategoryPage"
import styles from "./SortProducts.module.scss"

interface SortProductsProps {
    sortOrderPattern?: sortOrder
    onClick?: any
    className?: string
}

export function SortProducts(props: SortProductsProps) {
    const { className, sortOrderPattern, onClick } = props

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography color={TypographyColor.DARK_GRAY}>Сортировать</Typography>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === "asc" ? ButtonVariant.FILLED_RED : ButtonVariant.OUTLINE
                }
                onClick={() => onClick?.("asc")}
            >
                По возрастанию
            </Button>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === "desc" ? ButtonVariant.FILLED_RED : ButtonVariant.OUTLINE
                }
                onClick={() => onClick?.("desc")}
            >
                По убыванию
            </Button>
        </div>
    )
}
