import { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects-context"
import styles from "./project-sidebar.module.css";
import type { ProjectData } from "../../types/ProjectData";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function ProjectsSideBar() {
    const { selectedProjectId, projects, showCreateProject, selectProject } = useContext(ProjectsContext)

    function isProjectSelected(project: ProjectData) {
        return project.id === selectedProjectId ? styles.active : "";
    }


    return (
        <>
            <aside className={styles["aside-container"]}>
                <h2>Your Projects</h2>
                <button onClick={showCreateProject}>Create Project</button>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <button className={isProjectSelected(project)} onClick={() => selectProject(project.id)} >{project.title}</button>
                        </li>
                    ))}
                </ul>
            </aside>
            <MobileMenu />
        </>
    )
}