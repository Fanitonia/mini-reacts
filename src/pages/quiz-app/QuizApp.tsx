import { useRef, useState } from "react";
import styles from "./QuizApp.module.css";
import MainMenu from "./components/MainMenu";
import { Quiz } from "./components/Quiz";

import questions from "./data/questions.ts";

export default function QuizApp() {
    const [isGameStarted, setGameStarted] = useState(false);
    const option = useRef<HTMLSelectElement>(null);

    function startGame() {
        setGameStarted(true);
    }

    return (
        <div className={styles["app-wrapper"]}>
            <main className={styles["content-wrapper"]}>
                {isGameStarted ?
                    <Quiz questions={questions} secondsPerQuestion={parseInt(option.current!.value)}></Quiz>
                    :
                    <MainMenu startGame={startGame} option={option}></MainMenu>
                }
            </main>
        </div>
    )
}