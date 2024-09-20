import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import Signup from "../pages/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import Room from "../pages/Dashboard/Room";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'dashboard',
                element: "hello",
            },
            {
                path: 'room-management',
                element: <Room/>
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
])

export default router;