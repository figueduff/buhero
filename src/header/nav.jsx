import { Link } from 'react-router-dom';
import './nav.css';
import DropDown from './dropdown';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/fernet">FernetFernet</Link>
          </li>
          <li id='experiencia'>
            <Link to="/experiencia">ExperienciaExperiencia</Link>
          </li>
          <li id='home'>
            <Link to="/">HomeHome</Link>
          </li>
          <li id='contacto'>
            <Link to="/contacto">ContactoContacto</Link>
          </li>
          <li >
            <p>Comprar</p>
          </li>
        </ul>
      </nav>
      <DropDown/>
    </>
  );
};

export default Nav;

