import { useState } from "react";
import type { Question } from "../../types/question";
import type { Result } from "../../types/result";
import QuestionViewer from "./QuestionViewer";
import Results from "../Results";

type QuizProps = {
    questions: Question[],
    secondsPerQuestion: number,
}

const results: Result[] = [];

export default function Quiz({ questions, secondsPerQuestion }: QuizProps) {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);

    function onQuestionEnd(result: Result) {
        results.push(result);
        setSelectedQuestion(prev => {
            if (questions.length != prev + 1)
                return prev + 1;
            else
                setEndQuiz(true)
            return prev;
        });
    }
    return (
        <>
            {endQuiz ?
                <Results results={results}></Results>
                :
                <QuestionViewer
                    question={questions[selectedQuestion]}
                    time={secondsPerQuestion}
                    onQuestionEnd={onQuestionEnd}>
                </QuestionViewer>
            }
        </>
    )
}