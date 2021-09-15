import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cleave from "cleave.js/react";
import paystack from "../../img/paystack.svg";
import paybg from "../../img/paybg.svg";
import { BiArrowBack } from "react-icons/bi";
import { SpaceBarOutlined } from "@material-ui/icons";

const Card = ({
  cardDets,
  handleCardDets,
  cardMsg,
  setcardMsg,
  handleStep,
  ...props
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleCardDets({ ...cardDets, [name]: value });
  };
  const handleCardType = (type) => {
    handleCardDets({ ...cardDets, cardType: type });
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img src={paystack} alt="paystack" />
        </div>
        <div className="grid text-xs text-blueish font-semibold">
          <span>{props.email}</span>
          <span className="font-medium">
            <span className="text-gray-700">Pay</span>
            <span className="text-red-700">${props.amount}</span>
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
            onChange={(e) => handleChange(e)}
            placeholder="5473 6543 7865 4353"
            name="cardNo"
            value={cardDets.cardNo}
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
              onChange={(e) => handleChange(e)}
              name="expDate"
              value={cardDets.expDate}
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
              onChange={(e) => handleChange(e)}
              name="cvv"
              value={cardDets.cvv}
              options={{
                blocks: [3],
                numericOnly: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center mt-12 mb-8">
        <img src={paybg} alt="payment background" />
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link to="#" onClick={() => handleStep(2)}>
          <BiArrowBack className="w-10 h-8 text-gray-500" />
        </Link>
        <button
          disabled={
            cardDets.cardNo === "" ||
            cardDets.cvv === "" ||
            cardDets.date === ""
          }
          onClick={() =>
            setcardMsg(
              "Error occurred while paying with card. Try another payment method"
            )
          }
          type="submit"
          className="button cursor-pointer"
        >
          pay
        </button>
      </div>
    </>
  );
};

export default Card;
