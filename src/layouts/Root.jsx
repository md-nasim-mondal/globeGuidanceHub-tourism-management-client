import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className='bg-base-100 dark:bg-[#1a1a2e] min-h-screen'>
      <div className="bg-primary">
        <Navbar />
      </div>
      <div className='container w-[94%] md:w-full mx-auto'>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
