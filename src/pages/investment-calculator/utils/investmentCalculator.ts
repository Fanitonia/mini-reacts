import type { InputValues } from "../types/InputValues";
import type { InvestmentData } from "../types/InvestmentData";

export default function calculateInvestment(inputs: InputValues): InvestmentData[] {

    const allInputsProvided = Object.values(inputs).every(value => value !== 0);

    if (!allInputsProvided)
        return [];
    if(inputs.duration > 100)
        inputs.duration = 100;

    let annualDatas: InvestmentData[] = [];

    let annualData: InvestmentData = {
        year: 1,
        totalValue: inputs.startingAmount,
        yearlyInterest: 0,
        totalInterest: 0,
        investedCapital: inputs.startingAmount
    };

    for (let year = 1; year <= inputs.duration; year++) {
        annualData.year = year;
        annualData.yearlyInterest = annualData.totalValue * (inputs.expectedReturn / 100);
        annualData.totalInterest += annualData.yearlyInterest;
        annualData.investedCapital += inputs.contribution;
        annualData.totalValue += annualData.yearlyInterest + inputs.contribution;

        const newAnnualData = { ...annualData };
        annualDatas.push(newAnnualData);
    }

    return annualDatas;
}

export const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});