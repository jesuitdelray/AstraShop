import { AppLink } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/const"
import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import {
    getSearchProductsError,
    getSearchProductsList,
    getSearchProductsLoading,
} from "../../model/selectors/searchProductsSelectors"
import styles from "./SearchDropdown.module.scss"

interface SearchDropdownProps {
    className?: string
    isOpen: boolean
}

export function SearchDropdown(props: SearchDropdownProps) {
    const { className, isOpen } = props
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsDropdownOpen(true)
        } else {
            setTimeout(() => setIsDropdownOpen(false), 100)
        }
    }, [isOpen])

    const productsList = useSelector(getSearchProductsList)
    const isLoading = useSelector(getSearchProductsLoading)
    const error = useSelector(getSearchProductsError)

    const content = useMemo(() => {
        switch (true) {
            case !!error:
                return <div>{error}</div>
            case isLoading:
                return <div>Loading...</div>
            case productsList.length < 1:
                return <div>No products</div>
            case productsList.length > 0:
                return productsList.map(item => {
                    const { id, name } = item

                    return (
                        <AppLink
                            key={id}
                            to={`${RoutePath.product_details}/${id}`}
                            className={styles.product}
                        >
                            {name}
                        </AppLink>
                    )
                })
            default:
                return <div>Error</div>
        }
    }, [error, isLoading, productsList])

    if (!isDropdownOpen) return null

    return <div className={styles.container}>{content}</div>
}
