import reactLogo from './assets/react.svg'
import './App.css'
import './button.css'

function App() {

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
      <button className='button'>Start Organising</button>
      </div>
      </div>
    </>
  )
}

export default App
