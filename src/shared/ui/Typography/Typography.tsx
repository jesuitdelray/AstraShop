import { classNames } from "shared/lib/classNames/classNames"
import { memo, ReactNode } from "react"
import styles from "./Typography.module.scss"

export enum TypographyColor {
    BASE = "base",
    DARK_GRAY = "darkGray",
}

export enum TypographyVariant {
    H1 = "variantH1",
    H2 = "variantH2",
    H3 = "variantH3",
    P = "variantP",
}

interface TextProps {
    className?: string
    children: ReactNode
    variant: TypographyVariant
    color?: TypographyColor
}

export const Typography = memo((props: TextProps) => {
    const { className, children, variant, color = "" } = props

    return (
        <div
            className={classNames(styles.Text, { [styles[color]]: color }, [
                className,
                styles[variant],
            ])}
        >
            {children}
        </div>
    )
})
