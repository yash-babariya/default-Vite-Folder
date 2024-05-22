import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultlayout";
import Home from "../componets/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
        errorElement: <div>404 Error!</div>,
    },
]);

export default router;