import { Contacts } from "entities/Contacts"
import { Schedule } from "entities/Schedule"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { useTranslation } from "react-i18next"
import styles from "./ContactsPage.module.scss"

export function ContactsPage() {
    const { t } = useTranslation()
    return (
        <div>
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                {t("Contacts")}
            </Typography>
            <div className={styles.contacts}>
                <Schedule className={styles.schedule} />
                <Contacts className={styles.contact} />
            </div>
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
