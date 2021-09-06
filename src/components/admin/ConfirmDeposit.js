import React from "react";
import { useSelector } from "react-redux";

const ConfirmDeposit = () => {
  const user = useSelector((state) => state.auth.data);
  return (
    <div>
      <form className="grid">
        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">User E-mail</label>
          <input
            className="form-input border-gray-300 rounded"
            value={user.email}
            readOnly
          />
        </div>

        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">
            Package
          </label>
          <input
            className="form-input border-gray-300 rounded"
            value
            readOnly
          />
        </div>
        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">Amount</label>
          <input
            className="form-input border-gray-300 rounded"
            value
            readOnly
          />
        </div>

        <div className="grid md:grid-cols-2 place-items-center">
          <button className="button font-semibold my-5 w-full md:w-4/5 uppercase">
            authorize deposit
          </button>
          <button className="font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded">
            deny
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmDeposit;
