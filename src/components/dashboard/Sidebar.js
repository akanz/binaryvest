import React from "react";
import profPic from "../../img/profilepic.svg";
import profIcon from "../../img/prof.svg";
import notifIcon from "../../img/notif.svg";
import passwordIcon from "../../img/password.svg";
import logoutIcon from "../../img/logout.svg";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { VscVerified } from "react-icons/vsc";

import { Link } from "react-router-dom";
const Sidebar = ({ user }) => {
  const sideMenu = [
    { img: profIcon, icon: "", alt: "", name: "Edit Profile", url: "H" },
    { img: "", icon: <GiPayMoney />, alt: "", name: "Deposit", url: "/invest" },
    {
      img: "",
      icon: <VscVerified />,
      alt: "",
      name: "Verify account",
      url: "/verification",
    },
    {
      img: "",
      icon: <GiReceiveMoney />,
      alt: "",
      name: "Withdraw",
      url: "/withdraw",
    },
    { img: passwordIcon, icon: "", alt: "", name: "Change Password", url: "" },
    { img: logoutIcon, icon: "", alt: "", name: "Logout", url: "#" },
  ];
  return (
    <div className="bg-white shadow-xl min-h-screen h-full sticky top-10 border-gray-100 border hidden md:block w-2/15 lg:w-2/10 py-12">
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
          <Link key={i} to={menu.url}>
            <div className="flex p-3 px-5 border-b border-gray-300 items-center">
              <div className="mr-4">
                <img src={menu.img} alt={menu.alt} />
                <div className='text-turquoise'>{menu.icon}</div>
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
