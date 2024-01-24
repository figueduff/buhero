import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import './home.css';
import Nav from '../header/nav';

function Home({ pagina }) {

  // const handleButtonClick = () => {
  //   // Lógica a ejecutar cuando se hace clic en el botón
  //   console.log('Botón clickeado');
  // };


  return (
    <section className="contenedor-imagen">
      <Nav />
      <img src={pagina} alt="Buhero" />
      {/* <Link to="/fernet">
      <button className="botonFernet" onClick={handleButtonClick}>
        fernet
      </button>
      </Link>
      <Link to="/experiencia">
      <button className="botonExperiencia" onClick={handleButtonClick}>
        experiencia
      </button>
      </Link> */}
    </section>
  )
}

Home.propTypes = {
  pagina: PropTypes.string.isRequired
}

export default Home