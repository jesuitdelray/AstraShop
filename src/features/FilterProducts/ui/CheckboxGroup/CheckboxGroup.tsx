import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./CheckboxGroup.module.scss"
import { filterListsItemType } from "../../model/lists"

interface CheckboxGroupProps {
    title: string
    list?: any[] /* filterListsItemType[] */
    groupId: number
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    const { title, list, groupId } = props

    function onChangeCheck(id: number) {
        console.log(groupId)
        console.log(id)
    }

    return (
        <div className={styles.container}>
            <Typography className={styles.title}>{title}</Typography>
            <div className={styles.list}>
                {list?.map(item => {
                    const { name, id, products, isChecked } = item
                    return (
                        <div className={styles.item} key={id}>
                            <Checkbox
                                label={name}
                                id={id}
                                checked={isChecked || false}
                                onChange={() => onChangeCheck(id)}
                            />
                            {/* {!isChecked && (
                                <Typography color={TypographyColor.DARK_GRAY}>
                                    {products}
                                </Typography>
                            )} */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
