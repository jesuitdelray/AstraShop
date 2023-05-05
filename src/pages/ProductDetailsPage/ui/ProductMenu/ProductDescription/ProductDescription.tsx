import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ProductDescription.module.scss"
import {
    getProductDetailsAttributes,
    getProductDetailsDescription,
} from "../../../model/selectors/productDetailsSelectors"
import { ProductInfo } from "./ProductInfo/ProductInfo"

export function ProductDescription() {
    const [isFullHeight, setIsFullHeight] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const productDesc = /* useSelector(getProductDetailsDescription) // */ `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ex eget justo pretium euismod. Sed vel metus non mauris malesuada vestibulum eu vitae nibh. Aenean eget erat vitae magna hendrerit congue. Fusce eu felis vel sem vulputate ullamcorper. Sed sit amet placerat dolor. Nullam id leo in sapien vestibulum pretium. Quisque eu lectus quis sapien malesuada finibus eget eu risus. Etiam ultrices bibendum tortor, quis ultrices velit convallis eu. In hac habitasse platea dictumst. Suspendisse malesuada elit sapien, ut rhoncus nulla tempus nec. Vestibulum nec nisl lacus. Quisque ut odio auctor, lobortis mi vitae, lobortis nulla. Sed euismod mi vel neque malesuada, id hendrerit nisi lobortis. Phasellus sit amet luctus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ex eget justo pretium euismod. Sed vel metus non mauris malesuada vestibulum eu vitae nibh. Aenean eget erat vitae magna hendrerit congue. Fusce eu felis vel sem vulputate ullamcorper. Sed sit amet placerat dolor. Nullam id leo in sapien vestibulum pretium. Quisque eu lectus quis sapien malesuada finibus eget eu risus. Etiam ultrices bibendum tortor, quis ultrices velit convallis eu. In hac habitasse platea dictumst. Suspendisse malesuada elit sapien, ut rhoncus nulla tempus nec. Vestibulum nec nisl lacus. Quisque ut odio auctor, lobortis mi vitae, lobortis nulla. Sed euismod mi vel neque malesuada, id hendrerit nisi lobortis. Phasellus sit amet luctus nunc.`
    const productAttributes = useSelector(getProductDetailsAttributes)

    function handleResize() {
        console.log("fired")
    }

    const containerRef = useRef()

    useEffect(() => {
        if (!containerRef?.current) return
        console.log(containerRef.current.scrollHeight, containerRef.current.clientHeight)
        setIsFullHeight(containerRef.current.scrollHeight > containerRef.current.clientHeight)
    }, [])

    return (
        <div
            className={classNames(styles.container, { [styles.expanded]: isExpanded })}
            ref={containerRef}
        >
            <ProductInfo description={productDesc} attributes={productAttributes} />

            {isFullHeight && (
                <Button onClick={() => setIsExpanded(prev => !prev)} className={styles.btn}>
                    {isExpanded ? "Hide" : "Show more"}
                </Button>
            )}
        </div>
    )
}
