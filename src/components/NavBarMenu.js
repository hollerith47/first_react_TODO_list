import React from 'react'

const NavBarMenu = () => {

    return (
        <>
            <header className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">To do list </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                    <span className="navbar-toggler-icon"/>
                </button>
                <nav className="collapse navbar-collapse" id="navbar-content">
                    <ul className='navbar-nav m-md-auto'>
                        <li className="nav-item"><a className="nav-link active" href="#">Accueil</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Accueil</a></li>
                        <li className="nav-item"><a className="nav-link disabled" href="#">Accueil</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBarMenu