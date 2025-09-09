import { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects-context"
import { useState } from "react";
import styles from "./tasks.module.css";
import type { Task } from "../../types/ProjectData"

type TasksProps = {
    tasks?: Task[];
}

export default function Tasks({ tasks = [] }: TasksProps) {
    const { selectedProjectId, addTask, deleteTask } = useContext(ProjectsContext);
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEnteredTask(event.target.value);
    }

    function handleAddClick() {
        setEnteredTask("");
        if (enteredTask.trim() !== "") {
            addTask(selectedProjectId, enteredTask);
        }
    }

    return (
        <div className={styles["tasks-container"]}>
            <h2>Tasks</h2>
            <div className={styles["add-task-container"]}>
                <input type="text" onChange={handleChange} value={enteredTask} />
                <button onClick={handleAddClick}>Add Task</button>
            </div>
            <ol className={styles["tasks-list"]}>
                {tasks.map(task => (
                    <li key={task.id}>
                        <p>{task.text}</p>
                        <button onClick={() => deleteTask(selectedProjectId, task.id)}>Clear</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}