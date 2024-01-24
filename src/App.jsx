import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css'
import Home from './paginas/home'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home pagina={isMobile ? "/img/Home_page_Mobile_1.webp" : "/img/Home_header_transparente.webp"} />} />
            <Route path="/fernet" element={<Home pagina={isMobile ? "/img/Productos_Fernet_Mobile_1.webp" : "/img/Productos.webp"} />} />
            <Route path="/experiencia" element={<Home pagina={isMobile ? "/img/Experiencia_Buhero_Mobile_1.webp" : "/img/Experiencia_Buho.webp"} />} />
            <Route path="/maceracion" element={<Home pagina={isMobile ? "/img/Productos_Maceracion_Mobile_1.webp" : "/img/Productos_maceracion_1.webp"} />} />
            <Route path="/botanicos" element={<Home pagina={isMobile ? "/img/Productos_Botanicos_Mobile_1.webp" : "/img/Productos_botanicos_1.webp"} />} />
            <Route path="/reposo" element={<Home pagina={isMobile ? "/img/Productos_Reposo_Mobile_1.webp" : "/img/Productos_reposo_1.webp"} />} />
            <Route path="/cata" element={<Home pagina={isMobile ? "/img/Productos_Cata_Mobile_1.webp" : "/img/Productos_cata_1.webp"} />} />
            <Route path="/contacto" element={<Home pagina={isMobile ? "/img/Contacto_Mobile_1.webp" : "/img/Contacto.webp"} />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
