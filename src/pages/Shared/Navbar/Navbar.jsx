import { NavLink, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../../../providers/Auth";
import userDefaultPic from "../../../assets/images/user.png";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import logo from "../../../assets/logo22.svg";
import ThemeSwitcher from "../../../components/ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const displayName = user?.displayName;
  const photoURL = user?.photoURL;

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

  const navLinkClasses = (isActive) =>
    `${
      !isActive
        ? "xl:text-lg font-semibold  rounded-lg text-base-100"
        : "xl:text-lg text-primary border-b-primary border-b-4 font-semibold"
    } hover:text-primary focus:text-primary`;

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) => navLinkClasses(isActive)}
          to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) => navLinkClasses(isActive)}
          to='/allTouristsSpot'>
          All Tourists Spot
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => navLinkClasses(isActive)}
              to='/addTouristsSpot'>
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => navLinkClasses(isActive)}
              to='/myList'>
              My List
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => navLinkClasses(isActive)}
              to='/contact'>
              Contact Us
            </NavLink>
          </li>
          <li className={`${user ? "2xl:hidden" : "lg:hidden"}`}>
            <button
              onClick={() => {
                setOpen(false);
                handleSignOut();
              }}
              className='btn text-lg font-semibold rounded-lg text-base-100 hover:text-red-400'>
              SignOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => navLinkClasses(isActive)}
              to='/contact'>
              Contact Us
            </NavLink>
          </li>
          <li className={`${user ? "2xl:hidden" : "lg:hidden"}`}>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold  rounded-lg text-white mb-2 md:mr-2"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-primary  border-primary-content border-b-4 mb-2 md:mr-2 font-semibold"
              }
              to={"/signIn"}>
              Sign In
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className='navbar bg-accent container w-[94%] md:w-full mx-auto rounded-b-lg items-center pb-4'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            onClick={() => setOpen(!open)}
            className={`btn-ghost lg:hidden`}>
            {open ? (
              <IoClose className='text-2xl text-white dark:text-primary-content' />
            ) : (
              <IoMenu className='text-2xl text-white dark:text-primary-content' />
            )}
          </div>
          <ul
            tabIndex={0}
            //  dropdown-content
            className={`menu menu-sm absolute mt-5 z-[50] p-2 shadow lg:hidden ${
              open ? "block" : "hidden"
            } bg-base-100 dark:bg-lime-100 rounded-b-xl w-52`}>
            {navLinks}
          </ul>
        </div>
        <NavLink
          onClick={() => setOpen(false)}
          className='animate__animated animate__backInRight btn-ghost md:text-2xl rounded-2xl xl:text-3xl flex gap-2 text-base-100 items-center font-bold flex-wrap'>
          <img
            className='w-10 lg:w-12 xl:w-14'
            src={logo}
            alt='Logo Coming Soon'
          />
          <p className='flex flex-wrap text-sm xl:text-xl'>
            Globe
            <span className='text-primary'>GuidanceHub</span>
          </p>
        </NavLink>
      </div>
      <div
        className={`animate__animated animate__backInUp navbar-center hidden lg:flex
        ${user ? "2xl:flex" : "lg:flex"}`}>
        <ul className='menu menu-horizontal space-x-1'>{navLinks}</ul>
      </div>
      <div className='animate__animated animate__backInLeft navbar-end'>
        {user ? (
          <div className='flex items-center'>
            <div
              data-tooltip-id='my-tooltip'
              data-tooltip-content={displayName}>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'>
                <div className='w-12 rounded-full'>
                  <img
                    alt='Photo Coming Soon..'
                    src={photoURL || userDefaultPic}
                  />
                </div>
              </div>
            </div>
            <div className={`hidden ${user ? "2xl:flex" : "lg:flex"}`}>
              <button
                onClick={() => {
                  setOpen(false);
                  handleSignOut();
                }}
                className='btn btn-sm md:btn-md ml-0.5 md:ml-4 text-lg font-semibold btn-outline border-solid border border-primary-content rounded-lg text-white hover:text-red-500'>
                SignOut
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`hidden ${
              user ? "2xl:flex" : "lg:flex"
            } flex-col md:flex-row gap-2`}>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn btn-sm md:btn-md mr-0.5 md:mr-4 text-lg font-semibold btn-outline border-secondary rounded-lg text-primary"
                  : "btn btn-sm md:btn-md btn-outline border-4 border-primary mr-0.5 md:mr-4 text-base-100 font-semibold"
              }
              to={"/signIn"}>
              Sign In
            </NavLink>
          </div>
        )}
        <div className='ml-2'>
          <ThemeSwitcher />
        </div>
      </div>
      <Tooltip id='my-tooltip' place='left' />
    </div>
  );
};

export default Navbar;
