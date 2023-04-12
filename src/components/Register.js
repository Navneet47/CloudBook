import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {
    const [user, setUser] = useState({
        name: "",
        email: '',
        password: '',
        cPassword: ''
    })
    let history = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password === user.cPassword) {
            try {
                const response = await fetch("http://localhost:5000/api/auth/createuser", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
                });
                const json = await response.json();
                if (json.success) {
                    // save authToken and redirect
                    localStorage.setItem('token', json.authToken);
                    history('/')
                    props.showAlert("Account Created Successfully", "success")

                } else {
                    props.showAlert("User already exists", "warning")

                }
            } catch (error) {
                console.log(error.message);
            }
            setUser({
                name: "",
                email: '',
                password: '',
                cPassword: ''
            });
        } else {
            props.showAlert("Password Dosen't Match", "danger")
        }

    }

    return (
        <div className='my-3'>
            <div className='my-3'>
                <h1>Create an account</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input required name="name" value={user.name} type="text" className="form-control" id="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input required name="email" value={user.email} type="email" className="form-control" id="email" aria-describedby="email" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input minLength={8} required name="password" value={user.password} type="password" className="form-control" id="password" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                    <input minLength={8} required name="cPassword" value={user.cPassword} type="password" className="form-control" id="cPassword" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Sign-up</button>
            </form>
            <div className='my-2'>
            <h6>Already have an account? Click to <Link role='button' to="/login">login</Link></h6>
            </div>
        </div>
    )
}

export default Register;