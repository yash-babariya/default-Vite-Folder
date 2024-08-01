import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }) => {
    const location = useLocation();
    const isLogin = localStorage.getItem('isLogin') === 'true';
    const isSignup = localStorage.getItem('isSignup') === 'true';

    if (location.pathname === '/signup' && isSignup) {
        return <Navigate to="/login" />;
    }
    if (location.pathname === '/login' && isLogin) {
        return <Navigate to="/" />;
    }
    if (location.pathname === '/' && !isSignup) {
        return <Navigate to="/signup" />;
    }
    if (location.pathname === '/' && !isLogin) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default AuthRoute;