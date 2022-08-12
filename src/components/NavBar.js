import React from 'react'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = ({onDeleteTaskCompleted}) => {
    //to show dynamically the copyright year on the footer
    let year = new Date().getFullYear()

    return (
        <footer className="d-flex justify-content-between bg-primary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink to="/" className="btn btn-outline-dark bg-light" exact={true}><FaListAlt /></NavLink>
                <NavLink to="/completed" className="btn btn-outline-dark bg-light">< FaCheckSquare /></NavLink>
                <NavLink to="/add-task" className="btn btn-outline-dark bg-light" exact={true}><FaPlusSquare /></NavLink>
            </div>
            <p className='copyright'>&copy; Herman & Priscille <span id='year'>{year}</span> </p>
            <button className="btn btn-outline-dark bg-light" onClick={onDeleteTaskCompleted}><FaTrash /></button>
        </footer>
    )
}

export default NavBar