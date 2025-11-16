import { useState, useRef } from "react";
import styles from "./Quiz.module.css";
import type { Question } from "../../types/question";
import type { Result } from "../../types/result";
import QuestionViewer from "./QuestionViewer";
import Results from "../Results";

type QuizProps = {
    questions: Question[],
    secondsPerQuestion: number,
}

export default function Quiz({ questions, secondsPerQuestion }: QuizProps) {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);
    const results = useRef<Result[]>([])

    function onQuestionEnd(result: Result) {
        results.current.push(result);
        setSelectedQuestion(prev => {
            if (questions.length != prev + 1)
                return prev + 1;
            else {
                setEndQuiz(true)
                return prev;
            }
        });
    }

    return (
        <div className={styles.quiz}>
            {endQuiz ?
                <Results results={results.current} questions={questions}></Results>
                :
                <>
                    <QuestionViewer
                        question={questions[selectedQuestion]}
                        time={secondsPerQuestion}
                        onQuestionEnd={onQuestionEnd}>
                    </QuestionViewer>
                    <p>{selectedQuestion + 1} out of {questions.length}</p>
                </>
            }
        </div>
    )
}