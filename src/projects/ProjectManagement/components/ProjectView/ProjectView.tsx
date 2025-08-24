import styles from "./ProjectView.module.scss";
import type { ProjectData } from "../../types/ProjectData"
import NoProject from "./NoProject/NoProject";
import Project from "./Project/Project"

type ViewProps = {
    project?: ProjectData;
}

export default function ProjectView({project}: ViewProps) {

    const isAProjectSelected: boolean = project !== undefined;
    return (
        <section className={styles["project-view-container"]}>
        {isAProjectSelected ? 
            <Project project={project}></Project>
            : 
            <NoProject></NoProject> }
        </section>
    )
}