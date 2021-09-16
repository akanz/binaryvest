import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPass } from "../../redux/actions/auth";
import { clearMessage } from "../../redux/actions/message";
import BtnLoader from "../otherComps/BtnLoader";
import Errormessage from "../otherComps/Errormessage";
import Successmessage from "../otherComps/Successmessage";

const Forgotpass = () => {
  const [email, setEmail] = useState(null);
  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch("");

  const onSubmit = (e) => {
    dispatch(clearMessage());
    e.preventDefault();
    dispatch(forgotPass({ email: email }));

    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };
  return (
    <div className="flex min-h-screen h-screen overflow-hidden">
      <div className="md:w-6/10 w-9/10 h-4/10 mx-auto mt-24 p-4">
        {message.status === 200 && (
          <Successmessage>{message.message}</Successmessage>
        )}
        {message.status === 403 && !message.message.includes('Invalid') && (
          <Errormessage>{message.message}</Errormessage>
        )}
        <h3 className="text-xl text-blueish md:text-4xl my-2 text-center">
          Forgot Password
        </h3>
        <form className="my-8" onSubmit={onSubmit}>
          <label className="text-gray-500 px-3">E-mail</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-input w-full"
            placeholder="johndoe@gmail.com"
          />

          <div className="text-right">
            <button disabled={!email} className="button my-4 flex items-center">
              {auth.isLoading && <BtnLoader />}
              <span className="ml-1">Reset</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpass;
