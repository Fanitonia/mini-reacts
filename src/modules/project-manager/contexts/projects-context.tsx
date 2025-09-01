import { createContext, useReducer } from "react"
import type { ProjectsState } from "../types/ProjectsState"
import type { ProjectData } from "../types/ProjectData"
import generateId from "../utils/generateId";

type ProjectsContextType = {
    projects: ProjectData[],
    selectedProjectId: string,
    selectProject: (id: string) => void,
    showCreateProject: () => void,
    cancelCreateProject: () => void,
    createProject: (project: ProjectData) => void,
    deleteProject: (id: string) => void,
    addTask: (projectId: string, task: string) => void,
    deleteTask: (projectId: string, taskId: string) => void,
}

export const ProjectsContext = createContext<ProjectsContextType>({
    projects: [],
    selectedProjectId: "noproject",
    selectProject: () => { },
    showCreateProject: () => { },
    cancelCreateProject: () => { },
    createProject: () => { },
    deleteProject: () => { },
    addTask: () => { },
    deleteTask: () => { }
})

type ProjectsAction = {
    type: "SELECT_PROJECT" | "SHOW_CREATE_PROJECT" | "CANCEL_CREATE_PROJECT" | "CREATE_PROJECT" | "DELETE_PROJECT" | "ADD_TASK" | "DELETE_TASK",
    payload?: any
}

function reducer(state: ProjectsState, action: ProjectsAction): ProjectsState {
    switch (action.type) {
        case "SELECT_PROJECT":
            return { ...state, selectedProjectId: action.payload }
        case "SHOW_CREATE_PROJECT":
            return { ...state, selectedProjectId: "newproject" }
        case "CANCEL_CREATE_PROJECT":
            return { ...state, selectedProjectId: "noproject" }
        case "CREATE_PROJECT":
            return {
                ...state,
                projects: [...state.projects, action.payload],
                selectedProjectId: "noproject"
            }
        case "DELETE_PROJECT":
            const updatedProjects = state.projects.filter(project => project.id !== action.payload);
            return {
                ...state,
                projects: updatedProjects,
                selectedProjectId: "noproject"
            }
        case "ADD_TASK":
            const taskId = generateId();
            const newTask = {
                id: taskId,
                text: action.payload.task,
                isDone: false
            }
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id === action.payload.projectId) {
                        return {
                            ...project,
                            tasks: [newTask, ...(project.tasks || [])]
                        }
                    }
                    return project;
                })
            }
        case "DELETE_TASK":
            return {
                ...state,
                projects: state.projects.map((project) => {
                    if (project.id === action.payload.projectId) {
                        return {
                            ...project,
                            tasks: project.tasks!.filter((task) => (
                                task.id !== action.payload.taskId
                            ))
                        }
                    }
                    return project;
                })
            }
        default:
            throw new Error("Action problem.");
    }
}

const initialState: ProjectsState = {
    selectedProjectId: "noproject",
    projects: []
}

export default function ProjectsProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function selectProject(id: string) {
        dispatch({ type: "SELECT_PROJECT", payload: id });
    }

    function showCreateProject() {
        dispatch({ type: "SHOW_CREATE_PROJECT" });
    }

    function cancelCreateProject() {
        dispatch({ type: "CANCEL_CREATE_PROJECT" });
    }

    function createProject(project: ProjectData) {
        dispatch({ type: "CREATE_PROJECT", payload: project })
    }

    function deleteProject(id: string) {
        dispatch({ type: "DELETE_PROJECT", payload: id })
    }

    function addTask(projectId: string, task: string) {
        dispatch({ type: "ADD_TASK", payload: { projectId, task } })
    }

    function deleteTask(projectId: string, taskId: string) {
        dispatch({ type: "DELETE_TASK", payload: { projectId, taskId } })
    }

    const ProjectContext: ProjectsContextType = {
        projects: state.projects,
        selectedProjectId: state.selectedProjectId,
        selectProject: selectProject,
        showCreateProject: showCreateProject,
        cancelCreateProject: cancelCreateProject,
        createProject: createProject,
        deleteProject: deleteProject,
        addTask: addTask,
        deleteTask: deleteTask
    }

    return (
        <ProjectsContext value={ProjectContext}>
            {children}
        </ProjectsContext>
    )
}