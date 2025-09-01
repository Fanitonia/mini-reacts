import { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects-context"
import styles from "./ProjectView.module.scss";
import NoProjectSelected from "../NoProjectSelected/NoProjectSelected";
import ProjectSelected from "../ProjectSelected/ProjectSelected"
import NewProject from "../NewProjectForm/NewProjectForm";

export default function ProjectView() {
    const {selectedProjectId, projects} = useContext(ProjectsContext);
    let content;

    if (selectedProjectId === "noproject") {
        content = <NoProjectSelected></NoProjectSelected>;
    } else if (selectedProjectId === "newproject") {
        content = <NewProject></NewProject>;
    } else {
        const selectedProject = projects.find((p) => p.id === selectedProjectId);
        content = <ProjectSelected project={selectedProject!}></ProjectSelected>;
    }

    return (
        <section className={styles["project-view-container"]}>
            {content}
        </section>
    )
}