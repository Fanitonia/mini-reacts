import type { ProjectData } from "../../types/ProjectData";
import type { ProjectsState } from "../../types/ProjectsState";
import styles from "./ProjectsSidebar.module.scss";

type SideBarProps = {
    onShowCreateProject: () => void,
    onSelectProject: (projectId: string) => void,
    projectsState: ProjectsState

}

export default function ProjectsSideBar({onShowCreateProject, onSelectProject, projectsState}: SideBarProps) {
    
    return (
        <aside className={styles["aside-container"]}>
            <h2>Your Projects</h2>
            <button onClick={onShowCreateProject}>Create Project</button>
            <ul>
                {projectsState.projects.map((project, index) => (
                    <button onClick={() => onSelectProject(project.id)} key={index}>{project.title}</button>
                ))}
            </ul>
        </aside>
    )
}