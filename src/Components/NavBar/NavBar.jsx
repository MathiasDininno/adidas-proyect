import React from 'react';
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <>
            <ul className='header-top'>
                <li className='ulNav'><a href=""> ayuda</a></li>
                <li className='ulNav'><a href=""> cambios y devoluciones</a></li>
                <li className='ulNav'><a href=""> seguimiento de pedidos</a></li>
                <li className='ulNav'><a href=""> unite al club</a></li>
            </ul>
            <nav className="navbar navbar-expand-lg bg-light navBarContainer">
                <div className="container-fluid">
                    <img className='icono' src="https://cdn-icons-png.flaticon.com/512/731/731962.png" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse divContainer" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button type="button" className="btn btn-link" href="#">MUJER</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link" href="#">HOMBRE</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link" href="#">NIÑOS</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link" href="#">DEPORTE</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link" href="#">MUNDO ADIDAS</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link" href="#">HOTSALE</button>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Productos" aria-label="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                        </svg>
                    </form>
                </div>
            </nav>
        </>
    );
}


export default NavBar;
