import styles from "./NoProjectSelected.module.scss";
import noteLogo from "../../assets/note.png";

type NoProjectProps = {
    onShowCreateProject: () => void
}

export default function NoProjectSelected({ onShowCreateProject }: NoProjectProps) {
    return (
        <div className={styles["noproject-container"]}>
            <img src={noteLogo} alt="Yellow Notebook Logo" />
            <h2>No Project Selected</h2>
            <p>Select a project or create a new one</p>
            <button onClick={onShowCreateProject}>Create New Project</button>
        </div>
    )
}