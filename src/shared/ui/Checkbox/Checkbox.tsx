import { useRef, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Checkbox.module.scss"

export function Checkbox({ label, checked, onChange }: any) {
    const ref = useRef(null)
    return (
        // @ts-ignore
        <label className={styles.checkboxWrapper} htmlFor={ref.current?.id}>
            <div
                className={classNames(
                    styles.checkbox,
                    { [styles.checked]: checked },
                    []
                )}
            >
                <input
                    className={styles.checkboxInput}
                    type="checkbox"
                    id="checkbox"
                    ref={ref}
                    checked={checked}
                    onChange={onChange}
                />
                <div className={styles.checkboxTick} />
            </div>
            <p className={styles.label}>{label}</p>
        </label>
    )
}
