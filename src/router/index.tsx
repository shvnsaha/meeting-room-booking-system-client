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
import MyBooking from "../pages/MyBooking";
import Users from "../pages/Dashboard/Users";
import AdminRoute from "./AdminRoute";


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
                path: "/my-booking",
                element: <PrivateRoute><MyBooking /></PrivateRoute>,
              },
            {
                path: "/payment-success/:tranId",
                element: <PrivateRoute><PaymentSuccess/></PrivateRoute>,
              },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><AdminRoute><DashboardLayout /></AdminRoute></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><AdminRoute><Users/></AdminRoute></PrivateRoute>,
            },
            {
                path: 'room-management',
                element: <PrivateRoute><AdminRoute><Room/></AdminRoute></PrivateRoute>
            },
            {
                path: 'slot-management',
                element: <PrivateRoute><AdminRoute><Slot/></AdminRoute></PrivateRoute>
            },
            {
                path: 'booking-management',
                element: <PrivateRoute><AdminRoute><Bookings/></AdminRoute></PrivateRoute>
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