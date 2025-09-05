import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'


function App() {
  
  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
