import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <NavLink className="navbar-brand" href="#">Shoes Shop</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to='/Home' aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/Register'>Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/Login'>Login</NavLink>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default HeaderHome