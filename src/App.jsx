import { useState } from 'react'
import './App.css'
import Pyramid from './components/Pyramid'

function App() {
  const [level, setLevel] = useState(4)
  const [isSelected,setIsSelected] = useState(false)

  function toggle(e) {
    if(e.target.innerHTML.toLowerCase() === 'easy') setLevel(4)
    if(e.target.innerHTML.toLowerCase() === 'medium') setLevel(6)
    if(e.target.innerHTML.toLowerCase() === 'difficult') setLevel(8)
    setIsSelected(prev=>!prev)
  }

  return (
    <div className="App">
      <h1>Numerical Pyramid</h1>
      {!isSelected ? 
      <div className='difficulty'>
        <h4>Difficulty</h4>
        <button onClick={toggle}>Easy</button>
        <button onClick={toggle}>Medium</button>
        <button onClick={toggle}>Difficult</button>
      </div>
      :
      <Pyramid value={level}/>}
    </div>
  )
}

export default App
