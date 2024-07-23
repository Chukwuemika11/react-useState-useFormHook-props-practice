import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  const [counts, setCounts] = useState(0)

  function increase() {
    setCounts(counts + 1);
  }

  function decrease() {
    setCounts(counts - 1);
  }

  return (
    <>
    <Card 
    name="lawrence"
    age = "20"
    img="https://tse1.mm.bing.net/th?id=OIP.p7AnAYyvugU5ZzIdZNX71QHaFj&pid=Api&P=0&h=220"
    />
        <div className=' container'>
      <h1 className='h1'>{counts}</h1>
      <button className='button' onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>

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

      <Form />
    </>
  )
}

export default App
