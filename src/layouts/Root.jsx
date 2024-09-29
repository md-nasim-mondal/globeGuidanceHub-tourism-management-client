import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#E0F7FA] dark:bg-[#002B36] min-h-screen">
            <div className="container w-[94%] md:w-full mx-auto">
            <Navbar/>
            <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;