import { useState, useEffect } from "react";
import styles from "./Question.module.css";
import type { Question } from "../../types/question"

const letters = ["A", "B", "C", "D"];

type QuestionProps = {
    question: Question,
    time: number
}

export default function QuestionView({ question, time }: QuestionProps) {
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prev => {
                if (prev <= 10) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 10;
            });
            console.log("prev")
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [time]);

    return (
        <div className={styles["question"]}>
            <p className={styles["title"]}>{question.text}</p>
            <progress max={time} value={remainingTime}></progress>
            <div className={styles["answers"]}>
                {Object.entries(question.answers).map((answer, index) => (
                    <button key={index}>
                        <span>{letters[index]}</span>
                        {": " + answer[1]}
                    </button>
                ))}
            </div>
        </div>
    )
}