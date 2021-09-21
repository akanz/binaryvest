import React, { useContext, useEffect, useState } from "react";
import { VscVerified } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userContext } from ".";
import { getUserById, verifyUser } from "../../redux/actions/admin";
import { clearMessage } from "../../redux/actions/message";
import { getVerRequest, verifyDirectly } from "../../redux/actions/verify";
import BtnLoader from "../otherComps/BtnLoader";
import Errormessage from "../otherComps/Errormessage";
import Loader from "../otherComps/Loader";
import Successmessage from "../otherComps/Successmessage";

const Verify = () => {
  const user = useContext(userContext)[0].data;
  const ver = useSelector((state) => state.verify);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch("");
  let {id} = useParams();

  const handleVerify = (id, status) => {
    dispatch(clearMessage());
    dispatch(verifyDirectly({ id, status }));

    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };
  useEffect(() => {
    dispatch(getUserById(id))
  }, [])

  if(!user){
    return <Loader />
  }
  return (
    <div>
      {message.status === 200 && (
        <Successmessage>{message.message}</Successmessage>
      )}
      {message.status === 400 && <Errormessage>{message.message}</Errormessage>}

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
          <div><a href={`mailto:${user.email}`}>{user.email}</a></div>
          <div className='flex items-center my-1'>
            {user.isVerified ? (
              <span className='text-green-700 flex items-center'>
                <VscVerified /> <span className="ml-1">Verified</span>
              </span>
            ) : (
              <span className='text-gray-500 flex items-center'>
                <VscVerified /> <span className="ml-1">Not verified</span>
              </span>
            )}
          </div>
        </div>
        <div className="my-2">
          <div className="my-3 grid">
            <label className="mb-1 text-gray-500 px-2">User E-mail</label>
            <input
              className="form-input border-transparent focus:outline-none"
              value={user.email}
              readOnly
            />
          </div>

          <div className="my-3 grid">
            <label className="mb-1 text-gray-500 px-2">username</label>
            <input
              className="form-input border-transparent focus:outline-none"
              value={user.username}
              readOnly
            />
          </div>

          <div className="grid w-9/10 md:7/10 mx-auto md:grid-cols-2 place-items-center">
            <button
              onClick={() => handleVerify(user._id, true)}
              type="submit"
              className="button flex items-center justify-center font-semibold my-5 w-full md:w-4/5 uppercase"
            >
              {ver.isLoading && <BtnLoader />}
              Verify user
            </button>

            <Link
              to="/admin"
              className="flex items-center justify-center font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded"
            >
              deny
            </Link>
            <button
              onClick={() => handleVerify(user._id, false)}
              type="submit"
              className="button flex items-center justify-center font-semibold my-5 w-full md:w-4/5 uppercase"
            >
              {/* {ver.isLoading && <BtnLoader />} */}
              Unverify user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
