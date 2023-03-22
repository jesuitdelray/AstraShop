import styles from "./RangeSlider.module.scss"

interface RangeSliderProps {
    setPriceSort: (prev: any) => void
    setPosition: (obj: any) => void
    minRef: any
    maxRef: any
    total: number
    gap: number
    left: string
    right: string
}

export function RangeSlider(props: RangeSliderProps) {
    const { setPriceSort, minRef, maxRef, setPosition, total, left, right, gap } = props
    console.log(maxRef.current?.value)
    function changeHandler(name: string) {
        if (minRef.current && maxRef.current) {
            const min = +minRef.current.value
            const max = +maxRef.current.value

            if (max - min < gap) {
                if (name === "min") {
                    const min = Number(max - gap).toString()
                    minRef.current.value = min
                    setPriceSort((prev: any) => ({ ...prev, min }))
                    const left = `${(+minRef.current.value / total) * 100}%`
                    const right = `${100 - (+maxRef.current.value / total) * 100}%`
                    setPosition({ left, right })
                } else {
                    const max = Number(min + gap).toString()
                    maxRef.current.value = max
                    setPriceSort((prev: any) => ({ ...prev, max }))
                    const left = `${(+minRef.current.value / total) * 100}%`
                    const right = `${100 - (+maxRef.current.value / total) * 100}%`
                    setPosition({ left, right })
                }
            } else {
                const left = `${(min / total) * 100}%`
                const right = `${100 - (max / total) * 100}%`
                setPosition({ left, right })
                setPriceSort({ min, max })
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.progress} style={{ left, right }} />
            </div>
            <div className={styles.range}>
                <input
                    type="range"
                    ref={minRef}
                    className={styles.min}
                    min="0"
                    max={total}
                    onInput={() => changeHandler("min")}
                />
                <input
                    type="range"
                    ref={maxRef}
                    className={styles.max}
                    min="0"
                    max={total}
                    onInput={() => changeHandler("max")}
                />
            </div>
        </div>
    )
}
