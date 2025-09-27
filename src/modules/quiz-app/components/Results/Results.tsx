import type { Result } from "../../types/result"

type ResultsProps = {
    results: Result[]
}
export default function Results({ results }: ResultsProps) {

    console.log(results)
    return (
        <div>
        </div>
    )
}