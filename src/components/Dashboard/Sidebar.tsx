/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { FaUsersGear } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FaHome, FaBook, FaClipboardList } from "react-icons/fa";
import logo from "../../assets/logo2.png";


const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

//   const handleLogout = () => {
//     logOut().catch(() => {});
//   };

  const SidebarLink = ({ to, icon, label, currentPath }:any) => (
    <Link to={to}>
      <button
        className={`flex items-center w-full px-4 py-2 text-gray-600 transition-colors duration-300 transform ${
          currentPath === to ? "bg-gray-300" : ""
        }`}
      >
        {icon}
        <span className="mx-3 md:mx-4 font-medium">{label}</span>
      </button>
    </Link>
  );

//   // Close sidebar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event:any) => {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         !buttonRef.current.contains(event.target) &&
//         isActive
//       ) {
//         setActive(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isActive]);

  return (
    <div>
      <div className="bg-base-200 text-gray-800 flex justify-between md:hidden">
        <Link to="/" className="block cursor-pointer px-5 py-2 font-bold">
          <img src={logo} className="w-12" alt="Logo" />
        </Link>
        <button
          ref={buttonRef}
          onClick={() => setActive(!isActive)}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-6 w-7" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-[215px] md:w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <Link to="/" className="hidden md:block">
            <div className="w-full hidden md:flex px-4 py-1 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <img src={logo} className="h-14" alt="Logo" />
            </div>
          </Link>
          {/* User Info */}
          {/* {user && (
            <div className="flex items-center px-4 my-4 text-gray-600">
              <span className="font-medium">Hi, {user?.displayName || "User"}</span>
            </div>
          )} */}
          {/* Nav Items */}
          <nav className="space-y-2 mt-4">
            <SidebarLink
              to="/dashboard"
              icon={<FaHome />}
              label="Dashboard"
              currentPath={currentPath}
            />
            <SidebarLink
              to="/dashboard/room-management"
              icon={<FaBook />}
              label="Room management"
              currentPath={currentPath}
            />
            <SidebarLink
              to="/admin-dashboard/all-bookings"
              icon={<FaClipboardList />}
              label="All Bookings"
              currentPath={currentPath}
            />
            <SidebarLink
              to="/admin-dashboard/all-users"
              icon={<FaUsersGear />}
              label="All Users"
              currentPath={currentPath}
            />
            <SidebarLink
              to="/admin-dashboard/books-providers"
              icon={<MdLibraryBooks />}
              label="Books Providers"
              currentPath={currentPath}
            />
            <SidebarLink
              to="/admin-dashboard/users-to-update"
              icon={<FcSettings />}
              label="Users to Update"
              currentPath={currentPath}
            />
          </nav>
        </div>
        <div>
          <hr />
          <button
            // onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-3 md:mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;