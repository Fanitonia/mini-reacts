import { useRef } from "react";
import styles from "./NewProjectForm.module.scss";
import type { ProjectData } from "../../types/ProjectData";

import Input from "../Input/Input";
import Modal from "../Modal/Modal";

type NewProjectProps = {
    onCreateProject: (projectData: ProjectData) => void;
    onCancel: () => void;
};

export default function NewProject({ onCreateProject, onCancel }: NewProjectProps) {
    const errorDialog = useRef<HTMLDialogElement | null>(null);

    const title = useRef<HTMLInputElement | null>(null);
    const description = useRef<HTMLTextAreaElement | null>(null);
    const dueDate = useRef<HTMLInputElement | null>(null);

    function handleSave() {
        const enteredTitle = title.current?.value;
        const enteredDescription = description.current?.value;
        const enteredDueDate = dueDate.current?.value;

        if (
            enteredTitle?.trim().length === 0 ||
            enteredDescription?.trim().length === 0 ||
            enteredDueDate?.trim().length === 0) {
            errorDialog.current?.showModal();
            return;
        }

        const newProject: ProjectData = {
            id: Math.random().toString(36).substring(2, 9),
            title: enteredTitle!,
            description: enteredDescription!,
            dueDate: new Date(enteredDueDate!),
            tasks: [],
        };

        onCreateProject(newProject);
    }

    return (
        <>
            <Modal ref={errorDialog}
                title="Invalid Inputs"
                description="Please make sure to fill all fields."
                buttonCaption="Okay" />

            <div className={styles["new-project-container"]}>
                <div>
                    <Input ref={title} label="Title" type="text" />
                    <Input ref={description} label="Description" isTextArea />
                    <Input ref={dueDate} label="Due Date" type="date" />
                </div>
                <menu>
                    <li>
                        <button className={styles["cancel-button"]} onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className={styles["save-button"]} onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
            </div>
        </>
    );
}
