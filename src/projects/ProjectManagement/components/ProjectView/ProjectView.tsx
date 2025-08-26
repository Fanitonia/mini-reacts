import styles from "./ProjectView.module.scss";
import type { ProjectData } from "../../types/ProjectData"
import NoProject from "./NoProject/NoProject";
import Project from "./Project/Project"

type ViewProps = {
    project?: ProjectData;
    setProjects: React.Dispatch<React.SetStateAction<ProjectData[]>>;
}

export default function ProjectView({project, setProjects}: ViewProps) {

    const isAProjectSelected: boolean = project !== undefined;
    return (
        <section className={styles["project-view-container"]}>
        {isAProjectSelected ? 
            <Project setProjects={setProjects} project={project}></Project>
            : 
            <NoProject></NoProject> }
        </section>
    )
}