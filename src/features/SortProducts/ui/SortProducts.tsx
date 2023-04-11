import { classNames } from "shared/lib/classNames/classNames"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./SortProducts.module.scss"
import { sortProductsOrderType } from "../model/types/types"
import { getSortProductsOrder } from "../model/selectors/sortProductsSelectors"
import { sortProductsAction } from "../model/slice/sortProductsSlice"

interface SortProductsProps {
    className?: string
    onChangeSort?: () => void
}

export function SortProducts(props: SortProductsProps) {
    const { className, onChangeSort } = props

    const dispatch = useDispatch()
    const sortOrderPattern = useSelector(getSortProductsOrder)

    function clickHandler(order: sortProductsOrderType) {
        dispatch(sortProductsAction.setOrder(order))
        onChangeSort?.()
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography color={TypographyColor.DARK_GRAY}>Сортировать</Typography>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === sortProductsOrderType.ASC
                        ? ButtonVariant.FILLED_RED
                        : ButtonVariant.OUTLINE
                }
                onClick={() => clickHandler(sortProductsOrderType.ASC)}
            >
                По возрастанию
            </Button>
            <Button
                className={styles.btn}
                variant={
                    sortOrderPattern === sortProductsOrderType.DESC
                        ? ButtonVariant.FILLED_RED
                        : ButtonVariant.OUTLINE
                }
                onClick={() => clickHandler(sortProductsOrderType.DESC)}
            >
                По убыванию
            </Button>
        </div>
    )
}
