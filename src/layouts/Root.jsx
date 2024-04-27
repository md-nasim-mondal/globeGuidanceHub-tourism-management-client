import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Navbar/>
            <Outlet/>
            </div>
        </div>
    );
};

export default Root;