/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-restricted-syntax */
import { Children, ReactNode, useEffect, useState } from "react"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"

type CSSDimensionType = `${number | string}px` | `${number | string}%`

interface IRowProps {
    children: ReactNode
    schema?: { [key: number]: number[] }
    height?: CSSDimensionType
    gap?: CSSDimensionType
}

export function Row({ children, schema = {}, height, gap }: IRowProps) {
    const [width, setWidth] = useState(window.innerWidth)
    const debouncedResize = useDebounce(() => setWidth(window.innerWidth), 200)

    useEffect(() => {
        window.addEventListener("resize", debouncedResize)
        return () => window.removeEventListener("resize", debouncedResize)
    })

    const childrenArray = Children.toArray(children)
    const schemaArray = Object.entries(schema).reverse()

    if (childrenArray.length === 0) return null

    function Content(): ReactNode {
        if (!schema || !schemaArray.length) {
            return childrenArray[0]
        }

        for (const slot of schemaArray) {
            const [key, value] = slot

            if (width >= +key) {
                return value.map((_, index) => (
                    <div
                        style={{
                            flexGrow: value[index],
                            flexShrink: 1 / value[index],
                            display: value[index] === 0 ? "none" : "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        {childrenArray[index]}
                    </div>
                ))
            }
        }
        return null
    }

    return (
        <div
            style={{
                display: "flex",
                height,
                gap,
            }}
        >
            {Content()}
        </div>
    )
}

interface ILayoutProps {
    children: ReactNode
    gap: CSSDimensionType
}

export function Layout({ children, gap }: ILayoutProps) {
    return <div style={{ display: "flex", flexDirection: "column", gap }}>{children}</div>
}
