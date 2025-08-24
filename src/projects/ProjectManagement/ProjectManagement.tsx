import { useState } from "react";
import styles from "./ProjectManagement.module.css";
import type { ProjectData } from "./types/ProjectData"

import ProjectsSideBar from "./components/Sidebar/ProjectsSidebar";
import ProjectView from "./components/ProjectView/ProjectView";

const projects: ProjectData[] = [
  {
    title: "React Project Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ipsum sapien. Vestibulum eget accumsan quam. Nam vehicula lectus mauris, ac sagittis ipsum molestie eget.",
    dueDate: new Date("2025-08-22"),
    tasks: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies justo eu justo congue mattis.",
        isDone: false
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        isDone: false
      }
    ]
  },
  {
    title: "Project2",
    description: "a project",
    dueDate: new Date("2025-08-22"),
    tasks: [
      {
        text: "test",
        isDone: false
      }
    ]
  }
]

function ProjectManagement() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | undefined>(undefined);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["container"]}>
        <ProjectsSideBar projects={projects} setProject={setSelectedProject}></ProjectsSideBar>
        <ProjectView project={selectedProject}></ProjectView>
      </div>
    </div>
  )
}

export default ProjectManagement
