import type { Investment } from "../types/Investment";

export default function Results({ investmentResults }: { investmentResults: Investment[] }) 
{
    const hasResults = investmentResults.length > 0;

    return(
        <>
        {hasResults && 
            <section id="results">
            <table>
                <thead>
                    <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Total Capital</th>
                </tr>
                </thead>
                <tbody>
                    {investmentResults.map((result, index) => (
                    <tr key={index}>
                        <td>{result.year.toFixed(0)}</td>
                        <td>${result.totalValue.toFixed(0)}</td>
                        <td>${result.yearlyInterest.toFixed(0)}</td>
                        <td>${result.totalInterest.toFixed(0)}</td>
                        <td>${result.investedCapital.toFixed(0)}</td>
                    </tr>
                ))}
                </tbody>
                
                
            </table>
        </section>
        }
        </>
    );
}