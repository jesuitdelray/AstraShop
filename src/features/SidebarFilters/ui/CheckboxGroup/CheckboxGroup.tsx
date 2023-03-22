import { filterListsItemType } from "features/SidebarFilters/model/lists"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./CheckboxGroup.module.scss"

interface CheckboxGroupProps {
    title: string
    list: filterListsItemType[]
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    const { title, list } = props

    return (
        <div className={styles.container}>
            <Typography className={styles.title}>{title}</Typography>
            <div className={styles.list}>
                {list.map(item => {
                    const { label, id, products } = item
                    return (
                        <div className={styles.item} key={id}>
                            <Checkbox label={label} id={id} checked onChange={() => null} />
                            <Typography color={TypographyColor.DARK_GRAY}>{products}</Typography>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
