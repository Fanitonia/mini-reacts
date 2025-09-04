import { createPortal } from "react-dom";
import styles from "./modal.module.css"

type ModalProps = {
    ref: React.Ref<HTMLDialogElement>,
    buttonCaption: string,
    title: string,
    description: string
}

export default function Modal({ ref, buttonCaption, title, description }: ModalProps) {

    return createPortal(
        <dialog ref={ref} className={styles["modal-container"]}>
            <h2>{title}</h2>
            <p>{description}</p>
            <form method="dialog">
                <button>{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById("root") as HTMLElement
    )
}