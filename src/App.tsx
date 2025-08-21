import {useState} from "react"

import type {InputValues} from "./types/InputValues"

import Header from "./components/Header"
import Inputs from "./components/Inputs"
import Results from "./components/Results"

const inputs: InputValues = {
  startingAmount: 0,
  contribution: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {
  const [userInput, setUserInput] = useState<InputValues>(inputs);

  return (
    <>
      <Header></Header>
      <Inputs setInputValues={setUserInput} />
      <Results userInput={userInput} />
    </>
  )
}

export default App
