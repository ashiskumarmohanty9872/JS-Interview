import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count + 1 )
  }
  function decrement(){
    setCount(count - 1 )
  }

  return (
   <>
      <h2>counter App</h2>
      <div >count:{count}</div> <br /> 
      <button onClick={increment}>Increment</button> &nbsp;
      <button onClick={decrement}> Decrement</button>
   </>
  )
}

export default App
