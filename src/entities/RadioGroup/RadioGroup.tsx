import { v4 as uuidv4 } from "uuid"
import { useMemo, useState, useEffect } from "react"
import { RadioButtonProps, RadioButton } from "shared/ui/RadioButton/RadioButton"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./RadioGroup.module.scss"

type valueType = string | undefined | readonly string[] | number

export enum RadioDirection {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}

export interface RadioGroupProps {
    direction?: RadioDirection
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
        direction = RadioDirection.HORIZONTAL,
        required = false,
    } = props
    const [state, setState] = useState<valueType>(selectedValue)
    useEffect(() => {
        onChange?.(state)
    }, [onChange, state])

    const groupList = useMemo(() => (
        options.map(
            ({ label, value, id, checked, ...rest }: RadioButtonProps) => (
                <RadioButton
                    value={value}
                    label={label}
                    key={id || uuidv4()}
                    id={id}
                    name={name}
                    onChange={() => setState(value)}
                    checked={value === state}
                    {...rest}
                />
            )
        )
    ), [options, name, state])

    return (
        <fieldset className={classNames(styles["radio-group"], {}, [className])}>
            <legend className={styles.legend}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </legend>
            <div className={styles[direction]}>{groupList}</div>
        </fieldset>
    )
}
