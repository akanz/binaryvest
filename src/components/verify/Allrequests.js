import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../redux/actions/message";
import Loader from "../otherComps/Loader";
import Reqcard from "./Reqcard";

const Allrequests = () => {
  const verify = useSelector((state) => state.verify);
  const dispatch = useDispatch("");

  useEffect(() => {
    dispatch(clearMessage());
  }, []);
 
  console.log(verify);

  return (
    <div>
      <h3 className="text-3xl text-center text-gray-700 my-3">
        Verification Requests
      </h3>
      {verify.isLoading && <Loader />}
      {verify.allRequest.length > 0 && (
        <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verify.allRequest.length > 0 &&
            verify.allRequest
              .filter((req) => req.status !== "accepted")
              .map((req) => <Reqcard key={req._id} {...req} />)}
        </div>
      )}
    </div>
  );
};

export default Allrequests;
