import { classNames } from "shared/lib/classNames/classNames"
import { memo, ReactNode } from "react"
import styles from "./Typography.module.scss"

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
}

export const Typography = memo((props: TextProps) => {
    const { className, children, variant } = props

    return (
        <div
            className={classNames(styles.Text, {}, [
                className,
                styles[variant],
            ])}
        >
            {children}
        </div>
    )
})
