import type { ProjectData } from "../../types/ProjectData"
import styles from "./ProjectSelected.module.scss";

type ProjectProps = {
    project: ProjectData
    onDelete: (projectId: string) => void
}

export default function ProjectSelected({ project, onDelete }: ProjectProps) {

    const formattedDate = project.dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    function handleDelete(projectId: string) {
        onDelete(projectId);
    }

    return (
        <>
            <div className={styles["project-container"]}>
                <header>
                    <div className={styles["title-container"]}>
                        <h1>{project.title}</h1>
                        <button onClick={() => handleDelete(project.id)}>Delete</button>
                    </div>
                    <p className={styles.date}>{formattedDate}</p>
                    <p className={styles.description}>{project.description}</p>
                </header>
                <div className={styles["tasks-container"]}>
                    <h2>Tasks</h2>
                    <ol>

                    </ol>
                </div>

            </div>
        </>
    )
}