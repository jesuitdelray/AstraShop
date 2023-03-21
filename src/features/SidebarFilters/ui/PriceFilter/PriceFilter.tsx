import { useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { RangeSlider } from "shared/ui/RangeSlider/RangeSlider"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./PriceFilter.module.scss"

export function PriceFilter() {
    const [priceSort, setPriceSort] = useState({ from: "", to: "" })

    function changeHandler(value: string, side: string) {
        if (Number.isNaN(+value)) {
            return
        }

        setPriceSort(prev => ({ ...prev, [side]: value }))
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
                    value={priceSort.from}
                    onChange={value => changeHandler(value, "from")}
                    placeholder="0"
                    className={styles.input}
                />
                <Typography variant={TypographyVariant.P} color={TypographyColor.DARK_GRAY}>
                    до
                </Typography>
                <Input
                    value={priceSort.to}
                    onChange={value => changeHandler(value, "to")}
                    placeholder="6000"
                    className={styles.input}
                />
            </div>
            {/* <RangeSlider /> */}
        </div>
    )
}
