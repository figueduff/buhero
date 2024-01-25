import './navMobile.css'

function navMobile() {
    return (
        <div>
            <nav className="navbar navbar-dark fixed-top navbar-expand-xs">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                    style={{ width: '50px', height: '50px',border: 'none',
                    outline: 'none', 
                    background: 'transparent', }} >
                        {/* <span className="navbar-toggler-icon" style="opacity: 0.5;"></span> */}
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/fernet">Fernet</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/experiencia">Experiencia Buhero</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contacto">Contacto</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navMobile