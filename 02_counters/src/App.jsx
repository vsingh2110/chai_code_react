import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  function increaseCount(){
    count>=20?false:setCount(count+1)
  };

  function decreaseCount(){
    count<=0?false:setCount(count-1)
  };

  return (
    <>
      <h1>React Counter</h1>
      <h2> Counter Value: {count}</h2>
      <button onClick={()=>{count>=20?false:setCount(count+1)}}> Increase Value </button>
      <button onClick={increaseCount}> Increase Value </button>
      <br></br>
      <br></br>
      <button onClick={()=>{count <= 0 ? false :setCount(count-1)}}> Decrease Value </button>
      <button onClick={decreaseCount}> Decrease Value </button>
    </>
  )
}

export default App
