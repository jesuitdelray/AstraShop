import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BasketSummary, BasketSummaryVariant } from "entities/Basket"
import { Input } from "shared/ui/Input/Input"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { classNames } from "shared/lib/classNames/classNames"
import { RadioGroup } from "shared/ui/RadioGroup"
import { deliveryOptions as options } from "features/SubmitOrder/model/lists"
import { RoutePath } from "shared/config/routeConfig/const"
import { useTranslation } from "react-i18next"
import styles from "./OrderForm.module.scss"

export function OrderForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        department: "",
        delivery: "option1",
        isConsent: true,
    })

    const { t } = useTranslation()

    const navigate = useNavigate()

    function inputChangeHandler(value: string, input: string) {
        setFormData(prev => ({ ...prev, [input]: value }))
    }

    function radioChangeHandler(value: string) {
        setFormData(prev => ({ ...prev, delivery: value }))
    }

    return (
        <div>
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                {`${t("orderForm")}`}
            </Typography>
            <form action="submit" className={styles.form}>
                <Input
                    value={formData.name}
                    onChange={value => inputChangeHandler(value, "name")}
                    label={`${t("orderFormLabelName")}`}
                    placeholder={`${t("orderFormPlaceholderName")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.name])}
                />
                <Input
                    value={formData.phone}
                    onChange={value => inputChangeHandler(value, "phone")}
                    label={`${t("orderFormPhoneNumber")}`}
                    placeholder="+38 228 322 13 37"
                    isRequired
                    className={classNames(styles.input, {}, [styles.phone])}
                />
                <Input
                    value={formData.email}
                    onChange={value => inputChangeHandler(value, "email")}
                    label="Email"
                    placeholder="example@mail.com"
                    isRequired
                    className={classNames(styles.input, {}, [styles.email])}
                />
                <Input
                    value={formData.city}
                    onChange={value => inputChangeHandler(value, "city")}
                    label={`${t("orderFormLabelCity")}`}
                    placeholder={`${t("orderFormPlaceholderCity")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.city])}
                />
                <RadioGroup
                    title={`${t("orderFormTypeOfDelivery")}`}
                    isRequired
                    options={options}
                    activeInput={formData.delivery}
                    onChange={radioChangeHandler}
                    className={styles.radios}
                />
                <Input
                    value={formData.department}
                    onChange={value => inputChangeHandler(value, "department")}
                    label={`${t("orderFormLabelPost")}`}
                    placeholder={`${t("orderFormPlaceholderPost")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.department])}
                />
                <Checkbox
                    id="checkbox1"
                    checked={formData.isConsent}
                    onChange={() => setFormData(prev => ({ ...prev, isConsent: !prev.isConsent }))}
                    label={`${t("orderFormLabelAgreement")}`}
                    className={styles.consent}
                />
                <BasketSummary
                    className={styles.orderInfo}
                    variant={BasketSummaryVariant.VERTICAL}
                    onOrderClick={() => navigate(RoutePath.order)}
                />
            </form>
        </div>
    )
}
