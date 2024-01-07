
import { useState } from 'react'
import UseStateExample from './pages/UseStateExample'

function App() {
  const [counter,setCouter]= useState(0)

  return (
    <div>
      <UseStateExample counter={counter} setCounter={setCouter}/>
    </div>
  )
}

export default App
