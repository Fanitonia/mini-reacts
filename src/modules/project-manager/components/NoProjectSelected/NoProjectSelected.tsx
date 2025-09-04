import { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects-context"
import styles from "./no-project-selected.module.css";
import noteLogo from "../../assets/note.png";

export default function NoProjectSelected() {
    const { showCreateProject } = useContext(ProjectsContext);
    return (
        <div className={styles["noproject-container"]}>
            <img src={noteLogo} alt="Yellow Notebook Logo" />
            <h2>No Project Selected</h2>
            <p>Select a project or create a new one</p>
            <button onClick={showCreateProject}>Create New Project</button>
        </div>
    )
}