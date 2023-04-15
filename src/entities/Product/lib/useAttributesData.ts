import { useTranslation } from "react-i18next"
import { ProductAttributes } from "../model/types"

interface AttributesDataProps {
    description: string
    attributes: ProductAttributes
}

interface ArticleData {
    title: string
    text: string[] | string
}

export function useAttributesData({ description, attributes }: AttributesDataProps) {
    const { t } = useTranslation()

    function getArticlesData(attributes: ProductAttributes): ArticleData[] {
        return Object.entries(attributes).map(([title, data]: [string, any]) => {
            if (data.length === 1) {
                return {
                    title,
                    text: data[0].name,
                }
            }
            return {
                title,
                text: data.map((item: any) => item.name),
            }
        })
    }

    const data = [
        {
            title: t("productDescriptionTitle"),
            text: description,
        },
        ...getArticlesData(attributes),
    ]

    return data
}
