import { useDispatch, useSelector } from "react-redux"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import {
    getProductFilters,
    getProductFiltersAttributes,
} from "../../model/selectors/subcategoryPageSelectors"
import styles from "./CheckboxGroup.module.scss"
import { filterProductsActions } from "../../model/slice/filterProductsSlice"
import { deleteQueryParams } from "shared/lib/url/addQueryParams/addQueryParams"

interface CheckboxGroupProps {
    title: string
    list?: any[] /* filterListsItemType[] */
    groupId: number
    onChangeFilters: () => void
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    const { title, list, groupId, onChangeFilters } = props

    const dispatch = useDispatch()
    const attributes = useSelector(getProductFiltersAttributes)

    function onChangeCheck(checkId: number) {
        dispatch(filterProductsActions.setFilterAttributes(checkId))
        deleteQueryParams("attr")
        onChangeFilters?.()
    }

    return (
        <div className={styles.container}>
            <Typography className={styles.title}>{title}</Typography>
            <div className={styles.list}>
                {list?.map(item => {
                    const { name, id } = item
                    const isChecked = attributes.some(item => item == id)

                    return (
                        <div className={styles.item} key={id}>
                            <Checkbox
                                label={name}
                                id={id}
                                checked={isChecked || false}
                                onChange={() => onChangeCheck(id)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
