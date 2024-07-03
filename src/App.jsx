import { useState } from 'react'
import './App.css'

import Menu from './components/Menu'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
          <div className="flex flex-none">
          <Menu/> 
          </div>
        <Form/>
      </div>
    </>
  )
}

export default App
