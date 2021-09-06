import React, { useState } from "react";
import Cleave from "cleave.js/react";
import paystack from "../../img/paystack.svg";
import paybg from "../../img/paybg.svg";

const Card = () => {
  const [creditNo, setCreditNo] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleChange = (e) => {
    setCreditNo(e.target.value);
  };
  const handleCardType = (type) => {
    setCardType(type);
  };
  const handleCardDate = (e) => {
    setCardDate(e.target.value);
  };
  const handleCvv = (e) => {
    setCvv(e.target.value);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img src={paystack} alt="paystack" />
        </div>
        <div className="grid text-xs">
          <span>johndoe@gmail.com</span>
          <span>
            pay <span className="text-blue-500 font-medium">$100</span>
          </span>
        </div>
      </div>
      <div>
        <div className="w-full my-5 relative border-gray-300 border rounded p-2 hover:border-blue-700">
          <h4 className="absolute text-xs font-extralight text-gray-500 -top-2 px-1 bg-white">
            Card number
          </h4>
          <Cleave
            className="text-sm text-gray-600 font-light w-full focus:outline-none"
            onChange={handleChange}
            placeholder="5473 6543 7865 4353"
            options={{
              creditCard: true,
              handleCardType,
            }}
          />
        </div>
        <div className="my-5 flex justify-between">
          <div className="w-3/15 relative border-gray-300 border rounded p-2 focus:ring-2 hover:border-blue-700">
            <h4 className="absolute -top-2 text-xs font-extralight text-gray-500 bg-white px-1">
              Exp date
            </h4>
            <Cleave
              className="text-sm text-gray-600 font-light focus:outline-none"
              onChange={handleCardDate}
              placeholder="07/21"
              options={{
                date: true,
                datePattern: ["m", "y"],
              }}
            />
          </div>
          <div className="w-3/15 relative border-gray-300 border rounded p-2 focus:ring-2 hover:border-blue-700">
            <h4 className="absolute -top-2 text-xs font-extralight text-gray-500 bg-white px-1">
              Cvv
            </h4>
            <Cleave
              className="text-sm text-gray-600 font-light focus:outline-none"
              placeholder="cvv"
              onChange={handleCvv}
              options={{
                blocks: [3],
                numericOnly: true,
              }}
            />
          </div>
        </div>

        <div className="text-right mt-12">
          <button className="button">pay</button>
        </div>
      </div>
      <div className="text-center flex justify-center mt-12 mb-8">
        <img src={paybg} alt="payment background" />
      </div>
    </>
  );
};

export default Card;
