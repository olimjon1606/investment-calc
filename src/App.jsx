import Header from "./components/Header"
import InputContainer from "./components/InputContainer"
import { useState } from "react"
import Result from "./components/Result"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvest: 1000,
    anualInvest: 120,
    expectedReturn: 6,
    duration: 10,
  })
  const isValid = userInput.duration > 0;
  function handleChangeInput(indentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [indentifier]: +newValue,
      }
    })
  }
  return (
    <>
      <Header />
      <InputContainer onUpdate={handleChangeInput} userInput={userInput} />
      {!isValid && <p className="center">Please enter duration greater than zero.</p>}
      {isValid && <Result input={userInput} />}
    </>
  )
}

export default App
