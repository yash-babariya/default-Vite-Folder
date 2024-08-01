import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [user, setUser] = useState({ fullname: "", email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (
            user.fullname.trim() !== "" &&
            user.email.trim() !== "" &&
            user.password.trim() !== ""
        ) {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            existingUsers.push(user);
            localStorage.setItem("users", JSON.stringify(existingUsers));
            setUser({ fullname: "", email: "", password: "" });
            toast.success("Your account created successfully");
            localStorage.setItem("isSignup", "true");
            window.location.reload();
        }
    };
    return (
        <div className="form-bg">
            <div className="container">
                <div className="form">
                    <div className="heading">
                        <span>LOGO</span>
                    </div>
                    <div className="login">
                        <h1>Sign Up</h1>
                        <div className="form-control">
                            <input
                                type="text"
                                required
                                name="fullname"
                                // value={user.fullname}
                                onChange={handleChange}
                            />
                            <label>Full Name</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                required
                                name="email"
                                // value={user.email}
                                onChange={handleChange}
                            />
                            <label>Email</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                required
                                name="password"
                                // value={user.password}
                                onChange={handleChange}
                            />
                            <label>Password</label>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn">
                            Sign Up
                        </button>
                        <p className="text">
                            Already have an account? <Link to={"/login"}>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
