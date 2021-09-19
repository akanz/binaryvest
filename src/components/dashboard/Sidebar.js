import React, { useState } from "react";
import profPic from "../../img/profile.svg";
import profIcon from "../../img/prof.svg";
import notifIcon from "../../img/notif.svg";
import passwordIcon from "../../img/password.svg";
import logoutIcon from "../../img/logout.svg";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { VscVerified } from "react-icons/vsc";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, upload } from "../../redux/actions/auth";
const Sidebar = ({ user }) => {
  const [prof_pic, setProf_pic] = useState({
    img: null,
    preview: null,
    err: false,
  });
  console.log(user);
  const sideMenu = [
    // { img: profIcon, icon: "", alt: "", name: "Edit Profile", url: "H" },
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
    // { img: passwordIcon, icon: "", alt: "", name: "Change Password", url: "" },
    { img: logoutIcon, icon: "", alt: "", name: "logout", url: "#" },
  ];
  const dispatch = useDispatch("");
  const handleLogout = () => {
    dispatch(logout());
  };
  const uploadPic = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = [
      "image/png",
      "image/jpeg",
      "image/heic",
      "image/webp",
      "application/pdf",
    ];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      // setProf_pic({...prof_pic, img: selected});
      let reader = new FileReader();
      reader.onloadend = () => {
        setProf_pic({
          ...prof_pic,
          err: false,
          preview: reader.result,
          img: selected,
        });
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("File not supported");
      setProf_pic({ ...prof_pic, err: true });
    }
  };
  const submitPic = () => {
    const formData = new FormData();
    formData.append("avatar", prof_pic.img);
    formData.append("id", user._id);
    dispatch(upload(formData));
  };

  return (
    <div className="bg-white shadow-xl min-h-screen h-full sticky top-0 border-gray-100 border hidden md:block w-2/15 lg:w-2/10 py-12">
      <div>
        <div className="px-10 relative">
          {user.imageUrl ? (
            <img
              className="rounded-full w-32 h-32 object-cover"
              src={user.imageUrl}
              alt=""
            />
          ) : (
            <img
              className="rounded-full w-32 h-32 object-cover"
              src={prof_pic.img ? prof_pic.preview : profPic}
              alt=""
            />
          )}

          <label htmlFor="profPic">
            <div className="absolute bottom-0 right-12 p-2 rounded-full bg-turquoise text-white cursor-pointer">
              <FiCamera className="h-7 w-7" />
            </div>
          </label>

          <input
            type="file"
            id="profPic"
            onChange={(e) => uploadPic(e)}
            className="hidden"
          />
        </div>
        <div className="my-3 px-5 text-gray-800">
          {prof_pic.img && (
            <div
              onClick={submitPic}
              className="p-2 cursor-pointer rounded-full shadow-md bg-turquoise text-xs mb-3 w-8/10 mx-auto text-center text-white"
            >
              Set as profile picture
            </div>
          )}
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
            to={menu.url}
            onClick={menu.name.includes("logout") ? handleLogout : ""}
          >
            <div className="flex p-3 px-5 border-b border-gray-300 items-center">
              <div className="mr-4">
                <img src={menu.img} alt={menu.alt} />
                <div className="text-turquoise">{menu.icon}</div>
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
