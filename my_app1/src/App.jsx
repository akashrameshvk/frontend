import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Loging from './components/Loging'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Rav from './components/Rav'
import Api from './components/Api'
import Pokemon from './components/Pokemon'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Loging />} />
        <Route path='/s' element={<Statebasics />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/r' element={<Rav />} />
        <Route path='/a' element={<Api />} />
        <Route path='/p' element={<Pokemon/>}/>
        
      </Routes>
      
      
     
      
      
      
      
      
    
    </>
  )
}

export default App
