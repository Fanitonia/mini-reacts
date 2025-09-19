import styles from "./QuizApp.module.css";
import MainMenu from "./components/MainMenu";

export default function QuizApp() {
    return (
        <div className={styles["app-wrapper"]}>
            <main className={styles["content-wrapper"]}>
                <MainMenu></MainMenu>
            </main>
        </div>
    )
}