import { useEffect, useRef, useState, FocusEvent } from "react"
import { Input } from "shared/ui/Input/Input"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { useDispatch, useSelector } from "react-redux"
import { getProductFiltersPriceRange } from "../../model/selectors/subcategoryPageSelectors"
import { filterProductsActions } from "../../model/slice/filterProductsSlice"
import styles from "./PriceFilter.module.scss"
import { FilterItemPriceRange, IPriceRange } from "../../model/types/types"

interface PriceFilterProps {
    title: string
    range: FilterItemPriceRange
    onChangeFilters: () => void
}

export function PriceFilter(props: PriceFilterProps) {
    const { title, range, onChangeFilters } = props

    const GAP = 100
    const MINIMUM_PRICE = range.from
    const MAXIMUM_PRICE = range.to
    const PRICE_RANGE = MAXIMUM_PRICE - MINIMUM_PRICE

    const dispatch = useDispatch()

    const priceSort = useSelector(getProductFiltersPriceRange) || { min: range.from, max: range.to }
    const debounsedChangeFilters = useDebounce(() => onChangeFilters(), 500)

    function setPriceSort(range: IPriceRange) {
        dispatch(filterProductsActions.setPriceRange(range))
        debounsedChangeFilters()
    }

    const left = priceSort ? `${((priceSort.min - MINIMUM_PRICE) / PRICE_RANGE) * 100}%` : "0%"
    const right = priceSort
        ? `${100 - ((priceSort.max - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
        : "0%"

    const [position, setPosition] = useState({ left, right })

    const minRef = useRef<HTMLInputElement>(null)
    const maxRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (minRef.current && maxRef.current) {
            minRef.current.value = priceSort.min.toString()
            maxRef.current.value = priceSort.max.toString()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function inputChangeHandler(value: string, side: string) {
        if (Number.isNaN(+value)) {
            return
        }

        const { min, max } = priceSort

        if (side === "min") {
            if (max - +value < GAP) {
                setPriceSort({ max, min: max - GAP })
                if (minRef.current) minRef.current.value = (max - GAP).toString()
                const left = `${((+max - GAP - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, left }))
            } else if (+value < MINIMUM_PRICE) {
                setPriceSort({ max, min: +value })
                if (minRef.current) minRef.current.value = MINIMUM_PRICE.toString()
                setPosition(prev => ({ ...prev, left: "0%" }))
            } else {
                const left = `${((+value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, left }))
                setPriceSort({ max, min: +value })
                if (minRef.current) minRef.current.value = value
            }
        } else if (side === "max") {
            if (+value - min < GAP) {
                setPriceSort({ min, max: +value })
                if (maxRef.current) {
                    maxRef.current.value = (min + GAP).toString()
                }
                const right = `${100 - ((min + GAP - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, right }))
            } else if (+value > MAXIMUM_PRICE) {
                setPriceSort({ min, max: +value })
                if (maxRef.current) maxRef.current.value = MAXIMUM_PRICE.toString()
                setPosition(prev => ({ ...prev, right: "0%" }))
            } else {
                const right = `${100 - ((+value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition(prev => ({ ...prev, right }))
                setPriceSort({ min, max: +value })
                if (maxRef.current) maxRef.current.value = value
            }
        }
    }

    function onMinBlur(e: FocusEvent<HTMLInputElement>) {
        const { max } = priceSort

        if (+e.target.value < MINIMUM_PRICE) {
            setPriceSort({ max, min: MINIMUM_PRICE })
        } else if (+e.target.value > max) {
            setPriceSort({ max, min: max - GAP })
        }
    }

    function onMaxBlur(e: FocusEvent<HTMLInputElement>) {
        const { min } = priceSort
        if (+e.target.value > MAXIMUM_PRICE) {
            setPriceSort({ min, max: MAXIMUM_PRICE })
        } else if (+e.target.value < priceSort.min) {
            setPriceSort({ min, max: min + GAP })
        }
    }

    function sliderChangeHandler(name: string) {
        if (minRef.current && maxRef.current) {
            const min = +minRef.current.value
            const max = +maxRef.current.value

            if (max - min < GAP) {
                if (name === "min") {
                    const min = Number(max - GAP)
                    minRef.current.value = min.toString()
                    setPriceSort({ max, min })
                    const left = `${((+minRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                    const right = `${
                        100 - ((+maxRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100
                    }%`
                    setPosition({ left, right })
                } else {
                    const max = Number(min + GAP)
                    maxRef.current.value = max.toString()
                    setPriceSort({ min, max })
                    const left = `${((+minRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                    const right = `${
                        100 - ((+maxRef.current.value - MINIMUM_PRICE) / PRICE_RANGE) * 100
                    }%`
                    setPosition({ left, right })
                }
            } else {
                const left = `${((min - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                const right = `${100 - ((max - MINIMUM_PRICE) / PRICE_RANGE) * 100}%`
                setPosition({ left, right })
                setPriceSort({ min, max })
            }
        }
    }

    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <Typography variant={TypographyVariant.P} className={styles.title}>
                {title}
            </Typography>
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    {t("from")}
                </Typography>
                <Input
                    value={priceSort.min.toString()}
                    onChange={value => inputChangeHandler(value, "min")}
                    onBlur={onMinBlur}
                    className={styles.input}
                />
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    {t("to")}
                </Typography>
                <Input
                    value={priceSort.max.toString()}
                    onChange={value => inputChangeHandler(value, "max")}
                    onBlur={onMaxBlur}
                    className={styles.input}
                />
            </div>
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    <div
                        className={styles.progress}
                        style={{ left: position.left, right: position.right }}
                    />
                </div>
                <div className={styles.range}>
                    <input
                        type="range"
                        ref={minRef}
                        className={styles.min}
                        min={MINIMUM_PRICE}
                        max={MAXIMUM_PRICE}
                        onInput={() => sliderChangeHandler("min")}
                    />
                    <input
                        type="range"
                        ref={maxRef}
                        className={styles.max}
                        min={MINIMUM_PRICE}
                        max={MAXIMUM_PRICE}
                        onInput={() => sliderChangeHandler("max")}
                    />
                </div>
            </div>
        </div>
    )
}
