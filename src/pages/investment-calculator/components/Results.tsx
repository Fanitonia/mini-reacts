import styles from "./results.module.css"
import type { InputValues } from "../types/InputValues";
import calculateInvestment, { formatter } from "../utils/investmentCalculator";

export default function Results({ userInput }: { userInput: InputValues }) {
    const investmentResults = calculateInvestment(userInput);
    const hasResults = investmentResults.length > 0;

    return (
        <section className={styles.results}>
            {hasResults ?
                <div className={styles["table-wrapper"]}>
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Ending Balance</th>
                                <th>Interest</th>
                                <th>Total Interest</th>
                                <th>Total Deposit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {investmentResults.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.year}</td>
                                    <td>{formatter.format(result.totalValue)}</td>
                                    <td>{formatter.format(result.yearlyInterest)}</td>
                                    <td>{formatter.format(result.totalInterest)}</td>
                                    <td>{formatter.format(result.investedCapital)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                :
                <p>Waiting for user input to display results...</p>
            }
        </section>
    );
}