import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5 // this variable was changing but wasn't getting propagated to UI hence, we are using useState hook.

  const addValue = () => {
    // counter = counter + 1
    if (counter < 20) {
      setCounter(counter + 1)
    }
    // console.log("clicked", counter);
  }

  const subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={subtractValue}
      >Subtract value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App


/* LECTURE 5
Notes: React controls the UI updation. This leads us to use different hooks.
*/

/* LECTURE 6 : Virtual DOM, reconciliation and fiber*/