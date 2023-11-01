import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <h1>React Counter</h1>
      <h2> Counter Value: {count}</h2>
      <button onClick={()=>{count>=20?false:setCount(count+1)}}> Increase Value </button>
      <br></br>
      <br></br>
      <button onClick={()=>{count <= 0 ? false :setCount(count-1)}}> Decrease Value </button>
    </>
  )
}

export default App
