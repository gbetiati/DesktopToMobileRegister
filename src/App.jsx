import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

import Menu from './components/Menu'

import Settings from './components/Settings'
import RegisterScreen from './screens/RegisterScreen';
import UsersScreen from './screens/UsersScreen';


function App() {

  return (
    <div className='bg bg-gradient-to-r from-sky-50 to-cyan-50 h-screen '>
    <Router>    
      <Menu/>
      <Routes>
        <Route path="/form" element={<RegisterScreen/>}/>
        <Route path="/users" element={<UsersScreen/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
