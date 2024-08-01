import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handlesubmit = () => {
        const users = JSON.parse(localStorage.getItem("users"))
        const foundUser = users.find(
            (u) => u.email === user.email && u.password === user.password
        );
        if (foundUser) {
            localStorage.setItem("isLogin", "true")
            toast.success("Sachu chhe")
            window.location.reload();
        }
        else {
            toast.error("Khotu sachu chhe")
        }
    }



    return (
        <div className="form-bg">
            <div className="container">
                <div className="form">
                    <div className="heading">
                        <span>LOGO</span>
                    </div>
                    <div className="login">
                        <h1>Login</h1>
                        <div className="form-control">
                            <input
                                type="text"
                                required
                                name="email"
                                onChange={handleChange}
                            />
                            <label>email</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                required
                                name="password"
                                onChange={handleChange}
                            />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn" onClick={handlesubmit}>
                            Login
                        </button>
                        <p className="text">
                            Don't have a account? <Link to={"/signup"}>Signup</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}