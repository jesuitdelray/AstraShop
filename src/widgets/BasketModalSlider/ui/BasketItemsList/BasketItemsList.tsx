import { Product, ProductCardBasket } from "entities/Product"
import { ChangeProductAmountInBasket, RemoveProductFromBasket } from "features/basketFeatures"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import { useDispatch } from "react-redux"
import { modalsActions } from "entities/ModalSlider"
import styles from "./BasketItemsList.module.scss"

interface BasketItemsListProps {
    list: Product[]
}

export function BasketItemsList({ list }: BasketItemsListProps) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onProductClick(id: number) {
        navigate(`${RoutePath.product_details}/${id}`)
        dispatch(modalsActions.close())
    }

    return (
        <div className={styles.container}>
            {!!list &&
                list.map(item => {
                    const { id, name, price, images } = item
                    return (
                        <ProductCardBasket
                            key={id}
                            id={id}
                            images={images}
                            name={name}
                            price={price}
                            currency="$"
                            Delete={<RemoveProductFromBasket id={id} />}
                            Counter={<ChangeProductAmountInBasket id={id} />}
                            onProductClick={onProductClick}
                        />
                    )
                })}
        </div>
    )
}
