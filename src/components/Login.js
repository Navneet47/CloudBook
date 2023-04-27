import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ''
    });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://cb-gyo4hhhve-navneet47.vercel.app/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            if(json.success){
                // save authToken and redirect
                localStorage.setItem('token', json.authToken);
                props.showAlert("Logged in Successfully", "success");
                history('/')
                  
            }else{
                props.showAlert("Invalid credentials", "danger");

            }
        } catch (error) {
            props.showAlert(error.message, "danger");

        }
    }

    function handleChange(e) {
        const {name,value} = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    return (
        <div className='my-3'>
            <div className='my-3'>
            <h1>Login to see your notes</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input required name="email" value={credentials.email} type="email" className="form-control" id="email" aria-describedby="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input required name="password" onChange={handleChange} value={credentials.password} type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary my-1" >Login</button>
            </form>
            <div className='my-2'>
            <h6>Not have an account? Register <Link role='button' to="/register">here</Link></h6>
            </div>
        </div>
    )
}

export default Login