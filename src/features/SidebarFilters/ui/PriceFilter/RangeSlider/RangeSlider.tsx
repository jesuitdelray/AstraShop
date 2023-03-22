import styles from "./RangeSlider.module.scss"

interface RangeSliderProps {
    setPriceSort: (prev: any) => void
    setPosition: (obj: any) => void
    minRef: any
    maxRef: any
    total: number
    gap: number
    minimum: number
    left: string
    right: string
}

export function RangeSlider(props: RangeSliderProps) {
    const { setPriceSort, minRef, maxRef, setPosition, total, left, right, gap, minimum } = props

    function changeHandler(name: string) {
        if (minRef.current && maxRef.current) {
            const min = +minRef.current.value
            const max = +maxRef.current.value

            if (max - min < gap) {
                if (name === "min") {
                    const min = Number(max - gap).toString()
                    minRef.current.value = min
                    setPriceSort((prev: any) => ({ ...prev, min }))
                    const left = `${((+minRef.current.value - minimum) / (total - minimum)) * 100}%`
                    const right = `${
                        100 - ((+maxRef.current.value - minimum) / (total - minimum)) * 100
                    }%`
                    setPosition({ left, right })
                } else {
                    const max = Number(min + gap).toString()
                    maxRef.current.value = max
                    setPriceSort((prev: any) => ({ ...prev, max }))
                    const left = `${((+minRef.current.value - minimum) / (total - minimum)) * 100}%`
                    const right = `${
                        100 - ((+maxRef.current.value - minimum) / (total - minimum)) * 100
                    }%`
                    setPosition({ left, right })
                }
            } else {
                const left = `${((min - minimum) / (total - minimum)) * 100}%`
                const right = `${100 - ((max - minimum) / (total - minimum)) * 100}%`
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
                    min={minimum.toString()}
                    max={total}
                    onInput={() => changeHandler("min")}
                />
                <input
                    type="range"
                    ref={maxRef}
                    className={styles.max}
                    min={minimum.toString()}
                    max={total}
                    onInput={() => changeHandler("max")}
                />
            </div>
        </div>
    )
}
