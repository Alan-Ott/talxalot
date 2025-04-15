import { useState } from 'react'
import './App.css'
import axelot from './assets/Logo.svg'
import AddTalk from './components/AddTalk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <img src={axelot} className="w-24 h-24 md:w-24 md:h-24 mx-auto rounded-full shadow-lg hover:scale-110 transition-transform duration-300" alt="Vite logo" />
            <h1>Talxalot</h1>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>

      <AddTalk></AddTalk>

    </>
  )
}

export default App
