import { classNames } from "shared/lib/classNames/classNames"
import { InputHTMLAttributes, memo } from "react"
import styles from "./RadioButton.module.scss"

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id: string
    className?: string
}

export const RadioButton = (props: RadioButtonProps) => {
    const { id, value, onChange, checked, label, className } = props

    return (
        <div className={classNames(styles.radio, {}, [className])} data-testid="radioBtnContainer">
            <input
                data-testid="radioBtn"
                type="radio"
                className={styles.input}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            {!!label && (
                <label data-testid="radioBtnLabel" htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
        </div>
    )
}
