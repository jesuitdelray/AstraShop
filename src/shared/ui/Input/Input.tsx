import styles from "./Input.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { ChangeEvent, InputHTMLAttributes } from "react"

type HtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>

export enum InputType {
    TEXT = "text",
    NUMBER = "number",
    EMAIL = "email",
    PASSWORD = "password",
}

interface InputProps extends HtmlInputProps {
    type?: InputType
    placeholder: string
    label?: string
    isRequired?: boolean
    className?: string
    isIncorrect?: boolean
    value: string | number
    onChange: (value: string) => void
}

export function Input(props: InputProps) {
    const {
        type = "text",
        placeholder,
        label,
        isRequired = false,
        className,
        isIncorrect = false,
        value,
        onChange,
    } = props

    const containerClassName = classNames(
        styles.container,
        { [styles.incorrect]: isIncorrect },
        [className]
    )

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        onChange?.(e.target.value)
    }

    return (
        <div className={containerClassName}>
            <label className={styles.label}>
                {label}
                {isRequired && <span className={styles.required}>*</span>}
            </label>
            <input
                onChange={changeHandler}
                value={value}
                type={type}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    )
}
