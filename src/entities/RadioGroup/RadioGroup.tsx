import {ChangeEvent} from "react";
import {IRadioButton, RadioButton} from "shared/ui/RadioButton/RadioButton";
import {CommonUtils} from "utils/CommonUtils";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./RadioGroup.module.scss";

export enum RadioDirection {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}

export interface IRadioGroup {
    direction?: RadioDirection;
    className?: string;
    label?: string;
    name: string;
    required?: boolean;
    options: Array<IRadioButton>;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup = ({
                               label,
                               name,
                               options,
                               onChange,
                               className,
                               direction = RadioDirection.HORIZONTAL,
                               required = false,
                           }: IRadioGroup) => {
    function renderOptions() {
        return options.map(
            ({label, value, id, checked, ...rest}: IRadioButton) => {
                return (
                    <RadioButton
                        value={value}
                        label={label}
                        key={CommonUtils.getId}
                        id={id}
                        name={name}
                        onChange={onChange}
                        checked={checked}
                        {...rest}
                    />
                );
            }
        );
    }

    return (
        <fieldset className={classNames(styles["radio-group"], {}, [className])}>
            <legend className={styles["legend"]}>
                {label}
                {required && <span className={styles["required"]}>*</span>}
            </legend>
            <div className={styles[direction]}>{renderOptions()}</div>
        </fieldset>
    );
};
