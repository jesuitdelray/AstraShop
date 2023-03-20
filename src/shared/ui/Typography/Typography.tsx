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
    H4 = "variantH4",
    P = "variantP",
}

interface TextProps {
    className?: string
    children: ReactNode
    variant: TypographyVariant
    color?: TypographyColor
    isBold?: boolean
}

export const Typography = memo((props: TextProps) => {
    const { className, children, variant, color = "", isBold = false } = props

    return (
        <div
            className={classNames(styles.Text, { [styles[color]]: color, [styles.bold]: isBold }, [
                className,
                styles[variant],
            ])}
        >
            {children}
        </div>
    )
})
