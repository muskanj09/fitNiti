import React from 'react'
import '../navbar/navbar.css'
import logo from '../../img/navLogo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navBg">
                <div className="container-fluid">
                    <img src={logo} className='navLogo' alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navListDark me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to='/' className='navLink'>Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/events' className='navLink'>Events</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/results' className='navLink'>Results</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/charity' className='navLink'>Charity</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/blogs' className='navLink'>Blogs</Link>
                            </li>
                        </ul>
                        <form className="d-flex navbutton">
                        <Link to='/login' className='btn btn-outline-light'>Sign In</Link>
                        <Link to='/register' className='btn'>Sign Up</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar