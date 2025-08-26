import styles from "./NewProject.module.scss";
import { useRef } from "react";
import type { ProjectData } from "../../types/ProjectData"
import Input from "../Input/Input";

type NewProjectProps = {
    onCreateProject: (projectData: ProjectData) => void
}

export default function NewProject({ onCreateProject }: NewProjectProps) {
    const title = useRef<HTMLInputElement | null>(null);
    const description = useRef<HTMLTextAreaElement | null>(null);
    const dueDate = useRef<HTMLInputElement | null>(null);

    function handleSave() {
        const enteredTitle = title.current?.value;
        const enteredDescription = description.current?.value;
        const enteredDueDate = dueDate.current?.value;

        // validation...

        const newProject: ProjectData = {
            id: Math.random().toString(36).substring(2, 9),
            title: enteredTitle!,
            description: enteredDescription!,
            dueDate: new Date(enteredDueDate!),
            tasks: []
        };

        onCreateProject(newProject)
    }

    return (
        <div className={styles["new-project-container"]}>
            <div>
                <Input ref={title} label="Title" type="text" />
                <Input ref={description} label="Description" isTextArea />
                <Input ref={dueDate} label="Due Date" type="date" />
            </div>
            <menu>
                <li><button className={styles["cancel-button"]}>Cancel</button></li>
                <li><button className={styles["save-button"]} onClick={handleSave}>Save</button></li>
            </menu>
        </div>
    )
}