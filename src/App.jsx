import { useState } from 'react'
import './App.css'
import User from './component/user/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <User/>
    </>
  )
}

export default App
