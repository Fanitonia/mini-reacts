import type { ProjectData } from "./ProjectData"

export type ProjectsState = {
  selectedProjectId: "noproject" | "newproject" | string,
  projects: ProjectData[]
}