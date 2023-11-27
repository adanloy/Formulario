import { useState } from 'react'
import './App.css'
import ItemDitail from './components/ItemDitail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ItemDitail></ItemDitail>
    </>
  )
}

export default App
