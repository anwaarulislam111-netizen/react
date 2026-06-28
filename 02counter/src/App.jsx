import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter: {counter}</h2>

    <button
    onClick = {addValue}
    >add value {counter}</button>
    <br/>
    <button>remove value {counter}</button>
    <p>footer {counter}</p>
    </>
  )
}

export default App;