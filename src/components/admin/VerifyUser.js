import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyUser } from "../../redux/actions/admin";

const Verify = () => {
  const user = useSelector((state) => state.auth.data);
  const dispatch = useDispatch("");

  const onSubmit = async (values) => {
    console.log(values);
    dispatch(verifyUser(true));
  };

  return (
    <div>
      <form className="grid" onSubmit={onSubmit}>
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
            Social Security Number
          </label>
          <input
            className="form-input border-gray-300 rounded"
            value
            readOnly
          />
        </div>
        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">Document type</label>
          <input
            className="form-input border-gray-300 rounded"
            value
            readOnly
          />
        </div>
        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">Document</label>
          <input
            className="form-input border-gray-300 rounded"
            value
            readOnly
          />
        </div>

        <div className="grid md:grid-cols-2 place-items-center">
          <button className="button font-semibold my-5 w-full md:w-4/5 uppercase">
            verify user
          </button>
          <button className="font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded">
            deny
          </button>
        </div>
      </form>
    </div>
  );
};

export default Verify;
