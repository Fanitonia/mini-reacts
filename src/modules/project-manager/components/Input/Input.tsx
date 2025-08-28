import styles from "./Input.module.scss"
import type { ComponentPropsWithRef } from "react";

type InputProps = {
    label: string;
    isTextArea?: boolean;
} & (ComponentPropsWithRef<"input"> | ComponentPropsWithRef<"textarea">);

export default function Input({ label, isTextArea = false, ...rest }: InputProps) {
    return (
        <p className={styles["input-container"]}>
            <label>{label}</label>
            {isTextArea ?
                <textarea className={styles["input-box"]} {...(rest as ComponentPropsWithRef<"textarea">)} />
                :
                <input className={styles["input-box"]} {...(rest as ComponentPropsWithRef<"input">)} />
            }
        </p>
    )
}