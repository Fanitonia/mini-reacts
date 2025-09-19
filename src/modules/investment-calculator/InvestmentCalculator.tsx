import { useState } from "react"
import styles from "./investment-calculator.module.css"
import type { InputValues } from "./types/InputValues"

import Header from "./components/Header"
import Inputs from "./components/Inputs"
import Results from "./components/Results"
import Background from "./components/Background"

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
      <div className={styles["app-wrapper"]}>
        <Background></Background>
        <Header></Header>
        <Inputs setInputValues={setUserInput} />
        <Results userInput={userInput} />
      </div>
    </>
  )
}

export default InvestmentCalculator
