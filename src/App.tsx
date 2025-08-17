import {useState} from "react"

import type {InputValues} from "./types/InputValues"
import CalculateInvestment from "./utils/investmentCalculator"

import Header from "./components/Header"
import Inputs from "./components/Inputs"
import Results from "./components/Results"

const values: InputValues = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {
  const [inputValues, setInputValues] = useState<InputValues>(values);

  const investmentResults = CalculateInvestment(inputValues);
  
  return (
    <>
      <Header></Header>
      <Inputs setInputValues={setInputValues} />
      <Results investmentResults={investmentResults} />
    </>
  )
}

export default App
