import { Banner, BannerColor, BannerVariant } from "entities/Banner"
import { image2 } from "shared/assets/images/banners"
import styles from "./TopBanner.module.scss"

export function TopBanner() {
    return (
        <div className={styles.wrapper}>
            <Banner
                variant={BannerVariant.TOP}
                color={BannerColor.INVERTED}
                img={image2}
                title={`Чехлы и плёнки 
                для Вашего смартфона`}
                desc={`предлагаем широкий ассортимент чехлов и прочих защитных аксессуаров для 
                мобильных телефонов, смартфонов, планшетов 
                и т. д. Надежная защита Вашего устройства`}
                className={styles.banner}
            />
        </div>
    )
}
