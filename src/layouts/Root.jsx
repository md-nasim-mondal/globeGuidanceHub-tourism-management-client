import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-base-content min-h-screen">
            <div className="container mx-auto">
            <Navbar/>
            <Outlet />
            </div>
        </div>
    );
};

export default Root;