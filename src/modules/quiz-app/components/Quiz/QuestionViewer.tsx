import { useEffect, useState } from "react";
import styles from "./QuestionViewer.module.css";
import type { Question } from "../../types/question";
import type { Result } from "../../types/result";

const letters = ["A", "B", "C", "D"];

type QuestionProps = {
    question: Question,
    time: number,
    onQuestionEnd: (result: Result) => void
}

export default function QuestionViewer({ question, time, onQuestionEnd }: QuestionProps) {
    const [remainingTime, setRemainingTime] = useState(time * 1000);

    useEffect(() => {
        setRemainingTime(time * 1000);

        const interval = setInterval(() => {
            setRemainingTime(prev => {
                if (prev <= 10) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 10;
            });
        }, 10);

        return () => {
            clearInterval(interval)
        }
    }, [question])

    useEffect(() => {
        if (remainingTime === 0) {
            onQuestionEnd({
                isAnsweredCorrectly: false,
                selectedAnswer: null,
                rightAnswer: question.rightAnswer,
                remainingTime: 0
            });
        }
    }, [remainingTime]);

    return (
        <div className={styles["question"]}>
            <p className={styles["title"]}>{question.text}</p>
            <progress max={time * 1000} value={remainingTime}></progress>
            <div className={styles["answers"]}>
                {question.answers.map((answer, index) => (
                    <button
                        onClick={() =>
                            onQuestionEnd({
                                isAnsweredCorrectly: index === question.rightAnswer,
                                selectedAnswer: index,
                                rightAnswer: question.rightAnswer,
                                remainingTime: remainingTime / 1000
                            })}
                        key={index}>
                        <span>{letters[index]}</span>
                        {": " + answer}
                    </button>
                ))}
            </div>
        </div>
    )
}