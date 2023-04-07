import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./CheckboxGroup.module.scss"
import { filterListsItemType } from "../../model/lists"

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
                    const { label, id, products, isChecked } = item
                    return (
                        <div className={styles.item} key={id}>
                            <Checkbox
                                label={label}
                                id={id}
                                checked={isChecked || false}
                                onChange={() => null}
                            />
                            {!isChecked && (
                                <Typography color={TypographyColor.DARK_GRAY}>
                                    {products}
                                </Typography>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
