import { classNames, Mods } from "shared/lib/classNames/classNames"
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import styles from "./Button.module.scss"

export enum ButtonTheme {
    OUTLINE = "outline",
    FULLFILLED_RED = "fullfilled-red",
    FULLFILLED_GREY = "fullfilled-grey"
}

export enum ButtonSize {
    SMALL = "small",
    LARGE = "large"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.LARGE,
        disabled,
        children,
        ...restProps
    } = props

    const mods: Mods = {
        [styles[theme]]: true,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    }

    return (
        <button
            type="button"
            className={classNames(styles.button, mods, [className])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
})