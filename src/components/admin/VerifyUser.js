import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userContext } from ".";
import { verifyUser } from "../../redux/actions/admin";

const Verify = () => {
  const user = useContext(userContext)[0].data;
  const ver = useSelector((state) => state.verify);
  const dispatch = useDispatch("");
  console.log(user);

  return (
    <div>
      <div className="shadow rounded mb-20">
        <div className="border-b flex justify-center border-gray-300 h-96">
          <img
            className="w-8/10 mx-auto object-contain h-full"
            src={user.imageUrl}
            alt=""
          />
        </div>
        <div className="my-2 p-2">
          <div>@{user.username}</div>
          <div>{user.email}</div>
          <div>{user.isVerified ? "verified" : "not verified"}</div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
