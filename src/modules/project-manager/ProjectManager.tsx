import { useState } from "react";
import styles from "./ProjectManager.module.scss";
import type { ProjectData } from "./types/ProjectData"
import type { ProjectsState } from "./types/ProjectsState"
import generateId from "./utils/generateId";

import ProjectsSideBar from "./components/Sidebar/ProjectsSidebar";
import ProjectView from "./components/ProjectView/ProjectView";

const InitialProjectsState: ProjectsState = {
  selectedProjectId: "noproject",
  projects: []
}

function ProjectManager() {
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
        projects: [...prevState.projects, projectData],
        selectedProjectId: "noproject"
      }
    ))
  }

  function handleCancelCreateProject() {
    setProjectsState(prevState => (
      {
        ...prevState,
        selectedProjectId: "noproject"
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

  function handleDeleteProject(projectId: string) {
    setProjectsState(prevState => {
      const updatedProjects = prevState.projects.filter(project => project.id !== projectId);

      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: "noproject"
      }
    })
  }

  function handleAddTask(task: string) {
    setProjectsState(prevState => {
      const taskId = generateId();
      const newTask = {
        id: taskId,
        text: task,
        isDone: false
      }

      return {
        ...prevState,
        projects: prevState.projects.map(project => {
          if (project.id === prevState.selectedProjectId) {
            return {
              ...project,
              tasks: [newTask, ...(project.tasks || [])]
            }
          }
          return project;
        })
      }
    })
  }

  function handleDeleteTask(taskId: string) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === prevState.selectedProjectId) {
            return {
              ...project,
              tasks: project.tasks!.filter((task) => (
                task.id !== taskId
              ))
            }
          }
          return project;
        })
      }
    })
  }

  return (
    <div className={styles["global-container"]}>
      <main>
        <ProjectsSideBar
          onShowCreateProject={handleShowCreateProject}
          onSelectProject={handleSelectProject}
          projectsState={projectsState} ></ProjectsSideBar>
        <ProjectView
          onShowCreateProject={handleShowCreateProject}
          onCreateProject={handleCreateProject}
          onCancelCreateProject={handleCancelCreateProject}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          projectsState={projectsState} ></ProjectView>
      </main>
    </div>
  )
}

export default ProjectManager;
