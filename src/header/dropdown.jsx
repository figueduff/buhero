import { Link } from 'react-router-dom';

function DropDown() {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                -
                </button>
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2" >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fernet">Fernet</Link></li>
                    <li><Link to="/experiencia">Experiencia</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </>
    )
}

export default DropDown