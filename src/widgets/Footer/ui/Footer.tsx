import { Logo } from "entities/Logo/Logo"
import { MasterCardIcon, VisaIcon } from "shared/assets/icons/others"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { Contacts } from "entities/Contacts/ui/Contacts"
import { Schedule } from "entities/Schedule/ui/Schedule"
import { LinksList } from "entities/LinksList/LinksList"
import styles from "./Footer.module.scss"

function FooterLogo() {
    return (
        <div className={styles.logo}>
            <Logo />
            <Typography className={styles.logotext}>
                Большой выбор товаров самых различных
                <br />
                категорий, отнадувных матрасов до
                <br />
                планшетных компьютеров
            </Typography>
        </div>
    )
}

function Icons() {
    return (
        <div className={styles.icons}>
            <div className={styles.masterCardIcon}>
                <MasterCardIcon />
            </div>
            <div className={styles.visaIcon}>
                <VisaIcon />
            </div>
        </div>
    )
}

export function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <FooterLogo />
                <LinksList />
                <Schedule />
                <Contacts />
                <Icons />
            </div>
        </div>
    )
}
