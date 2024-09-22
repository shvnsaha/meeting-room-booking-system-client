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
import Slot from "../pages/Dashboard/Slot";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import Booking from "../pages/Booking";
import PaymentSuccess from "../pages/PaymentSuccess";
import Bookings from "../pages/Dashboard/Bookings";
import Rooms from "../pages/Rooms";


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
            {
                path: "/rooms",
                element: <Rooms />
            },
            {
                path: "/room/:id",
                element: <PrivateRoute><RoomDetails /></PrivateRoute>,
              },
            {
                path: "/book/:id",
                element: <PrivateRoute><Booking /></PrivateRoute>,
              },
            {
                path: "/payment-success/:tranId",
                element: <PrivateRoute><PaymentSuccess/></PrivateRoute>,
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
            {
                path: 'slot-management',
                element: <Slot/>
            },
            {
                path: 'booking-management',
                element: <Bookings/>
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