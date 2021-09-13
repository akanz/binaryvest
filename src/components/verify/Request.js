import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyReq } from "../../redux/actions/verify";
import { clearMessage } from "../../redux/actions/message";

const Request = () => {
  const dispatch = useDispatch("");
  const ver = useSelector((state) => state.verify);
  const history = useHistory()

  const verifyUser = (value) => {
    dispatch(clearMessage())
    dispatch(verifyReq(value))


  };

  return (
    <div>
      {!ver.isLoading && (
        <div className="shadow rounded">
          <div className="p-2 h-96 border-b border-gray-300">
            <img
              className="w-full h-full object-cover"
              src={ver.request.metadata.path}
              alt=""
            />
          </div>
          <div className="text-xl p-2">{ver.request.name}</div>
          <div className="flex p-2 text-lg items-center justify-between text-gray-700">
            <h3>
              <span className="text-gray-600">ID card type:</span>
              <span className="text-blueish">{ver.request.label}</span>
            </h3>
            <h3>
              <span className="text-gray-600">Status:</span> <span>{ver.request.status}</span>
            </h3>
          </div>
          <div className="p-2">
            <span className="text-gray-600">Phone No: </span>
            <span className="text-blueish">{ver.request.phone}</span>
          </div>
          <div className="grid md:grid-cols-2 place-items-center">
            <button
              type="submit"
              onClick={()=> verifyUser({ id: ver.request._id, status: "accepted" })}
              className="button flex items-center justify-center font-semibold my-5 w-full md:w-4/5 uppercase"
            >
              {/* {admin.isLoading && <BtnLoader />} */}
              Verify user
            </button>
            <button className="flex items-center justify-center font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded">
              deny
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
