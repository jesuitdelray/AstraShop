import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup"
import { PriceFilter } from "./PriceFilter/PriceFilter"
import { filterListsData as list } from "../model/lists"
import styles from "./SidebarFilters.module.scss"

export function SidebarFilters() {
    return (
        <div>
            <PriceFilter />
            {list.map(item => (
                <CheckboxGroup key={item.id} list={item.list} title={item.title} />
            ))}
        </div>
    )
}
