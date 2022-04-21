import { useState } from 'react'
import './App.css'
import Pyramid from './components/Pyramid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Numerical Pyramid</h1>
      <Pyramid/>
    </div>
  )
}

export default App
