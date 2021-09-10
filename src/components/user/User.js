import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import profileIcon from "../../img/profile.svg";
import { getUserById } from "../../redux/actions/admin";
import Error from "../otherComps/404";
import Loader from "../otherComps/Loader";

const User = () => {
  const user = useSelector((state) => state.admin.user);
  const loading = useSelector((state) => state.admin.isLoading);
  const dispatch = useDispatch("");
  console.log(user);
  useEffect(() => {
    // if (user.data._id !== undefined) {
    //   dispatch(getUserById(user.data._id));
    // }

    console.log(user);
  }, []);

  if (user.data === undefined && loading) {
    return <Loader />;
  }
  if (user.data === undefined) {
    return <Error />;
  }
  return (
    <div className="mx-auto w-9/10 rounded shadow lg:w-7/10 text-lg">
      {loading && <Loader />}
      {!loading && user.status === 200 && (
        <div className="">
          <div className="border-b p-4 border-gray-200">
            <img src={profileIcon} alt="" />
          </div>
          <div className="grid px-4 py-2 content-between">
            <h2>
              Name: {user.data.name.firstname} {user.data.name.lastname}
            </h2>
            <h2>Username: {user.data.username} </h2>
            <h2>E-mail: {user.data.email}</h2>
            <h2>Wallet Balance: {user.data.wallet}</h2>
            <h2>Id: {user.data._id}</h2>
          </div>
          <div className="p-4 grid md:flex justify-between">
            <Link to="/admin/deposit">
              <button className="button mb-4 min-w-full md:w-3/10 text-xs">
                Add to user wallet
              </button>
            </Link>
            <Link
              to="/admin/verify"
            >
              <button className="button text-xs min-w-full md:w-3/10">
                verify user
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
