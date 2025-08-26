import styles from "./ProjectView.module.scss";
import type { ProjectsState } from "../../types/ProjectsState"
import type { ProjectData } from "../../types/ProjectData"
import NoProject from "../NoProject/NoProject";
import Project from "../Project/Project"
import NewProject from "../NewProject/NewProject";

type ViewProps = {
    onShowCreateProject: () => void,
    onCreateProject: (projectData: ProjectData) => void,
    projectsState: ProjectsState
}

export default function ProjectView({onShowCreateProject, onCreateProject, projectsState}: ViewProps) {

    console.log(projectsState);
    
    let content;

    if(projectsState.selectedProjectId === "noproject") {
        content = <NoProject onShowCreateProject={onShowCreateProject}></NoProject>;
    } else if (projectsState.selectedProjectId === "newproject") {
        content = <NewProject onCreateProject={onCreateProject}></NewProject>;
    } else {
        content = <Project project={projectsState.projects.find((p) => p.id === projectsState.selectedProjectId)!}></Project>
    }

    return ( 
        <section className={styles["project-view-container"]}>
            {content}
        </section>
    )
}