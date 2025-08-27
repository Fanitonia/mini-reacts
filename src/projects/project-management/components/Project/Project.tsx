import type { ProjectData } from "../../types/ProjectData"
import styles from "./Project.module.scss";

type ProjectProps = {
    project: ProjectData
}

export default function Project({ project }: ProjectProps) {

    const formatDate = project.dueDate.toDateString();

    return (
        <div className={styles["project-container"]}>
            <h1>{project.title}</h1>
            <p className={styles.date}>{formatDate}</p>
            <p className={styles.description}>{project.description}</p>
            <hr />
            <h2>Tasks</h2>
            <ol>

            </ol>
        </div>
        
    )
}