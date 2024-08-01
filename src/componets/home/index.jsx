import React from 'react'

export default function Home() {

    const logout = () => {
        localStorage.removeItem("isLogin")
        window.location.reload()
    }

    const Signout = () => {
        localStorage.removeItem("isSignup")
        localStorage.removeItem("isLogin")
        window.location.reload()
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>Log out</button>
            <button onClick={Signout}>Sign out</button>
        </div>
    )
}
