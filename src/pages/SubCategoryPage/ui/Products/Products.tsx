/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import { Product, ProductCard, ProductCardSkeleton } from "entities/Product"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import styles from "./Products.module.scss"

interface ProductsProps {
    isLoading: boolean
    products: Product[]
}

export function Products({ isLoading, products }: ProductsProps) {
    return (
        <div className={styles.products}>
            {isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ProductCardSkeleton key={item} />)
                : products.map(product => {
                      const { id, is_new: isNew, images, name, price } = product
                      return (
                          <ProductCard
                              key={id}
                              id={id}
                              is_new={isNew}
                              name={name}
                              images={images}
                              price={price}
                              Basket={
                                  <ToggleProductInBasket
                                      key={id}
                                      variant={ToggleProductInBasketVariant.ICON}
                                      product={product}
                                  />
                              }
                          />
                      )
                  })}
        </div>
    )
}
