import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Input } from "shared/ui/Input/Input"
import { SearchIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import styles from "./SearchProduct.module.scss"
import { searchProductsActions } from "../model/slice/searchProductSlice"
import { fetchSearchProducts } from "../model/services/fetchSearchProducts"
import { SearchDropdown } from "./SearchDropdown/SearchDropdown"

interface SearchProductProps {
    className?: string
}

export function SearchProduct({ className }: SearchProductProps) {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const dispatch = useDispatch()

    function fetchSearchData(value: string) {
        if (value.length < 3) {
            dispatch(searchProductsActions.clearProductsList())
            return
        }
        dispatch(fetchSearchProducts(value))
    }

    const debounsedSearch = useDebounce(fetchSearchData, 500)

    function changeHandler(value: string) {
        setValue(value)
        debounsedSearch(value)
    }

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    function mouseEnterHandler() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }

        setIsDropdownOpen(true)
    }

    function mouseLeaveHandler() {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false)
        }, 200)
    }

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <SearchIcon
                className={classNames(
                    styles.icon,
                    { [styles.active]: value || hover || active },
                    []
                )}
            />
            <Input
                value={value}
                onChange={value => changeHandler(value)}
                placeholder="Search Product"
                className={styles.searchbar}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
            {isDropdownOpen && <SearchDropdown />}
        </div>
    )
}
