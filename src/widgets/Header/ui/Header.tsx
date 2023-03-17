import { useMemo } from "react"
import { SmallBasket } from "entities/SmallBasket"
import { SearchProduct } from "features/SearchProduct"
import { headerItemsList } from "../model/items"
import styles from "./Header.module.scss"

export function Header() {
    const itemList = useMemo(
        () =>
            headerItemsList.map((item, index) => (
                <div key={index}>{item.text}</div>
            )),
        []
    )

    return (
        <div>
            <SearchProduct />
            <SmallBasket />
            {itemList}
        </div>
    )
}
