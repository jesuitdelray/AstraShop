import { v4 as uuidv4 } from "uuid"
import { useState, useEffect, ChangeEvent } from "react"
import { RadioButtonProps, RadioButton } from "shared/ui/RadioButton/RadioButton"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./RadioGroup.module.scss"

type valueType = string | undefined | readonly string[] | number

export enum RadioGroupDirection {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}

export interface RadioGroupProps {
    direction?: RadioGroupDirection
    className?: string
    label?: string
    name: string
    required?: boolean
    options: Array<RadioButtonProps>
    onChange?: (value: valueType) => void
    selectedValue?: valueType
}

export const RadioGroup = (props: RadioGroupProps) => {
    const {
        label,
        name,
        options,
        selectedValue,
        onChange,
        className,
        direction = RadioGroupDirection.HORIZONTAL,
        required = false,
    } = props
    const [currentValue, setCurrentValue] = useState<valueType>(selectedValue)
    const changeHandler = ((e: ChangeEvent<HTMLInputElement>): void => {
        setCurrentValue(e.target.value)
    })

    useEffect(() => {
        if (currentValue) onChange?.(currentValue)
    }, [currentValue, onChange])

    return (
        <fieldset className={classNames(styles["radioGroup"], {}, [className])}>
            <legend className={styles.legend}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </legend>
            <div className={styles[direction]}>
                {
                    options.map((props: RadioButtonProps) => {
                        const { label, value, id, checked, ...rest } = props
                        return (
                            <RadioButton
                                value={value}
                                label={label}
                                key={id || uuidv4()}
                                id={id}
                                name={name}
                                onChange={changeHandler}
                                checked={value === currentValue}
                                {...rest}
                            />
                        )
                    })
                }
            </div>
        </fieldset>
    )
}
