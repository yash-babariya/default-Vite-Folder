import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultlayout";
import Home from "../componets/home";
import Signup from "../form/signup";
import Login from "../form/login";
import AuthRoute from "./authRoute";

const router = createBrowserRouter([
    {
        path: '/signup',
        element: (
            <AuthRoute>
                <Signup />
            </AuthRoute>
        ),
    },
    {
        path: '/login',
        element: (
            <AuthRoute>
                <Login />
            </AuthRoute>
        ),
    },
    {
        path: '/',
        element: (
            <AuthRoute>
                <DefaultLayout />
            </AuthRoute>
        ),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <h1>About</h1>,
            }
        ],
    },
    {
        path: '*',
        element: <h1>404 Error!</h1>,
    },
]);

export default router;