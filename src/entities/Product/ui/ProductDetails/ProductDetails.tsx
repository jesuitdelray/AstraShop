import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductDetails.module.scss"
import { ProductImages } from "./ProductImages/ProductImages"
import { productImagesList, productDescriptionData } from "./lists"
import { ProductInfo } from "./ProductInfo/ProductInfo"
import { fetchProductDetails } from "../../model/services/fetchProductDetails/fetchProductDetails"
import {
    getProductDetailsError,
    getProductDetailsId,
    getProductDetailsImages,
    getProductDetailsLoading,
    getProductDetailsName,
    getProductDetailsPrice,
} from "../../model/selectors/productDetailsSelectors"

export function ProductDetails() {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchProductDetails(id))
    }, [dispatch, id])

    const productRequestLoading = useSelector(getProductDetailsLoading)
    const productRequestError = useSelector(getProductDetailsError)
    const productId = useSelector(getProductDetailsId)
    const productName = useSelector(getProductDetailsName)
    const productPrice = useSelector(getProductDetailsPrice)
    const currency = "$" // to be changed
    const productImages = useSelector(getProductDetailsImages) // to be used

    let content

    switch (true) {
        case productRequestLoading:
            content = <div>Loading...</div>
            break
        case !!productRequestError:
            content = <div>Error</div>
            break
        case !productId:
            content = <div>Product doesn t exist</div>
            break
        case !!productId:
            content = (
                <>
                    <div className={styles.header}>
                        <Typography variant={TypographyVariant.H3} className={styles.title}>
                            {productName}
                        </Typography>
                        <Typography color={TypographyColor.ACCENT} className={styles.isPresent}>
                            В наличии
                        </Typography>
                        <Typography
                            variant={TypographyVariant.H2}
                            color={TypographyColor.DARK_GRAY}
                            className={styles.price}
                        >
                            {`${productPrice} ${currency}`}
                        </Typography>
                    </div>
                    <ProductImages list={productImagesList} className={styles.images} />
                    <Button variant={ButtonVariant.FILLED_RED} className={styles.btn}>
                        В корзину
                    </Button>
                    <ProductInfo className={styles.description} data={productDescriptionData} />
                </>
            )
            break
        default:
            content = <div>Error</div>
    }

    return <div className={styles.container}>{content}</div>
}
