import { Logo } from "entities/Logo/Logo"
import { MasterCardIcon, VisaIcon } from "shared/assets/icons/others"
import { information } from "../model/list"
import styles from "./Footer.module.scss"

function Logotype() {
    return (
        <div className={styles.logotype}>
            <Logo />
            <p className={styles.logotext}>
                Большой выбор товаров самых различных
                <br />
                категорий, отнадувных матрасов до
                <br />
                планшетных компьютеров
            </p>
        </div>
    )
}

function FooterInformation() {
    return (
        <div>
            <p className={styles.title}>Информация</p>
            {information.map(text => (
                <div className={styles.text}>
                    <p>{text.text}</p>
                </div>
            ))}
        </div>
    )
}

function FooterSchedule() {
    return (
        <div>
            <p className={styles.title}>График работы</p>
            <div className={styles.text}>
                <p>Пн-Пт: 8.00 - 20.00</p>
                <p>Сб: 8.00 - 16.00</p>
                <p>Вс: Выходной</p>
            </div>
        </div>
    )
}

function FooterContacts() {
    return (
        <div>
            <p className={styles.title}>Контакты</p>
            <div className={styles.text}>
                <p>(093) 892-22-26</p>
                <p>(096) 997-50-58</p>
                <p>tovar-7km.office@gmail.com</p>
            </div>
        </div>
    )
}

function Icons() {
    return (
        <div className={styles.icons}>
            <MasterCardIcon />
            <VisaIcon />
        </div>
    )
}

export function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <Logotype />
                <FooterInformation />
                <FooterSchedule />
                <FooterContacts />
                <Icons />
            </div>
        </div>
    )
}
