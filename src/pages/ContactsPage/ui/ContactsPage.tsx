import { Contacts } from "entities/Contacts"
import { Schedule } from "entities/Schedule"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { BannersRow } from "widgets/BannersRow"
import { ProductCardList } from "widgets/ProductCarousel/model/list"
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel"
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
            <ProductCarousel list={ProductCardList} title="Топовые позиции" />
            <BannersRow />
        </div>
    )
}
