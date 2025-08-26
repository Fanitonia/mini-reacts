import type { ProjectData } from "../../../types/ProjectData"
import styles from "./Project.module.scss";

type ProjectProps = {
    project?: ProjectData
    setProjects: React.Dispatch<React.SetStateAction<ProjectData[]>>
}

export default function Project({project, setProjects}: ProjectProps) {
    const date = project?.dueDate;
    const formattedDate = date?.toDateString();
    return (
        <div className={styles["project-container"]}>
            <h1>{project!.title}</h1>
            <p className={styles.date}>{formattedDate}</p>
            <p className={styles.description}>{project!.description}</p>
            <hr />
            <h2>Tasks</h2>
            <ol>
                {project!.tasks?.map((task, index) => (
                    <div key={index}>
                        <li >{task.text}</li>
                        <button >Clear</button>
                    </div>
                    
                ))}
            </ol>
        </div>
        
    )
}