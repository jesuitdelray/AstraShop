import { Banner, BannerVariant } from "entities/Banner"
import { useTranslation } from "react-i18next"
import { bannersRowList } from "../model/list"
import styles from "./BannersRow.module.scss"

export function BannersRow() {
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            {bannersRowList.map((item, index) => {
                const { id, title, desc = "", img } = item
                const variant = index === 0 ? BannerVariant.MAIN : BannerVariant.NORMAL
                return (
                    <Banner
                        key={id}
                        variant={variant}
                        title={t(`banner${id}`)}
                        desc={t("bannerDesc")}
                        img={img}
                    />
                )
            })}
        </div>
    )
}
