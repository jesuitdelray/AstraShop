import { Banner } from "entities/Banner"
import { bannersRowList } from "../model/list"
import styles from "./BannersRow.module.scss"

export function BannersRow() {
    return (
        <div className={styles.container}>
            {bannersRowList.map(item => {
                const { id, isMain, title, desc = "", img } = item
                return <Banner key={id} isMain={isMain} title={title} desc={desc} img={img} />
            })}
        </div>
    )
}
