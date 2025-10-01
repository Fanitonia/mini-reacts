import styles from "./Results.module.css";
import type { Result } from "../../types/result";

type ResultsProps = {
    results: Result[]
}
export default function Results({ results }: ResultsProps) {

    const questionCount = results.length;
    const answeredCorretly = results.filter(result => result.isAnsweredCorrectly).length;
    const skipped = results.filter(result => result.selectedAnswer === null).length;

    const score = (answeredCorretly / questionCount) * 100;

    return (
        <div className={styles.results}>
            <div className={styles.score}>
                <p className={styles.value}>%{score}</p>
                <p className={styles.description}>Your Score</p>
            </div>

            <div className={styles.details}>
                <p>You did answered {answeredCorretly} questions correctly out of {questionCount}</p>
                <p>You skipped {skipped} questions.</p>
            </div>

        </div>
    )
}