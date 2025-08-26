import styles from "./NewProject.module.scss";
import Input from "../Input/Input";

export default function NewProject() {
    return (
        <div className={styles["new-project-container"]}>
            <menu>
                <li><button className={styles["cancel-button"]}>Cancel</button></li>
                <li><button className={styles["save-button"]}>Save</button></li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" isTextArea />
                <Input label="Due Date" type="date" />
            </div>
        </div>
    )
}