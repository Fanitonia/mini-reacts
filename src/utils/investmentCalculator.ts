import type { InputValues } from "../types/InputValues";
import type { Investment } from "../types/Investment";

export default function calculateInvestment(inputs: InputValues): Investment[] {

    const allInputsProvided = Object.values(inputs).every(value => value !== 0);

    if (!allInputsProvided)
        return [];

    let investmentsResults: Investment[] = [];

    let invest: Investment = {
        year: 1,
        totalValue: inputs.initialInvestment,
        yearlyInterest: 0,
        totalInterest: 0,
        investedCapital: inputs.initialInvestment
    };

    for (let year = 1; year <= inputs.duration; year++) {
        invest.year = year;
        invest.yearlyInterest = invest.totalValue * (inputs.expectedReturn / 100);
        invest.totalInterest += invest.yearlyInterest;
        invest.investedCapital += inputs.annualInvestment;
        invest.totalValue += invest.yearlyInterest + inputs.annualInvestment;

        const newInvest = { ...invest };
        investmentsResults.push(newInvest);
    }

    return investmentsResults;
}

export const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});