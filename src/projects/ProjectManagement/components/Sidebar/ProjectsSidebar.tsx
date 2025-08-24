import styles from "./ProjectsSidebar.module.scss";
import type { ProjectData } from "../../types/ProjectData"

type SideBarProps = {
    projects: ProjectData[];
    setProject: React.Dispatch<React.SetStateAction<ProjectData | undefined>>;
}

export default function ProjectsSideBar({projects, setProject}: SideBarProps) {
    function handleClick(project: ProjectData) {
        setProject(project)
    }
    return (
        <section className={styles["sidebar-container"]}>
            <h1>Your Projects</h1>
            <button>Create Project</button>
            <ol>
                {projects.map((project, index) => (
                    <button onClick={() => handleClick(project)} key={index}>{project.title}</button>
                ))}
            </ol>
        </section>
    )
}