import { useState } from 'react'
import axelot from './assets/axolotl-silhouette-vector.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={axelot} className="logo" alt="Vite logo" />
        <h1>Talxalot</h1>
      </div>


    </>
  )
}

export default App
