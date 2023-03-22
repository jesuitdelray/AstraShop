import { useEffect, useRef, useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { RangeSlider } from "features/SidebarFilters/ui/PriceFilter/RangeSlider/RangeSlider"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./PriceFilter.module.scss"

const TOTAL = 10000
const GAP = 1000

export function PriceFilter() {
    const [priceSort, setPriceSort] = useState({ min: 0, max: TOTAL / 2 })
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
    }, [])

    function changeHandler(value: string, side: string) {
        if (Number.isNaN(+value)) {
            return
        }

        if (side === "min") {
            if (priceSort.max - +value < GAP) {
                setPriceSort(prev => ({ ...prev, min: prev.max - GAP }))
                if (minRef.current) minRef.current.value = (priceSort.max - GAP).toString()
                const left = `${((+priceSort.max - GAP) / TOTAL) * 100}%`
                setPosition(prev => ({ ...prev, left }))
            } else {
                const left = `${(+value / TOTAL) * 100}%`
                setPosition(prev => ({ ...prev, left }))
                setPriceSort(prev => ({ ...prev, min: +value }))
                if (minRef.current) minRef.current.value = value
            }
        } else if (side === "max") {
            if (+value - priceSort.min < GAP) {
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) {
                    maxRef.current.value = (priceSort.min + GAP).toString()
                }
                const right = `${100 - ((priceSort.min + GAP) / TOTAL) * 100}%`
                setPosition(prev => ({ ...prev, right }))
            } else if (+value > TOTAL) {
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) maxRef.current.value = TOTAL.toString()
                setPosition(prev => ({ ...prev, right: "0%" }))
            } else {
                const right = `${100 - (+value / TOTAL) * 100}%`
                setPosition(prev => ({ ...prev, right }))
                setPriceSort(prev => ({ ...prev, max: +value }))
                if (maxRef.current) maxRef.current.value = value
            }
        }
    }

    function onMaxBlur(e: any) {
        if (e.target.value > TOTAL) {
            setPriceSort(prev => ({ ...prev, max: TOTAL }))
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
                total={TOTAL}
                left={position.left}
                right={position.right}
            />
        </div>
    )
}
