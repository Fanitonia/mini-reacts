import { useContext, useState } from "react";
import { ProjectsContext } from "../../contexts/projects-context"
import styles from "./mobile-menu.module.css";
import menu from "../../assets/menu.svg";
import menuOpen from "../../assets/menu-open.svg";


export default function MobileMenu() {
    const { selectProject, showCreateProject, projects } = useContext(ProjectsContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuIcon = isMenuOpen ? menuOpen : menu;

    function toggleMenu() {
        setIsMenuOpen(prevState => (!prevState))
    }

    function onSelectProject(id: string) {
        selectProject(id);
        toggleMenu();
    }

    function onCreateProject() {
        showCreateProject();
        toggleMenu();
    }

    return (
        <div className={styles["mobile-menu"]}>
            <button onClick={toggleMenu}> <img src={menuIcon} alt="Menu" /></button>

            {isMenuOpen &&
                <div className={styles["open-menu"]}>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <button onClick={() => onSelectProject(project.id)} >{project.title}</button>
                        </li>
                    ))}
                    <button onClick={onCreateProject}>Create Project</button>
                </div>
            }
        </div>
    )
}