import React, { useContext, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import cp from "../../img/cp.svg";
import card from "../../img/card.svg";
import { payContext } from ".";


const Paytype = () => {
  const [payMethod, setPayMethod] = useContext(payContext);
  const {path} = useRouteMatch();
  const handleRadOpt = (option) => {
    setPayMethod(option);
    
  };
  console.log(payMethod)
  return (
    <div>
      <div className="my-5">
        <div className="border-b flex justify-between items-center border-gray-300 p-2 py-3">
          <div className="flex items-center">
            <input
              type="radio"
              className="form-radio mr-2"
              name="payment_opt"
              onClick={()=> setPayMethod(1)}
              text=""
            />
            <label htmlFor="crypto">Pay with Cryptocurrency</label>
          </div>

          <div>
            <img src={cp} alt="cryptocurrency" />
          </div>
        </div>
        <div className="border-b flex justify-between items-center border-gray-300 p-2 py-3">
          <div className="flex items-center">
            <input
              type="radio"
              className="form-radio mr-2"
              name="payment_opt"
              onClick={()=> setPayMethod(2)}
            />
            <label htmlFor="card">Pay with Card</label>
          </div>

          <div>
            <img src={card} alt="card" />
          </div>
        </div>
      </div>

      <div className="text-right mt-8">
        <Link to={`${path}/plan`}>
          <button disabled={payMethod === ''} className="button">next</button>
        </Link>
      </div>
    </div>
  );
};

export default Paytype;
