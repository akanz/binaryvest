import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  addMoney,
  allUserDeposits,
  confirmDeposit,
  getUserById,
} from "../../redux/actions/admin";
import { getDeposit } from "../../redux/actions/deposit";
import { clearMessage, setMessage } from "../../redux/actions/message";
import Error from "../otherComps/404";
import BtnLoader from "../otherComps/BtnLoader";
import Errormessage from "../otherComps/Errormessage";
import Loader from "../otherComps/Loader";
import Successmessage from "../otherComps/Successmessage";
import { userContext } from "./index";

const ConfirmDeposit = () => {
  const message = useSelector((state) => state.message);
  const admin = useSelector((state) => state.admin);
  const depRequests = useSelector((state) => state.user);
  const dispatch = useDispatch("");
  const user = useContext(userContext)[0];
  let { id } = useParams();

  const [pckg, setPckg] = useState({
    packageOption: "",
    userId: id,
    amount: 0,
  });

  useEffect(() => {
    dispatch(getUserById(id))
    dispatch(allUserDeposits(id));
  }, []);

  const onSubmit = (e) => {
    dispatch(clearMessage());
    e.preventDefault();
    dispatch(confirmDeposit(pckg));
    dispatch(setMessage());
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };

  if (!admin.user.data && admin.isLoading) {
    return <Loader />;
  }
  if (!admin.user.data && !admin.isLoading) {
    return <Error />;
  }
  return (
    <div>
      <div className="text-3xl text-blueish font-semibold text-center my-3 capitalize">
        authorize deposit
      </div>
      {message.status === 200 && (
        <Successmessage>{message.message}</Successmessage>
      )}
      {message.status === 400 && <Errormessage>{message.message}</Errormessage>}
      {user.data && (
        <form className="grid" onSubmit={onSubmit}>
          <div className="my-3 grid">
            <label className="mb-1 text-gray-500 px-2">User E-mail</label>
            <input
              className="form-input border-transparent focus:outline-none"
              value={user.data.email}
              readOnly
            />
          </div>

          <div className="my-3 mb-2 grid">
            <label className="mb-1 text-gray-500 px-2">username</label>
            <input
              className="form-input border-transparent focus:outline-none"
              value={user.data.username}
              readOnly
            />
          </div>
          {depRequests.deposits &&
            depRequests.deposits.map((req) => (
              <div key={req._id} className="">
                {" "}
                {req.status === "pending" && (
                  <div className="flex items-center justify-between border-b border-gray-300 p-2 px-4">
                    <div className="text-base">
                      Amount:{" "}
                      <span className="text-turquoise font-semibold">
                        ${req.amount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => dispatch(addMoney(req._id))}
                        className="button mx-3 flex items-center"
                      >
                        {/* {depRequests.isLoading && <BtnLoader />} */}
                        Confirm
                      </button>

                      <Link
                        to="/admin"
                        className="bg-black flex items-center text-white px-4 rounded uppercase"
                      >
                        Deny
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          <h2 className="my-4 mt-12 text-xl text-center font-light">
            Add Money directly to{" "}
            <span className="font-semibold">@{user.data.username}'s</span>{" "}
            wallet
          </h2>
          <div className="my-3 grid">
            <label className="mb-1 text-gray-500 px-2">Amount</label>
            <input
              className="form-input border-gray-300 rounded"
              value={pckg.amount}
              onChange={(e) => setPckg({ ...pckg, amount: e.target.value })}
              name={pckg.amount}
            />
          </div>

          <div className="grid md:grid-cols-2 place-items-center">
            <button
              type="submit"
              className="button flex items-center justify-center font-semibold my-5 w-full md:w-4/5 uppercase"
            >
              {admin.isLoading && <BtnLoader />}
              add
            </button>
            <Link
              to="/admin"
              className="flex items-center justify-center font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded"
            >
              go back
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default ConfirmDeposit;
