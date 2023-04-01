import { useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { v4 as uuid } from "uuid"
import styles from "./ProductInfo.module.scss"

interface ArticleData {
    title: string
    text: string[] | string
}

interface ArticleProps {
    data: ArticleData
}

function Article({ data }: ArticleProps) {
    const { title, text } = data

    const content = useMemo(() => {
        switch (true) {
            case !!text && Array.isArray(text) && text.length > 1:
                // @ts-ignore
                return text?.map(item => (
                    <Typography
                        key={uuid()}
                        color={TypographyColor.DARK_GRAY}
                        className={styles.text}
                    >
                        {item}
                    </Typography>
                ))
            case !!text:
                return (
                    <Typography color={TypographyColor.DARK_GRAY} className={styles.text}>
                        {text}
                    </Typography>
                )
            default:
                return null
        }
    }, [text])

    return (
        <div className={styles.article}>
            <Typography className={styles.title}>{title}</Typography>
            {content}
        </div>
    )
}

interface ProductInfoProps {
    className?: string
    description?: string
    attributes: any
}

export function ProductInfo({ className, description, attributes }: ProductInfoProps) {
    function convertDataToObjectArray(data: any) {
        const objectArray: any = []

        Object.keys(data).forEach(key => {
            const title = key.charAt(0).toUpperCase() + key.slice(1)
            const text = Array.isArray(data[key]) ? data[key] : String(data[key])

            objectArray.push({ title, text })
        })

        return objectArray
    }

    const data = [{ title: "Описание", text: description }, ...convertDataToObjectArray(attributes)]

    return (
        <div className={classNames(styles.info, {}, [className])}>
            {data.map((item: any) => (
                <Article key={item.id} data={item} />
            ))}
        </div>
    )
}
