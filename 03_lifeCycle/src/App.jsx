import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Work, {Work1, Work2, Work3, Work4, Work5, Work6, Work7} from './Work'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("Ninja")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      <Work data={()=>{alert("function coming from App parent ")}} />
      <Work1 />
      <Work2 data2={name}/>
      <button onClick={() => setName("nigggaaa")}>
          Print Name- Prop update
        </button>
        <Work3 />
        <Work4 />
        <Work5 />
        <Work6 />
        <Work7 />
    </>
  )
}

export default App
