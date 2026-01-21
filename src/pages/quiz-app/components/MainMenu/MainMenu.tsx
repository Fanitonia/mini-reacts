import styles from "./MainMenu.module.css";

type MainMenuProps = {
    startGame: () => void;
    option: React.RefObject<HTMLSelectElement | null>
}


export default function MainMenu({ startGame, option }: MainMenuProps) {
    return (
        <div className={styles["menu-container"]}>
            <header>
                <h1>How Good is Your General Knowledge?</h1>
                <p>A ten question quiz to test your level</p>
            </header>
            <div className={styles["options"]}>
                <label htmlFor="seconds">Seconds per question</label>
                <select ref={option} name="seconds" id="seconds" defaultValue={10}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <button onClick={startGame}>Start Quiz</button>
        </div>
    )
}