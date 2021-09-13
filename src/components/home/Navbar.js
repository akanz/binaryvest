import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { IoLogInOutline } from "react-icons/io5";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { logout } from "../../redux/actions/auth";
import menuIcon from "../../img/menu.svg";
import userIcon from "../../img/user.svg";
import navReview from "../../img/navreview.svg";
import navedu from "../../img/navedu.svg";
import navfaq from "../../img/navfaq.svg";
import Dropdown from "../../helpers/Dropdown";
import BVIcon from '../../img/bv_logo.jpg'
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const dispatch = useDispatch();
  const msg = useSelector((state) => state.msg);
  const user = useSelector((state) => state.auth);
  const history = useHistory().location.pathname;
  console.log(history);

  const handleClick = () => {
    setSideBar(!sideBar);
  };
  const handleLogout = () => {
    dispatch(logout());
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
                <HiMenuAlt3 className='text-blueish h-8 w-8' />
              </button>
              <Link to="/" className="text-blueish logo font-semibold">
                <span>Binary</span><span className='text-red-600'>Vest</span>
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
          <div
            className={`transform transition duration-300 ease-in-out ${
              sideBar ? "" : "-translate-x-full"
            } bg-white fixed top-0 z-10 shadow-xl rounded-l-lg left-0 p-5 h-full w-4/5 `}
          >
            <div className="flex justify-between items-center">
            <Link to="/" className="text-blueish logo font-semibold">
                <span>Binary</span><span className='text-red-600'>Vest</span>
              </Link>
              <div onClick={handleClick}>
                <GrClose className=" w-6 h-6" />
              </div>
            </div>
            <div className="w-9/10 mx-auto text-gray-600 text-lg capitalize font-light tracking-wider my-5">
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
                <Link to="/education" className="flex items-center">
                  <div>
                    <img src={navedu} className="w-6" alt="" />
                  </div>
                  <div className="ml-2">Education</div>
                </Link>
              </div>
              <div
                className={`${history === "/invest" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/invest" className="flex items-center">
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
                <Link to="/withdraw" className="flex items-center">
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
                  <Link to="/admin" className="flex items-center">
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
                <Link to="/dashboard" className="flex items-center">
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
                <Link to="/reviews" className="flex items-center">
                  <div>
                    <img src={navReview} className="w-6" alt="" />
                  </div>
                  <div className="ml-2">Reviews</div>
                </Link>
              </div>
              <div
                className={`${history === "/faq" ? "active" : ""} sideBar`}
                onClick={handleClick}
              >
                <Link to="/faqs" className="flex items-center">
                  <div>
                    <img src={navfaq} className="w-6" alt="" />
                  </div>
                  <div className="ml-2">FAQs</div>
                </Link>
              </div>
            </div>
          </div>
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
              data={<img src={userIcon} alt="User avatar" />}
              className="top-12"
            >
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
