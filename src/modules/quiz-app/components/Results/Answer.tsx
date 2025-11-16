import styles from "./Answer.module.css"
import type { Question } from "../../types/question"
import type { Result } from "../../types/result"

type AnswerProps = {
    questions: Question[],
    results: Result[]
}

export default function Answer({ questions, results }: AnswerProps) {

    function Answer(question: Question, selectedAnswer: number | null): React.ReactElement {
        if (selectedAnswer === question.rightAnswer)
            return <p className={styles["right-answer"]}>{question.answers[question.rightAnswer]}</p>;
        else
            return <p className={styles["false-answer"]}>{question.answers[selectedAnswer!]}</p>
    }

    return (
        questions.map((question, index) => (
            <div className={styles.question} key={index}>
                <div className={styles["question-count"]}>
                    <p>{index + 1}</p>
                </div>
                <p>{question.text}</p>
                {Answer(question, results[index].selectedAnswer)}
            </div>
        ))
    )
}