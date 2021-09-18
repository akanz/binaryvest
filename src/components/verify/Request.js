import React from "react";
import { Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyReq } from "../../redux/actions/verify";
import { clearMessage } from "../../redux/actions/message";
import { VscVerified } from "react-icons/vsc";

const Request = () => {
  const dispatch = useDispatch("");
  const ver = useSelector((state) => state.verify);
  const users = useSelector((state) => state.admin.allUsers);
  const message = useSelector((state) => state.message);

  const verifyUser = (value) => {
    dispatch(clearMessage());
    dispatch(verifyReq(value));

  };

  return (
    <div>
      {message.status === 200 && ver.request.status !== 'pending' && (
        <div className="my-3 text-green-700 text-4xl grid justify-items-center p-8">
          <VscVerified className="w-40 h-40" />
          <div>User Verified</div>
        </div>
      )}
      {!ver.isLoading  && (
        <div className="shadow rounded">
          {ver.request.metadata.map((img, i) => (
            <div key={i} className="p-2 h-96 border-b border-gray-300">
              <img
                className="w-full h-full object-cover"
                src={img.path}
                alt=""
              />
            </div>
          ))}

          <div className="text-xl text-gray-700 p-2">@{ver.request.name}</div>
          <div className="flex p-2 text-lg items-center justify-between text-gray-700">
            <h3>
              <span className="text-gray-600">ID card type:</span>
              <span className="text-blueish">{ver.request.label}</span>
            </h3>
            <h3>
              <span className="text-gray-600">Status:</span>{" "}
              <span className="text-yellow-600">{ver.request.status}</span>
            </h3>
          </div>
          <div className="p-2">
            <span className="text-gray-600">Phone No: </span>
            <span className="text-blueish">{ver.request.phone}</span>
          </div>
          <div className="p-2">
            <span className="text-gray-600">SSN: </span>
            <span className="text-blueish">{ver.request.ssn}</span>
          </div>
          <div className="p-2">
            <span className="text-gray-600">ID: </span>
            <span className="text-blueish">{ver.request.userId}</span>
          </div>
          {users
            .filter((user) => user._id === ver.request.userId)
            .map((user) => (
              <div>
                {user.username}
                {user.name.firstname}
                {user._id}
              </div>
            ))}
          <div className="grid md:grid-cols-2 place-items-center">
            <button
              type="submit"
              onClick={() =>
                verifyUser({ id: ver.request._id, status: "accepted" })
              }
              className="button flex items-center justify-center font-semibold my-5 w-full md:w-4/5 uppercase"
            >
              {/* {admin.isLoading && <BtnLoader />} */}
              Verify user
            </button>
            <Link
              to="/admin"
              className="flex items-center justify-center font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded"
            >
              deny
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
