import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { NovaPochtaIcon, IntimeIcon, AutoluxIcon } from "shared/assets/icons/others"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { useTranslation } from "react-i18next"
import { BannersRow } from "widgets/BannersRow"
import styles from "./DeliveryPage.module.scss"

export function DeliveryPage() {
    const { t } = useTranslation()

    return (
        <div>
            <div className={styles.content}>
                <Typography variant={TypographyVariant.H1} className={styles.title}>
                    {/* Доставка и оплата */}
                    {t("shippingAndPayment")}
                </Typography>

                <Typography variant={TypographyVariant.H3} className={styles.deliveryTitle}>
                    {/* Способ доставки */}
                    {t("deliveryMethod")}
                </Typography>
                <NovaPochtaIcon className={styles.icon} />
                <IntimeIcon className={styles.icon} />
                <AutoluxIcon className={styles.icon} />

                <Typography variant={TypographyVariant.H3} className={styles.returnTitle}>
                    {/* Возврат и обмен товара */}
                    {t("returnAndExchangeOfProducts")}
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY}>
                    {/* Возврат возможен в течение 14 дней после получения (для товаров надлежащего
                    качества). */}
                    {t("returnInfoDetails")}
                    <br />
                    <br />
                    {/*                     Обратная доставка товаров осуществляется по договоренности.
                     */}
                    {t("returnInfoShipping")}
                    <br />
                    <br />
                    {/*                     Возвращаемый товар должен быть в надлежащем виде. То есть: - должен быть
                    упакован в его родную целую упаковку (не порванную, не помятую, не разрезанную и
                    т.п.) - товар должен быть не побит, поцарапан или без каких либо других
                    дефектов. Товар забирается на ремонт в наш сервис. Если данный товар починить
                    невозможно,то он обменивается на такой же или аналогичный(по договоренности с
                    менеджером). Или за него возвращаются его стоимость на карту банка (услуги
                    транспортной компании в эту стоимость не входит). Товар дешевле 100 грн обмену и
                    возврату НЕ ПОДЛЕЖИТ! */}
                    {t("returnInfoObligations")}
                </Typography>
            </div>
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
