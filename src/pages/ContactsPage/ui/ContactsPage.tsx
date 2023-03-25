import { Contacts } from "entities/Contacts"
import { Schedule } from "entities/Schedule"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import styles from "./ContactsPage.module.scss"

export function ContactsPage() {
    return (
        <div>
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                Контакты
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
