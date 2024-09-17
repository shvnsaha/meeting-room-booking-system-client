import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {

  
  return (
    <div className="max-w-[2520px]  mx-auto bg-gray-100">
      <div className="mb-16">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;