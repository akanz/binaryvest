import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useHistory } from "react-router-dom";
import { confirmDeposit } from "../../redux/actions/admin";
import { clearMessage, setMessage } from "../../redux/actions/message";
import BtnLoader from "../otherComps/BtnLoader";
import Errormessage from "../otherComps/Errormessage";
import Successmessage from "../otherComps/Successmessage";
import { userContext } from "./index";

const ConfirmDeposit = () => {
  const message = useSelector((state) => state.message);
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch("");
  const user = useContext(userContext)[0];
  const history = useHistory();

  const [pckg, setPckg] = useState({
    packageOption: "",
    userId: user.data._id,
    amount: 0,
  });

  const onSubmit = (e) => {
    dispatch(clearMessage());
    e.preventDefault();
    dispatch(confirmDeposit(pckg));
    dispatch(setMessage());
    setTimeout(() => {
      dispatch(clearMessage());

      history.push("/admin");
    }, 3000);
  };

  return (
    <div>
      <div className="text-3xl text-blueish font-semibold text-center my-3 capitalize">
        authorize deposit
      </div>
      {message.status === 200 && (
        <Successmessage>{message.message}</Successmessage>
      )}
      {message.status === 400 && <Errormessage>{message.message}</Errormessage>}
      <form className="grid" onSubmit={onSubmit}>
        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 px-2">User E-mail</label>
          <input
            className="form-input border-transparent focus:outline-none"
            value={user.data.email}
            readOnly
          />
        </div>

        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 px-2">username</label>
          <input
            className="form-input border-transparent focus:outline-none"
            value={user.data.username}
            readOnly
          />
        </div>
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
            authorize deposit
          </button>
          <Link to='/admin' className="flex items-center justify-center font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded">
            deny
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ConfirmDeposit;
