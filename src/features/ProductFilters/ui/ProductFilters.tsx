import { classNames } from "shared/lib/classNames/classNames"
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup"
import { PriceFilter } from "./PriceFilter/PriceFilter"
import { filterListsData as list } from "../model/lists"

interface ProductFiltersProps {
    className?: string
}

export function ProductFilters({ className }: ProductFiltersProps) {
    return (
        <div className={classNames("", {}, [className])}>
            <PriceFilter />
            {list.map(item => (
                <CheckboxGroup key={item.id} list={item.list} title={item.title} />
            ))}
        </div>
    )
}
