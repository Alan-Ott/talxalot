import { useState } from 'react'

import axelot from './assets/Logo.svg'
import AddTalk from './components/AddTalk'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={axelot} className="logo" alt="Vite logo" />
        <h1>Talxalot</h1>
      </div>

      <AddTalk></AddTalk>

    </>
  )
}

export default App
