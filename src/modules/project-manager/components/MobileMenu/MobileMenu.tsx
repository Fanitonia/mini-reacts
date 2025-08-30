import { useState } from "react";
import styles from "./MobileMenu.module.scss";
import type { ProjectsState } from "../../types/ProjectsState";
import menu from "../../assets/menu.svg";
import menuOpen from "../../assets/menu-open.svg";

type MobileMenuProps = {
    projectsState: ProjectsState,
    onSelect: (id: string) => void
    onShowCreateProject: () => void
}

export default function MobileMenu({ projectsState, onSelect, onShowCreateProject }: MobileMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuIcon = isMenuOpen ? menuOpen : menu;

    function toggleMenu() {
        setIsMenuOpen(prevState => (!prevState))
    }

    function onSelectProject(id: string)  {
        onSelect(id);
        toggleMenu();
    }

    function onCreateProject() {
        onShowCreateProject();
        toggleMenu();
    }

    return (
        <div className={styles["mobile-menu"]}>
            <button onClick={toggleMenu}> <img src={menuIcon} alt="Menu" /></button>

            {isMenuOpen &&
                <div className={styles["open-menu"]}>
                    {projectsState.projects.map((project, index) => (
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