import styles from "./ProjectsSidebar.module.scss";
import type { ProjectData } from "../../types/ProjectData"

type SideBarProps = {
    projects: ProjectData[];
    setSelectedProject: React.Dispatch<React.SetStateAction<ProjectData | undefined>>;
}

export default function ProjectsSideBar({projects, setSelectedProject}: SideBarProps) {
    function handleClick(project: ProjectData) {
        setSelectedProject(project)
    }
    return (
        <aside className={styles["aside-container"]}>
            <h2>Your Projects</h2>
            <button>Create Project</button>
            <ul>
                {projects.map((project, index) => (
                    <button onClick={() => handleClick(project)} key={index}>{project.title}</button>
                ))}
            </ul>
        </aside>
    )
}