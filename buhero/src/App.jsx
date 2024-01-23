import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './paginas/home'
import Contacto from './paginas/contacto'


function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
