import styles from "./Results.module.css";
import type { Result } from "../../types/result";
import type { Question } from "../../types/question";
import Answer from "./Answer";

type ResultsProps = {
    results: Result[],
    questions: Question[]
}

export default function Results({ results, questions }: ResultsProps) {

    const questionCount = results.length;
    const answeredCorretly = results.filter(result => result.isAnsweredCorrectly).length;
    const skipped = results.filter(result => result.selectedAnswer === null).length;
    const score = (answeredCorretly / questionCount) * 100;

    return (
        <div className={styles.results}>
            <div className={styles.stats}>
                <div className={`${styles.stat} ${styles.score}`}>
                    <p className={styles.value}>%{score}</p>
                    <p className={styles.description}>Your Score</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.stat}>
                        <p className={styles.value}>{answeredCorretly}/{questionCount}</p>
                        <p className={styles.description}>Answered Corretly</p>
                    </div>
                    <div className={styles.stat}>
                        <p className={styles.value}>{skipped}/{questionCount}</p>
                        <p className={styles.description}>Skipped</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.questions}>
                <Answer questions={questions} results={results}></Answer>
            </div>
        </div>
    )
}