import { CheckboxGroup } from "entities/CheckboxGroup/ui/CheckboxGroup"
import { PriceFilter } from "./PriceFilter/PriceFilter"

import styles from "./SidebarFilters.module.scss"

export function SidebarFilters() {
    return (
        <div>
            <PriceFilter />
            <CheckboxGroup />
        </div>
    )
}
