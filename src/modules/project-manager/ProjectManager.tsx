import styles from "./ProjectManager.module.css";
import ProjectsProvider from "./contexts/projects-context";
import ProjectsSideBar from "./components/Sidebar/ProjectsSidebar";
import ProjectView from "./components/ProjectView/ProjectView";

function ProjectManager() {
  return (
    <ProjectsProvider>
      <div className={styles["global-container"]}>
        <main>
          <ProjectsSideBar></ProjectsSideBar>
          <ProjectView></ProjectView>
        </main>
      </div>
    </ProjectsProvider>
  )
}

export default ProjectManager;
