import { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects-context"
import type { ProjectData } from "../../types/ProjectData"
import styles from "./ProjectSelected.module.scss";
import Tasks from "../Tasks/Tasks";

export default function ProjectSelected({project}: {project: ProjectData}) {
    const {deleteProject} = useContext(ProjectsContext);

    const formattedDate = project.dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
        <div className={styles["project-container"]}>
            <header>
                <div className={styles["title-container"]}>
                    <h1>{project.title}</h1>
                    <button onClick={() => deleteProject(project.id)}>Delete</button>
                </div>
                <p className={styles.date}>{formattedDate}</p>
                <p className={styles.description}>{project.description}</p>
            </header>
            <Tasks tasks={project.tasks} />
        </div>
    )
}