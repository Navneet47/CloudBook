import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
  let history = useNavigate();

  const [userProfile, setProfile] = useState({
    userId: '',
    name: "",
    email: ""
  })

  const handleLog = () => {
    localStorage.removeItem('token');
    history('/login')
  }

  const userDetails = async () => {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const details = await response.json();
    setProfile({
      userId: details._id,
      name: details.name,
      email: details.email
    })
  }

  let location = useLocation();

  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CloudBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? 'active' : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ""}`} to="/about">About</Link>
              </li>
            </ul>
            {/* <!-- Button trigger modal --> */}
            <button style={{display:localStorage.getItem('token') ? "" : 'none'}} onClick={userDetails} type="button" className="btn btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              User Profile
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 style={{ color: 'white' }} className="modal-title fs-5" id="staticBackdropLabel">User Profile</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="card">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">User id: {userProfile.userId}</li>
                        <li className="list-group-item"> Name: {userProfile.name}</li>
                        <li className="list-group-item">Email: {userProfile.email}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {localStorage.getItem('token') ? <button onClick={handleLog} className='btn btn-outline-success mx-1'>Logout</button> : <form className="d-flex">
              <Link className="btn btn-outline-success mx-1" role='button' to="/login">Login</Link>
              <Link className="btn btn-outline-success mx-1" role='button' to="/register">Register</Link>
            </form>}
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;