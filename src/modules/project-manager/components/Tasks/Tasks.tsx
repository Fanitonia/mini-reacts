import { useState } from "react";
import styles from "./Tasks.module.scss";
import type { Task } from "../../types/ProjectData"

type TasksProps = {
    onAdd: (task: string) => void
    onDelete: (taskId: string) => void
    tasks?: Task[];
}

export default function Tasks({ onAdd, onDelete, tasks = [] }: TasksProps) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEnteredTask(event.target.value);
    }

    function handleAddClick() {
        setEnteredTask("");
        if (enteredTask.trim() !== "") {
            onAdd(enteredTask);
        }
    }

    return (
        <div className={styles["tasks-container"]}>
            <h2>Tasks</h2>
            <div className={styles["add-task-container"]}>
                <input type="text" onChange={handleChange} value={enteredTask}  />
                <button onClick={handleAddClick}>Add Task</button>
            </div>
            <ol className={styles["tasks-list"]}>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => onDelete(task.id)}>Clear</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}