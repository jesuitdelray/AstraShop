import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./SortProducts.module.scss"

interface SortProductsProps {
    setSortingPattern: (val: string) => void
    sortingPattern: string
    className?: string
}

export function SortProducts(props: SortProductsProps) {
    const { sortingPattern, setSortingPattern, className } = props

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography color={TypographyColor.DARK_GRAY}>Сортировать</Typography>
            <Button
                className={styles.btn}
                variant={
                    sortingPattern === "asc" ? ButtonVariant.FILLED_RED : ButtonVariant.OUTLINE
                }
                onClick={() => setSortingPattern("asc")}
            >
                По возрастанию
            </Button>
            <Button
                className={styles.btn}
                variant={
                    sortingPattern === "desc" ? ButtonVariant.FILLED_RED : ButtonVariant.OUTLINE
                }
                onClick={() => setSortingPattern("desc")}
            >
                По убыванию
            </Button>
        </div>
    )
}
