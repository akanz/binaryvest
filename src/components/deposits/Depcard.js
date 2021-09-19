import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addMoney } from "../../redux/actions/admin";
import Successmessage from "../otherComps/Successmessage";
import Errormessage from "../otherComps/Errormessage";
import { clearMessage } from "../../redux/actions/message";

let date;
const Depcard = ({ ...req }) => {
  const dispatch = useDispatch("");
  const message = useSelector((state) => state.message);
  const acceptDep = () => {
    dispatch(clearMessage())
    dispatch(addMoney(req._id));

    setTimeout(() => {
       dispatch(clearMessage()) 
    }, 3000);
  };
  return (
    <div className="shadow rounded text-gray-600" key={req._id}>
      {/* {message.status === 200 && (
        <Successmessage>{message.message}</Successmessage>
      )}
      {message.status === 400 && <Errormessage>{message.message}</Errormessage>} */}
      <div className="p-2">
        <h3>{req.email}</h3>
      </div>
      <div className="flex p-2 text-sm items-center justify-between text-gray-700">
        <h3>
          <span className="">Amount: </span>
          <span className="text-blueish">${req.amount}</span>
        </h3>
        <h3>
          <span className="text-gray-600">Status:</span>{" "}
          <span className="text-yellow-600">{req.status}</span>
        </h3>
      </div>
      <div className="p-2">
        <span className="text-gray-600">Date: </span>
        <span className="text-blueish">
          {(date = moment(req.date).format("LL"))}
        </span>
      </div>
      <div className="p-2 grid md:grid-cols-2 gap-x-24 gap-y-4 border-t border-gray-300">
        <button onClick={acceptDep} className="button flex justify-center">
          Confirm
        </button>
        <Link
          className="bg-darkblue text-white text-center p-2 px-5 rounded uppercase"
          to="/admin"
        >
          Deny
        </Link>
      </div>
    </div>
  );
};

export default Depcard;
