import type { InputValues } from "../types/InputValues";
import type { Investment } from "../types/Investment";

export default function CalculateInvestment(values: InputValues): Investment[] {

    const allNotZero = Object.values(values).every(value => value !== 0);
    
    if(!allNotZero)
        return [];

    let InvestmentsResults: Investment[] = [];

    let invest: Investment = {
        year: 1,
        totalValue: values.initialInvestment,
        yearlyInterest: 0,
        totalInterest: 0,   
        investedCapital: values.initialInvestment
    };


    for(let year = 1; year <= values.duration; year++) {
        invest.year = year;
        invest.yearlyInterest = invest.totalValue * (values.expectedReturn / 100);
        invest.totalInterest += invest.yearlyInterest;
        invest.investedCapital += values.annualInvestment;
        invest.totalValue += invest.yearlyInterest + values.annualInvestment;

        const newInvest = {...invest};
        InvestmentsResults.push(newInvest);
    }

    return InvestmentsResults;


}