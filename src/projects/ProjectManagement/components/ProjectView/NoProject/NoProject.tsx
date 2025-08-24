import styles from "./NoProject.module.scss";

export default function() {
    return (
        <div className={styles["noproject-container"]}>
            <h1>No Project Selected</h1>
            <p>Select a project or create a new one</p>
            <button>Create new project</button>
        </div>
    )
}