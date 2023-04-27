import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className="container">
            <footer className="top-footer d-flex flex-wrap justify-content-between align-items-center py-auto border-top bg-body-tertiary bg-dark fixed-bottom" data-bs-theme="dark">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-1 mb-md-0 text-body-secondary">&copy; 2023 CloudBook</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className='nav-item'>
                 <Link className='nav-link px-2 text-body-secondary' aria-current="page" to="/">Home</Link>
                     </li>
                     <li className='nav-item'>
                 <Link className='nav-link px-2 text-body-secondary' aria-current="page" to="/about">About</Link>
                     </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer