import { useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"

import { RadioGroup, RadioGroupDirection } from "entities/RadioGroup/RadioGroup"
import styles from "./OrderForm.module.scss"

const options = [
    { label: "Новая почта", id: "1" },
    { label: "Интайм", id: "2" },
    { label: "Автолюкс", id: "3" },
]

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

    function inputChangeHandler(value: string, input: any) {
        setFormData((prev: any) => ({ ...prev, [input]: value }))
    }

    return (
        <div>
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                Оформление заказа
            </Typography>
            <form action="submit">
                <Input
                    value={formData.name}
                    onChange={value => inputChangeHandler(value, "name")}
                    label="Имя, Фамилия"
                    placeholder="Александр Иванов"
                    isRequired
                    className={styles.input}
                />
                <Input
                    value={formData.phone}
                    onChange={value => inputChangeHandler(value, "phone")}
                    label="Номер телефона"
                    placeholder="+38 228 322 13 37"
                    isRequired
                    className={styles.input}
                />
                <Input
                    value={formData.email}
                    onChange={value => inputChangeHandler(value, "email")}
                    label="Email"
                    placeholder="example@mail.com"
                    isRequired
                    className={styles.input}
                />
                <Input
                    value={formData.city}
                    onChange={value => inputChangeHandler(value, "city")}
                    label="Город"
                    placeholder="Будапешт"
                    isRequired
                    className={styles.input}
                />
                <Input
                    value={formData.city}
                    onChange={value => inputChangeHandler(value, "city")}
                    label="Город"
                    placeholder="Будапешт"
                    isRequired
                    className={styles.input}
                />
                <RadioGroup
                    label="Тип доставки"
                    isRequired
                    options={options}
                    name="delivery"
                    direction={RadioGroupDirection.VERTICAL}
                    className={styles.radioGroup}
                />
                <Input
                    value={formData.city}
                    onChange={value => inputChangeHandler(value, "department")}
                    label="Отделение Новой почты"
                    placeholder="№21 Олександрівський пр..."
                    isRequired
                    className={styles.input}
                />
                <Checkbox
                    id="checkbox1"
                    checked={formData.isConsent}
                    onChange={() => setFormData(prev => ({ ...prev, isConsent: !prev.isConsent }))}
                    label="Я согласен (согласна) на обработку моих персональных данных"
                />
            </form>
        </div>
    )
}
