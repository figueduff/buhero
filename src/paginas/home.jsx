import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './home.css';
import Nav from '../header/nav';
import NavMobile from '../header/navMobile';

function Home({ pagina }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClick = (destino) => {
    navigate(`/${destino}`);
  }

  const contienePagina = ["/fernet", "/botanicos", "/maceracion", "/reposo", "/cata"];

  return (
    <section className="contenedor-imagen">
      <Nav />
      <NavMobile />
      <img src={pagina} alt="Buhero" />
      {contienePagina.includes(pathname) && (
        <>
          <div className="botonera">
            <button className="botonBotanica" onClick={() => handleClick("botanicos")}>fernetferne</button>
            <button className="botonMaceracion" onClick={() => handleClick("maceracion")}>experiencia</button>
            <button className="botonReposo" onClick={() => handleClick("reposo")}>reposorepo</button>
            <button className="botonCata" onClick={() => handleClick("cata")}>catacataca</button>
          </div>
        </>
      )}
    </section>
  )
}

Home.propTypes = {
  pagina: PropTypes.string.isRequired
}

export default Home