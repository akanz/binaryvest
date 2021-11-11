import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { logout } from "../../redux/actions/auth";
import userIcon from "../../img/user.svg";
import navReview from "../../img/navreview.svg";
import navedu from "../../img/navedu.svg";
import navfaq from "../../img/navfaq.svg";
import Dropdown from "../../helpers/Dropdown";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion, useCycle } from "framer-motion";
import { GiBookshelf } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const history = useHistory().location.pathname;
  const History = useHistory();
  const handleClick = () => {
    setSideBar(!sideBar);
  };
  const handleLogout = () => {
    dispatch(logout());
    History.push("/");
  };

  const navVariant = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="h-14 shadow font-medium justify-center items-center">
      <nav className="h-full justify-between items-center flex flex-wrap md:w-9/10 mx-auto">
        <div className="w-full md:w-1/4 relative">
          <div className="flex text-blue-900 px-3 tracking-wide font-semibold text-xl w-full md:w-1/2 justify-between items-center">
            <div className="flex items-center">
              <button
                className="focus:outline-none md:hidden mr-4"
                onClick={handleClick}
              >
                {/* <img src={menuIcon} alt="navbar menu" /> */}
                <HiMenuAlt3 className="text-blueish h-8 w-8" />
              </button>
              <Link to="/" className="text-blueish logo font-semibold">
                <span>Binary</span>
                <span className="text-red-600">Vest</span>
              </Link>
            </div>

            <div className="flex md:hidden">
              {!user.isAuthenticated ? (
                <Link
                  to="/login"
                  className="text-blueish flex items-center font-light text-base"
                >
                  <IoLogInOutline className="h-6 w-6 text-blueish font-extralight mr-1" />
                  <span>SIGN IN</span>
                </Link>
              ) : (
                <Link
                  to="#"
                  onClick={handleLogout}
                  className="text-blueish flex font-light items-center text-base"
                >
                  <span>LOGOUT</span>
                </Link>
              )}
            </div>
          </div>
          <motion.div
            variants={navVariant}
            animate={sideBar ? "hidden" : "visible"}
            className={`transform bg-darkblue text-white transition duration-300 ease-in-out ${
              sideBar ? "" : "-translate-x-full"
            } bg-white fixed top-0 z-10 shadow-xl rounded-l-lg left-0 p-5 h-full w-full `}
          >
            <div className="flex justify-between items-center">
              <Link to="/" className="text-blueish logo font-semibold">
                <span>Binary</span>
                <span className="text-red-600">Vest</span>
              </Link>
              <div onClick={handleClick}>
                <CgClose className="w-9 h-9 font-semibold" />
              </div>
            </div>
            <div className="w-9/10 mx-auto text-2xl text-center capitalize font-light tracking-wider my-5">
              <div
                className={`${history === "/" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/">Home</Link>
              </div>
              <div
                className={`${
                  history === "/education" ? "active" : ""
                } sideBar`}
                onClick={handleClick}
              >
                <Link to="/education" className="flex items-center justify-center mb-4">
                  <div>
                    <GiBookshelf />
                  </div>
                  <div className="ml-2">Education</div>
                </Link>
              </div>
              <div
                className={`${history === "/invest" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/invest" className="flex items-center justify-center mb-4">
                  <div>
                    <GiPayMoney />
                  </div>
                  <div className="ml-2">Deposit</div>
                </Link>
              </div>
              <div
                className={`${history === "/withdraw" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/withdraw" className="flex items-center justify-center mb-4">
                  <div>
                    <GiReceiveMoney />
                  </div>
                  <div className="ml-2">Withdraw</div>
                </Link>
              </div>
              {user.data && user.data.isAdmin && (
                <div
                  className={`${history === "/admin" ? "active" : ""} sideBar`}
                  onClick={handleClick}
                >
                  <Link to="/admin" className="flex items-center justify-center mb-4">
                    <div>
                      <BiUser />
                    </div>
                    <div className="ml-2">Admin dashboard</div>
                  </Link>
                </div>
              )}

              <div
                className={`${history === "/profile" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/dashboard" className="flex items-center justify-center mb-4">
                  <div>
                    <BiUser />
                  </div>
                  <div className="ml-2">Profile</div>
                </Link>
              </div>
              <div
                className={`${history === "/reviews" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/reviews" className="flex items-center justify-center mb-4">
                  <div>
                    
                  </div>
                  <div className="ml-2">Reviews</div>
                </Link>
              </div>
              <div
                className={`${history === "/faq" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/faqs" className="flex items-center justify-center mb-4">
                  <div>
                    
                  </div>
                  <div className="ml-2">FAQs</div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          className={`md:flex hidden md:w-7/10 lg:w-4/15 items-center h-full justify-between text-base font-light uppercase text-blue-900`}
        >
          <div className={`${history === "/" ? "active" : ""} navLink`}>
            <Link to="/">Home</Link>
          </div>
          <div className={`${history === "/invest" ? "active" : ""} navLink`}>
            <Link to="/invest">Invest</Link>
          </div>
          <div
            className={`${history === "/education" ? "active" : ""} navLink`}
          >
            <Link to="/education">Education</Link>
          </div>
          <div className={`${history === "/reviews" ? "active" : ""} navLink`}>
            <Link to="/reviews">Reviews</Link>
          </div>
          <div>
            <Dropdown
              data={
                <img
                  src={
                    user.data && user.data.imageUrl
                      ? user.data.imageUrl
                      : userIcon
                  }
                  className="w-10 h-10 rounded-full object-cover"
                  alt="User avatar"
                />
              }
              className="top-12"
            >
              <Link className="items-center" to="#">
                <div className="text-lg normal-case text-blueish font-medium">
                  {user.data && <span>@{user.data.username}</span>}
                </div>
              </Link>

              <Link className="capitalize items-center" to="/invest">
                <div className="mr-1">
                  <GiPayMoney className="w-6 h-6" />
                </div>
                <div>deposit</div>
              </Link>
              <Link className="capitalize items-center" to="/withdraw">
                <div className="mr-1">
                  <GiReceiveMoney className="w-6 h-6" />
                </div>
                <div>withdraw</div>
              </Link>
              {user.data && user.data.isAdmin && (
                <Link className="capitalize items-center" to="/admin">
                  <div className="mr-1">
                    <BiUser className="w-6 h-6" />
                  </div>
                  <div>Admin</div>
                </Link>
              )}
              <Link className="capitalize items-center" to="/dashboard">
                <div className="mr-1">
                  <BiUser className="w-6 h-6" />
                </div>
                <div>profile</div>
              </Link>
              {!user.isAuthenticated ? (
                <Link className="capitalize items-center" to="/login">
                  <div className="mr-1">
                    <IoLogInOutline className="w-6 h-6" />
                  </div>
                  <div>sign in</div>
                </Link>
              ) : (
                <Link
                  className="capitalize items-center"
                  onClick={handleLogout}
                  to="#"
                >
                  <div className="mr-1">
                    <IoLogInOutline className="w-6 h-6" />
                  </div>
                  <div>logout</div>
                </Link>
              )}
            </Dropdown>
          </div>
          {/* {!user.isAuthenticated ? (
            <>
              <Link to="/login">
                <div className="navLink">
                  <IoLogInOutline className=" h-8 w-6" />
                  <span className="ml-1">SIGN IN</span>
                </div>
              </Link>
            </>
          ) : (
            <Link to="#" onClick={handleLogout}>
              <div className="navLink">
                <span className="mr-1">LOGOUT</span>
                <CgLogOut className="h-8 w-6" />
              </div>
            </Link>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
