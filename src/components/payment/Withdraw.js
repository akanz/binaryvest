import { Form, Formik } from "formik";
import React, { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";

export const payContext = createContext();

const Withdraw = () => {
  const user = useSelector((state) => state.auth);
  const [amount, setAmount] = useState(null);
  const onSubmit = async (values) => {};

  return (
    <div>
      <div className="w-9/15 md:w-7/10 m-auto mt-24 shadow-lg rounded-lg border border-gray-100 py-8 px-8 md:px-16">
        <h2 className="text-3xl text-center text-gray-600 tracking-wider">
          Withdraw
        </h2>
        <form>
          <div>
            <h3 className="text-2xl text-gray-600 my-2">
              @{user.data.username}
            </h3>
            <div className="flex items-center">
              <span className="mr-1.5">
                <IoWalletOutline className="w-8 h-8" />
              </span>
              : ${user.data.wallet}
            </div>

            <div className="grid my-3">
              <label>Amount you want to withdraw:</label>
              <input
                type="text"
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  border: "0",
                  borderBottom: "1px solid lightgray",
                }}
                className="form-input my-2 w-full border-b border-gray-300 focus:border-pink-700"
              />
            </div>
            <div>
              <button
                disabled={
                  !amount ||
                  isNaN(amount) ||
                  amount > parseFloat(user.data.wallet)
                }
                className="button"
              >
                Withdraw
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
