import styles from "./MainMenu.module.css";

export default function MainMenu() {
    return (
        <div className={styles["menu-container"]}>
            <header>
                <h1>How well do you know TypeScript?</h1>
                <p>A ten question quiz</p>
            </header>
            <div className={styles["options"]}>
                <label htmlFor="seconds">Seconds per question</label>
                <select name="seconds" id="seconds">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <button>Start Quiz</button>
        </div>
    )
}