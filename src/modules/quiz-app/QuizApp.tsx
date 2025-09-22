import styles from "./QuizApp.module.css";
import type { Question } from "./types/question";
import MainMenu from "./components/MainMenu";
import QuestionView from "./components/Question";

const exampleQuestion: Question = {
    text: "What is the largest Spanish-speaking city in the world?",
    answers: ["Mexico City", "Bercelona", "Istanbul", "Madrid"],
    rightAnswer: "a"
}

export default function QuizApp() {
    return (
        <div className={styles["app-wrapper"]}>
            <main className={styles["content-wrapper"]}>
                <QuestionView question={exampleQuestion} time={10000}></QuestionView>
            </main>
        </div>
    )
}