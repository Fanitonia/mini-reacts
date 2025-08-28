import styles from "./ProjectView.module.scss";
import type { ProjectsState } from "../../types/ProjectsState"
import type { ProjectData } from "../../types/ProjectData"

import NoProjectSelected from "../NoProjectSelected/NoProjectSelected";
import ProjectSelected from "../ProjectSelected/ProjectSelected"
import NewProject from "../NewProjectForm/NewProjectForm";

type ViewProps = {
    onShowCreateProject: () => void,
    onCreateProject: (projectData: ProjectData) => void,
    onCancelCreateProject: () => void,
    onDeleteProject: (projectId: string) => void,
    projectsState: ProjectsState
}

export default function ProjectView({ onShowCreateProject, onCreateProject, onCancelCreateProject, onDeleteProject, projectsState }: ViewProps) {
    let content;

    if (projectsState.selectedProjectId === "noproject") {
        content = <NoProjectSelected onShowCreateProject={onShowCreateProject}></NoProjectSelected>;
    } else if (projectsState.selectedProjectId === "newproject") {
        content = <NewProject onCreateProject={onCreateProject} onCancel={onCancelCreateProject}></NewProject>;
    } else {
        const selectedProject = projectsState.projects.find((p) => p.id === projectsState.selectedProjectId);
        content = <ProjectSelected project={selectedProject!} onDelete={onDeleteProject}></ProjectSelected>;
    }

    return (
        <section className={styles["project-view-container"]}>
            {content}
        </section>
    )
}