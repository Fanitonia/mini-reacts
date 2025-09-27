import styles from "./QuizApp.module.css";
import type { Question } from "./types/question";
import MainMenu from "./components/MainMenu";
import { Quiz } from "./components/Quiz";

const exampleQuestios: Question[] = [
    {
        text: "What is the largest Spanish-speaking city in the world?",
        answers: ["Mexico City", "Bercelona", "Istanbul", "Madrid"],
        rightAnswer: 0
    },
    {
        text: "How many elements are in the periodic table?",
        answers: ["110", "118", "90", "121"],
        rightAnswer: 1
    }
]

export default function QuizApp() {
    return (
        <div className={styles["app-wrapper"]}>
            <main className={styles["content-wrapper"]}>
                <Quiz questions={exampleQuestios} secondsPerQuestion={10}></Quiz>
            </main>
        </div>
    )
}