import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signIn',
                element: <SignIn/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot/>
            },
        ]
    }
]);

export default router;
