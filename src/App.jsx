import { useState } from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Secondpage from './Pages/Secondpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Secondpage/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
