import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearMessage } from "../../redux/actions/message";
import { getVerRequest } from "../../redux/actions/verify";

const Reqcard = ({ ...req }) => {
  const dispatch = useDispatch("");
  const getRequest = () => {
    dispatch(clearMessage());
    console.log(req._id);
    dispatch(getVerRequest(req._id));
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
    
  };

  
  return (
    <Link
      to={`/admin/verify/${req._id}`}
      onClick={getRequest}
      className="transform hover:scale-110 ease-in-out transition duration-300"
    >
      <div className="shadow rounded" key={req._id}>
        
          {req.metadata.map((img, i) => (
            <div key={i} className="p-2 my-1 w-8/10 mx-auto h-full border-b border-gray-300">
            <img
              className="w-full h-full object-cover"
              src={img.path}
              alt=""
            />
            </div>
          ))}
        
        <div className="p-2 text-lg">
          <h3>@{req.name}</h3>
        </div>
        <div className="flex p-2 text-sm items-center justify-between text-gray-700">
          <h3>
            <span className="text-gray-600">ID card type:</span>
            <span className="text-blueish">{req.label}</span>
          </h3>
          <h3>
            <span className="text-gray-600">Status:</span>{" "}
            <span className="text-yellow-600">{req.status}</span>
          </h3>
        </div>
        <div className="p-2">
          <span className="text-gray-600">Phone No: </span>
          <span className="text-blueish">{req.phone}</span>
        </div>
      </div>
    </Link>
  );
};

export default Reqcard;
