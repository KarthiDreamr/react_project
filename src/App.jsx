import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='card'>
      <div>
          <img src={reactLogo} className="logo" />
      </div>
      <div >
      <h1 className='todo'>To-Do List</h1>
      <p>Stay Organized, Achieve More.</p>
      <br />
      <button type='button' bgColor='green'>Start Organising</button>
      </div>
      </div>
    </>
  )
}

export default App
