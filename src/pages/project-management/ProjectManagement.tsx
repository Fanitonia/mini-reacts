import { useState } from "react";
import styles from "./ProjectManagement.module.scss";
import type { ProjectData } from "../../projects/project-management/types/ProjectData"
import type { ProjectsState } from "../../projects/project-management/types/ProjectsState"

import ProjectsSideBar from "../../projects/project-management/components/Sidebar/ProjectsSidebar";
import ProjectView from "../../projects/project-management/components/ProjectView/ProjectView";

const InitialProjectsState: ProjectsState = {
    selectedProjectId: "noproject",
    projects: []
}

function ProjectManagement() {
  const [projectsState, setProjectsState] = useState<ProjectsState>(InitialProjectsState);

  function handleShowCreateProject() {
    setProjectsState(prevState => (
      {
        ...prevState,
        selectedProjectId: "newproject"
      }
    ))
  }

  function handleCreateProject(projectData: ProjectData) {
    setProjectsState(prevState => (
      {
        ...prevState,
        projects: [...prevState.projects, projectData]
      }
    ))
  }

  function handleSelectProject(projectId: string) {
    setProjectsState(prevState => (
      {
        ...prevState,
        selectedProjectId: projectId
      }
    ))
  }

  return (
    <div className={styles["global-container"]}>
      <main>
        <ProjectsSideBar onShowCreateProject={handleShowCreateProject} onSelectProject={handleSelectProject} projectsState={projectsState} ></ProjectsSideBar>
        <ProjectView onShowCreateProject={handleShowCreateProject} onCreateProject={handleCreateProject} projectsState={projectsState} ></ProjectView>
      </main>
    </div>
  )
}

export default ProjectManagement
