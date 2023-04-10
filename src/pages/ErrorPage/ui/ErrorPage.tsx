import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { RoutePath } from "shared/config/routeConfig/const"
import styles from "./ErrorPage.module.scss"

export function ErrorPage() {
    function clickHandler() {
        window.location.href = RoutePath.main
    }

    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H1}>Произошла ошибка</Typography>
            <Button
                variant={ButtonVariant.FILLED_RED}
                className={styles.btn}
                onClick={clickHandler}
            >
                Вернуться на главную
            </Button>
        </div>
    )
}
