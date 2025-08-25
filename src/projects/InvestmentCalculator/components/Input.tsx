import styles from "./Input.module.scss"

type InputProps = {
    label: string;
    id: string;
    spanValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, id, spanValue, onChange}: InputProps) {
    return (
        <div className={styles["input-container"]}>
            <label htmlFor={id}>{label}</label>
            <div>
                <input className={styles.input} type="number" id={id} defaultValue={0} onChange={onChange}/>
                <span>{spanValue}</span>
            </div>
        </div>
    );
 }