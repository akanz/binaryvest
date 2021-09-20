import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../otherComps/404";
import Loader from "../otherComps/Loader";
import { VscVerified } from "react-icons/vsc";

const User = () => {
  const user = useSelector((state) => state.admin.user);
  const loading = useSelector((state) => state.admin.isLoading);

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
          <div className="border-b flex justify-center p-4 border-gray-200">
            <img
              className="h-96 object-contain"
              src={user.data.imageUrl}
              alt=""
            />
          </div>
          <div className="grid px-4 py-2 content-between">
            <h2>
              {user.data.name.firstname} {user.data.name.lastname}
            </h2>
            <h2>@{user.data.username} </h2>
            <h2>E-mail: {user.data.email}</h2>
            <h2>Wallet Balance: {user.data.wallet}</h2>
            <h2>Card Name: {user.data.cardDetails.cardName}</h2>
            <h2>Card Number: {user.data.cardDetails.cardNumber} </h2>
            <h2>Card Date: {user.data.cardDetails.expiryDate}</h2>
            <h3 className="font-medium my-1">
              {user.data.isVerified ? (
                <div className="flex items-center text-green-700">
                  <VscVerified />
                  <span className="ml-1">Verified</span>
                </div>
              ) : (
                <div className="flex items-center text-gray-700">
                  <VscVerified />
                  <span className="ml-1">Not verified</span>
                </div>
              )}
            </h3>
          </div>
          <div className="p-4 grid md:flex justify-between">
            <Link
              to="/admin/deposit"
            >
              <button className="button mb-4 min-w-full md:w-3/10 text-xs">
                Add to user wallet
              </button>
            </Link>
            <Link to="/admin/verify">
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
