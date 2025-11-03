import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'

function App() {
  return (
   <>

   <div>
   <BrowserRouter>
   <Navbar/>

   <Routes>
    <Route path='/' element ={<Shop/>} />
    
   </Routes>
   </BrowserRouter>
   
    
   </div>
   
   </>
  )
}

export default App