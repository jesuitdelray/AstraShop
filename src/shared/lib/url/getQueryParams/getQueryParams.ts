export function getQueryParams(filters) {
    return filters
        .map(item => {
            const { id, type } = item

            if (type === "price_range") {
                const { min, max } = item.range
                return `${id}?min=${min}&max=${max}`
            }
            if (type === "attributes") {
                return ""

                if (!item.checkboxIds) return ""

                const { checkboxIds } = item
                return `${id}?id=${checkboxIds}`
            }

            return ""
        })
        .join("")
}
