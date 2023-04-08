import { useDispatch, useSelector } from "react-redux"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { getProductFilters } from "../../model/selectors/subcategoryPageSelectors"
import styles from "./CheckboxGroup.module.scss"
import { filterProductsActions } from "../../model/slice/filterProductsSlice"

interface CheckboxGroupProps {
    title: string
    list?: any[] /* filterListsItemType[] */
    groupId: number
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    const { title, list, groupId } = props

    const dispatch = useDispatch()

    function onChangeCheck(groupId: number, checkId: number) {
        dispatch(filterProductsActions.setFilterAttributes({ groupId, checkId }))
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
                                onChange={() => onChangeCheck(groupId, id)}
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
