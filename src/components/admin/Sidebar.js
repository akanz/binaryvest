import React from "react";
import profPic from "../../img/profilepic.svg";
import profIcon from "../../img/prof.svg";
import notifIcon from "../../img/notif.svg";
import passwordIcon from "../../img/password.svg";
import logoutIcon from "../../img/logout.svg";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { Link, useRouteMatch } from "react-router-dom";
import { MdAccountBalanceWallet } from "react-icons/md";
import { VscVerified } from "react-icons/vsc";

const Sidebar = ({ user }) => {
  const {url} = useRouteMatch();
  
  const sideMenu = [
    { img: profIcon, alt: "", name: "Edit Profile", url: "#", icon: "" },
    { img: notifIcon, alt: "", name: "Notifications", url: "#", icon: "" },
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
      img: "",
      alt: "",
      name: "Confirm deposit",
      url: `${url}/deposit`,
      icon: <MdAccountBalanceWallet className="text-turquoise" />,
    },
    {
      img: "",
      alt: "",
      name: "new package",
      url: `${url}/createPlan`,
      icon: <MdAccountBalanceWallet className="text-turquoise" />,
    },
    {
      img: "",
      alt: "",
      name: "verify user",
      url: `${url}/verify`,
      icon: <VscVerified />,
    },
    { img: passwordIcon, alt: "", name: "Change Password", url: "#", icon: "" },
    { img: logoutIcon, alt: "", name: "Logout", url: "#", icon: "" },
  ];
  return (
    <div className="bg-white shadow-xl min-h-screen h-full top-20 border-gray-100 border hidden md:block w-2/15 lg:w-2/10 py-12">
      <div>
        <div className="px-10">
          <img src={profPic} alt="" />
        </div>
        <div className="my-3 px-5 text-gray-800">
          <h2 className="text-xl font-medium capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <h4 className="text-sm">@{user.username}</h4>
        </div>
      </div>
      <div>
        {sideMenu.map((menu, i) => (
          <Link key={i} to={`${menu.url}`}>
            <div className="flex p-3 px-5 border-b border-gray-300 items-center">
              <div className="mr-4 flex items-center">
                <img src={menu.img} alt={menu.alt} />
                <div>{menu.icon}</div>
              </div>
              <div className="text-center">{menu.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
