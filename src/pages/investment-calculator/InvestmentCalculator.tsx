import {useState} from "react"
import styles from "./InvestmentCalculator.module.scss"
import type {InputValues} from "../../projects/investment-calculator/types/InputValues"

import Header from "../../projects/investment-calculator/components/Header"
import Inputs from "../../projects/investment-calculator/components/Inputs"
import Results from "../../projects/investment-calculator/components/Results"
import Background from "../../projects/investment-calculator/components/Background"

const inputs: InputValues = {
  startingAmount: 0,
  contribution: 0,
  expectedReturn: 0,
  duration: 0,
}

function InvestmentCalculator() {
  const [userInput, setUserInput] = useState<InputValues>(inputs);

  return (
    <>
      <div className={styles.container}>
        <Background></Background>
        <Header></Header>
        <Inputs setInputValues={setUserInput} />
        <Results userInput={userInput} />
      </div>
    </>
  )
}

export default InvestmentCalculator
