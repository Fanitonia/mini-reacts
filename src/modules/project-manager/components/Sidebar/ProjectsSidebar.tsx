import styles from "./ProjectsSidebar.module.scss";
import type { ProjectData } from "../../types/ProjectData";
import type { ProjectsState } from "../../types/ProjectsState";


type SideBarProps = {
    onShowCreateProject: () => void,
    onSelectProject: (projectId: string) => void,
    projectsState: ProjectsState
}

export default function ProjectsSideBar({ onShowCreateProject, onSelectProject, projectsState }: SideBarProps) {

    function isProjectSelected(project: ProjectData) {
        return project.id === projectsState.selectedProjectId ? styles.active : "";
    }

    return (
        <aside className={styles["aside-container"]}>
            <h2>Your Projects</h2>
            <button onClick={onShowCreateProject}>Create Project</button>
            <ul>
                {projectsState.projects.map((project, index) => (
                    <li key={index}>
                        <button className={isProjectSelected(project)} onClick={() => onSelectProject(project.id)} >{project.title}</button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}