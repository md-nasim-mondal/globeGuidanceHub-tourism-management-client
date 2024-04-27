import { NavLink, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../../../providers/Auth";
import userDefaultPic from "../../../assets/images/user.png";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const displayName = user?.displayName;
  const photoURL = user?.photoURL ;
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          text: "SignOut Successful",
          icon: "success",
          showConfirmButton: false,
          position: "top",
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: `${error.message}`,
          icon: "error",
          showConfirmButton: false,
          position: "top",
          timer: 10000,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            !isActive
              ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
              : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
          }
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            !isActive
              ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
              : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
          }
          to="/allTouristsSpot">
          All Tourists Spot
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
              }
              to="/addTouristsSpot">
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
              }
              to="/myList">
              My List
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            onClick={() => setOpen(!open)}
            className={`btn-ghost lg:hidden
            ${user ? "2xl:hidden" : "lg:hidden"}
                            `}>
            {open ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </div>
          <ul
            tabIndex={0}
            //  dropdown-content
            className={`menu menu-sm
                             absolute mt-3 z-[50] p-2 shadow 
             ${user ? "2xl:hidden" : "lg:hidden"}
                            ${open ? "" : "hidden"}
                             bg-base-100 rounded-box w-52`}>
            {navLinks}
          </ul>
        </div>
        <NavLink
          onClick={() => setOpen(false)}
          className="animate__animated animate__backInRight btn-ghost md:text-2xl rounded-2xl xl:text-3xl flex gap-2 text-black items-center font-bold flex-wrap">
          {/* <img
            className="w-10 lg:w-12 xl:w-14"
            src={Logo}
            alt="Logo Coming Soon"
          /> */}
          <p className="flex flex-wrap">
            Globe
            <span className="text-green-600">GuidanceHub</span>
          </p>
        </NavLink>
      </div>
      <div
        className={`animate__animated animate__backInUp navbar-center hidden lg:flex
        ${user ? "2xl:flex" : "lg:flex"}
                `}>
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="animate__animated animate__backInLeft navbar-end">
        {user ? (
          <div className="flex items-center">
            <div data-tooltip-id="my-tooltip" data-tooltip-content={displayName}>
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img
                    alt="Photo Coming Soon.."
                    src={photoURL || userDefaultPic}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                handleSignOut();
              }}
              className="btn btn-sm md:btn-md ml-0.5 md:ml-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]">
              SignOut
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-2">
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn btn-sm md:btn-md mr-0.5 md:mr-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]"
                  : "btn btn-sm md:btn-md btn-outline bg-[#23BE0A] border-none  btn-ghost mr-0.5 md:mr-4"
              }
              to={"/signIn"}>
              <button>Sign In</button>
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn p btn-sm md:btn-md text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]"
                  : "btn btn-sm md:btn-md btn-outline bg-[#23BE0A] border-none btn-ghost"
              }
              to={"/signUp"}>
              <button>Sign Up</button>
            </NavLink>
          </div>
        )}
      </div>
      <Tooltip id="my-tooltip" place="left" />
    </div>
  );
};

export default Navbar;
