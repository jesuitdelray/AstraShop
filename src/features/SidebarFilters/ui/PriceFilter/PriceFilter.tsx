import { useEffect, useRef, useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { RangeSlider } from "features/SidebarFilters/ui/PriceFilter/RangeSlider/RangeSlider"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./PriceFilter.module.scss"

const MINIMUM_PRICE = 1000
const MAXIMUM_PRICE = 10000
const GAP = 1000

export function PriceFilter() {
    const [priceSort, setPriceSort] = useState({
        min: MINIMUM_PRICE,
        max: (MAXIMUM_PRICE - MINIMUM_PRICE) / 2 + MINIMUM_PRICE,
    })
    const [position, setPosition] = useState({
        left: "0%",
        right: "50%",
    })

    const minRef = useRef<HTMLInputElement>(null)
    const maxRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (minRef.current && maxRef.current) {
            minRef.current.value = priceSort.min.toString()
            maxRef.current.value = priceSort.max.toString()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function changeHandler(value: string, side: string) {
        if (Number.isNaN(+value)) {
            return
        }

        const { min, max } = priceSort

        if (side === "min") {
            if (max - +value < GAP) {
                setPriceSort(prev => ({ ...prev, min: prev.max - GAP }))
                if (minRef.current) minRef.current.value = (max - GAP).toString()
                const left = `${
                    ((+max - GAP - MINIMUM_PRICE) / (MAXIMUM_PRICE - MINIMUM_PRICE)) * 100
                }%`
                setPosition(prev => ({ ...prev, left }))
            } else if (+value < MINIMUM_PRICE) {
                setPriceSort(prev => ({ ...prev, min: +value }))
                if (minRef.current) minRef.current.value = MINIMUM_PRICE.toString()
                setPosition(prev => ({ ...prev, left: "0%" }))
            } else {
                const left = `${
                    ((+value - MINIMUM_PRICE) / (MAXIMUM_PRICE - MINIMUM_PRICE)) * 100
                }%`
                setPosition(prev => ({ ...prev, left }))
                setPriceSort(prev => ({ ...prev, min: +value }))
                if (minRef.current) minRef.current.value = value
            }
        } else if (side === "max") {
            if (+value - min < GAP) {
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) {
                    maxRef.current.value = (min + GAP).toString()
                }
                const right = `${
                    100 - ((min + GAP - MINIMUM_PRICE) / (MAXIMUM_PRICE - MINIMUM_PRICE)) * 100
                }%`
                setPosition(prev => ({ ...prev, right }))
            } else if (+value > MAXIMUM_PRICE) {
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) maxRef.current.value = MAXIMUM_PRICE.toString()
                setPosition(prev => ({ ...prev, right: "0%" }))
            } else {
                const right = `${
                    100 - ((+value - MINIMUM_PRICE) / (MAXIMUM_PRICE - MINIMUM_PRICE)) * 100
                }%`
                setPosition(prev => ({ ...prev, right }))
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) maxRef.current.value = value
            }
        }
    }

    function onMinBlur(e: any) {
        if (e.target.value < MINIMUM_PRICE) {
            setPriceSort(prev => ({ ...prev, min: MINIMUM_PRICE }))
        } else if (e.target.value > priceSort.max) {
            setPriceSort(prev => ({ ...prev, min: prev.max - GAP }))
        }
    }

    function onMaxBlur(e: any) {
        if (e.target.value > MAXIMUM_PRICE) {
            setPriceSort(prev => ({ ...prev, max: MAXIMUM_PRICE }))
        } else if (e.target.value < priceSort.min) {
            setPriceSort(prev => ({ ...prev, max: prev.min + GAP }))
        }
    }

    return (
        <div className={styles.container}>
            <Typography variant={TypographyVariant.P} className={styles.title}>
                Фильтровать по цене
            </Typography>
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    от
                </Typography>
                <Input
                    value={priceSort.min.toString()}
                    onChange={value => changeHandler(value, "min")}
                    onBlur={onMinBlur}
                    className={styles.input}
                />
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    до
                </Typography>
                <Input
                    value={priceSort.max.toString()}
                    onChange={value => changeHandler(value, "max")}
                    onBlur={onMaxBlur}
                    className={styles.input}
                />
            </div>
            <RangeSlider
                setPriceSort={setPriceSort}
                setPosition={setPosition}
                minRef={minRef}
                maxRef={maxRef}
                gap={GAP}
                total={MAXIMUM_PRICE}
                minimum={MINIMUM_PRICE}
                left={position.left}
                right={position.right}
            />
        </div>
    )
}
