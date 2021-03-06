import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import arrWhite from "../../img/arrW.svg";
import profIcon from "../../img/prof.svg";
import notifIcon from "../../img/notif.svg";
import passwordIcon from "../../img/password.svg";
import logoutIcon from "../../img/logout.svg";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { VscVerified } from "react-icons/vsc";

const Dashboard = ({ user }) => {
  const users = useSelector((state) => state.admin);
  const ver = useSelector((state) => state.verify);
  const deposit = useSelector((state) => state.deposit);

  const { url } = useRouteMatch();
  const navMenu = [
    { img: profIcon, alt: "", name: "Edit Profile", url: "#", icon: "" },
    {
      img: "",
      alt: "",
      name: "Dashboard",
      url: "",
      icon: <GrUserAdmin className="text-turquoise" />,
    },
    {
      img: "",
      alt: "",
      name: "All users",
      url: `${url}/users`,
      icon: <HiOutlineUsers className="text-turquoise" />,
    },
    {
      img: '',
      alt: "",
      name: "All Verification requests",
      url: `${url}/allRequests`,
      icon:  <VscVerified />,
    },
    {
      img: "",
      alt: "",
      name: "Investment packages",
      url: `${url}/plans`,
      icon: <MdAccountBalanceWallet className="text-turquoise" />,
    },
    {
      img: "",
      alt: "",
      name: "new package",
      url: `${url}/createPlan`,
      icon: <MdAccountBalanceWallet className="text-turquoise" />,
    },
    // {
    //   img: "",
    //   alt: "",
    //   name: "verify user",
    //   url: `${url}/verify`,
    //   icon: <VscVerified />,
    // },
    { img: passwordIcon, alt: "", name: "Change Password", url: "#", icon: "" },
    { img: logoutIcon, alt: "", name: "Logout", url: "#", icon: "" },
  ];
  return (
    <div className=" mx-auto md:w-8/10 py-6 md:pt-10 md:pl-6 md:pr-14">
      <div className="my-6 lg:flex">
        <div className="flex w-screen md:hidden my-3 py-3 shadow border-b border-t border-gray-200 p-2 items-center overflow-x-scroll">
          {navMenu.map((menu, i) => (
            <div key={i} className="min-w-4/10 h-full">
              <Link className="flex" to={`${menu.url}`}>
                <div className="mr-1 flex items-center">
                  <img src={menu.img} alt="" />
                  <div>{menu.icon}</div>
                </div>
                <div className="text-sm">
                  <div>{menu.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:mr-4 lg:mr-8">
          <div className="rounded border border-gray-100 shadow-md mb-5 p-4">
            <div className="flex justify-between items-center my-2 mb-5">
              <h2>Website Performance</h2>
              <div className="text-xs text-blue-800">Show: Daily</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="px-3 py-2 grid h-20 bg-yellow-400 text-gray-700 text-xs rounded-xl">
                <Link to="/admin/allDeposits">
                  <h3 className="cursor-pointer hover:underline">
                    Deposit requests
                  </h3>
                </Link>
                <div className="flex items-center my-2">
                  <div className="mr-2">
                    {
                      deposit.allDeposits.filter(
                        (req) => req.status === "pending"
                      ).length
                    }
                  </div>
                  <img src={arrWhite} alt="" />
                </div>
              </div>
              <div className="px-3 py-2 grid h-20 bg-lightteal text-white text-xs rounded-xl">
                <Link to="/admin/users">
                  <h3 className="cursor-pointer hover:underline">
                    Registered Users
                  </h3>
                </Link>

                <div className="flex items-center my-2">
                  <span className="mr-2">{users.allUsers.length}</span>
                  <img src={arrWhite} alt="" />
                </div>
              </div>
              <div className="px-3 py-2 grid h-20 bg-blue-800 text-white text-xs rounded-xl">
                <Link to="/admin/allRequests">
                  <h3 className="cursor-pointer hover:underline">
                    Verification requests
                  </h3>
                </Link>
                <div className="flex items-center my-2">
                  <div className="mr-2">
                    {
                      ver.allRequest.filter((req) => req.status === "pending")
                        .length
                    }
                  </div>
                  <img src={arrWhite} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 shadow-md">
            <div className="flex items-center p-4 justify-between">
              <div>Binaryvest Information</div>
            </div>
            <div className="px-4">Today</div>
            <div className="my-3">
              <div className="flex items-center border-b px-4 py-2 border-gray-200">
                <Link
                  className="flex items-center justify-between w-full text-blueish text-lg"
                  to="/admin/users"
                >
                  <div>All users</div> <div>{users.allUsers.length}</div>
                </Link>
              </div>
              <div className="flex items-center border-b px-4 py-2 border-gray-200">
                <Link
                  className="flex items-center justify-between w-full text-blueish text-lg"
                  to="/admin/allRequests"
                >
                  <div>Verification Requests</div>{" "}
                  <div>
                    {
                      ver.allRequest.filter((req) => req.status === "pending")
                        .length
                    }
                  </div>
                </Link>
              </div>
              <div className="flex items-center border-b px-4 py-2 border-gray-200">
                <Link
                  className="flex items-center justify-between w-full text-blueish text-lg"
                  to="/admin/plans"
                >
                  <div>All Packages</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 md:mr-4 lg:w-3/10 lg:m-0">
          <div className="rounded border border-gray-100 shadow-md">
            <div className="flex justify-between items-center py-4 px-3">
              <h2 className="font-semibold text-xs mr-4">
                Pending Confirmations
              </h2>
              <h4 className="text-blue-800 text-xs">View all</h4>
            </div>
            <div className="flex items-center border-b px-4 py-2 border-gray-200">
              <Link
                className="flex items-center justify-between w-full text-blueish text-lg"
                to="/admin/allDeposits"
              >
                <div>Deposit Requests</div>{" "}
                <div>
                  {
                    deposit.allDeposits.filter(
                      (req) => req.status === "pending"
                    ).length
                  }
                </div>
              </Link>
            </div>

            <div className="flex items-center border-b px-4 py-2 border-gray-200">
              <Link
                className="flex items-center justify-between w-full text-blueish text-lg"
                to="/admin/users"
              >
                <div>Withdrawal Requests</div> <div>0</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
