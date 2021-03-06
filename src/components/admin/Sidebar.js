import React from "react";
import profPic from "../../img/profile.svg";
import profIcon from "../../img/prof.svg";
import notifIcon from "../../img/notif.svg";
import passwordIcon from "../../img/password.svg";
import logoutIcon from "../../img/logout.svg";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { MdAccountBalanceWallet } from "react-icons/md";
import { VscVerified } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";

const Sidebar = ({ user }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch("");
  const sideMenu = [
    // { img: profIcon, alt: "", name: "Edit Profile", url: "#", icon: "" },
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
      name: "verify users",
      url: `${url}/allRequests`,
      icon: <VscVerified />,
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

    // { img: passwordIcon, alt: "", name: "Change Password", url: "#", icon: "" },
    { img: logoutIcon, alt: "", name: "logout", url: "#", icon: "" },
  ];
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div className="bg-white shadow-xl min-h-screen h-full sticky top-0 border-gray-100 border hidden md:block w-2/15 lg:w-2/10 py-12">
      <div>
        <div className="px-10">
          <img src={user.imageUrl ? user.imageUrl : profPic} alt="" />
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
          <Link
            key={i}
            to={`${menu.url}`}
            onClick={
              menu.name.includes("logout")
                ? handleLogout
                : () => {
                    return;
                  }
            }
          >
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
