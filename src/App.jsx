import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-router-dom'

import Menu from './components/Menu'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
            <div>
                <Menu /> 
                <Switch>
                    <Route path="/rotas" element={Form} />
                </Switch>
            </div>
        </Router>
    </>
  )
}

export default App
