import {classNames} from "shared/lib/classNames/classNames";
import {InputHTMLAttributes} from "react";
import styles from "./RadioButton.module.scss";

export interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
    className?: string;
}

export const RadioButton = ({
                                name,
                                id,
                                value,
                                onChange,
                                checked,
                                label,
                                className,
                            }: IRadioButton) => {
    return (
        <div className={classNames(styles.radio, {}, [className])}>
            <input
                type="radio"
                className={styles.input}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={id} className={styles.label}>
                {!!label && label}
            </label>
        </div>
    );
};
