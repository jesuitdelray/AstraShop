import { productDescriptionDataType } from "entities/ProductDescription/model/lists"
import { useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { v4 as uuid } from "uuid"
import styles from "./ProductInfo.module.scss"

interface ArticleProps {
    data: productDescriptionDataType
}

function Article({ data }: ArticleProps) {
    const { title, text, list, isDescription } = data

    const content = useMemo(() => {
        switch (true) {
            case !!text:
                return (
                    <Typography color={TypographyColor.DARK_GRAY} className={styles.text}>
                        {text}
                    </Typography>
                )
            case !!list && !!isDescription:
                return (
                    <ul className={styles.list}>
                        {list?.map(item => (
                            <li key={uuid()} className={styles.text}>
                                <Typography color={TypographyColor.DARK_GRAY}>{item}</Typography>
                            </li>
                        ))}
                    </ul>
                )
            case !!list:
                return list?.map(item => (
                    <Typography
                        key={uuid()}
                        color={TypographyColor.DARK_GRAY}
                        className={styles.text}
                    >
                        {item}
                    </Typography>
                ))
            default:
                return null
        }
    }, [isDescription, list, text])

    return (
        <div className={styles.article}>
            <Typography className={styles.title}>{title}</Typography>
            {content}
        </div>
    )
}

interface ProductInfoProps {
    className?: string
    data: productDescriptionDataType[]
}

export function ProductInfo({ className, data }: ProductInfoProps) {
    return (
        <div className={classNames(styles.info, {}, [className])}>
            {data.map(item => (
                <Article key={item.id} data={item} />
            ))}
        </div>
    )
}
