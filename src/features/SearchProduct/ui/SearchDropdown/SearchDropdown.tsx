import { AppLink } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/const"
import { useDispatch, useSelector } from "react-redux"
import { modalsActions } from "entities/ModalSlider"
import { useTranslation } from "react-i18next"
import {
    getSearchProductsError,
    getSearchProductsList,
    getSearchProductsLoading,
} from "../../model/selectors/searchProductsSelectors"
import styles from "./SearchDropdown.module.scss"

interface SearchDropdownProps {
    className?: string
    setIsDropdownOpen: (arg: boolean) => void
}

export function SearchDropdown(props: SearchDropdownProps) {
    const { className, setIsDropdownOpen } = props

    const productsList = useSelector(getSearchProductsList)
    const isLoading = useSelector(getSearchProductsLoading)
    const error = useSelector(getSearchProductsError)

    const dispatch = useDispatch()

    const { t } = useTranslation()

    const content = (() => {
        switch (true) {
            case !!error:
                return <div>{error}</div>
            case isLoading:
                return <div>{t("loadingProcessLoading")}</div>
            case productsList.length < 1:
                return <div>{t("loadingProcessNoProduct")}</div>
            case productsList.length > 0:
                return productsList.map(item => {
                    const { id, name } = item

                    return (
                        <AppLink
                            key={id}
                            to={`${RoutePath.product_details}/${id}`}
                            className={styles.product}
                            onClick={() => {
                                dispatch(modalsActions.close())
                                setIsDropdownOpen(false)
                            }}
                        >
                            {name}
                        </AppLink>
                    )
                })
            default:
                return <div>{t("error")}</div>
        }
    })()

    return <div className={styles.container}>{content}</div>
}
