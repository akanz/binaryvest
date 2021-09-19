import React, { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import cp from "../../../img/cp.svg";
import card from "../../../img/card.svg";
import Crypto from "./Crypto";
import Card from "./Card";
import { eduPayment, getCardDets } from "../../../redux/actions/deposit";
import { clearMessage } from "../../../redux/actions/message";

export const payContext = createContext();

const EduPayment = () => {
  const admin = useSelector((state) => state.admin);
  const user = useSelector((state) => state.auth.data);
  const [payMethod, setPayMethod] = useState("");
  const [step, setsStep] = useState(1);
  const [proofOfPay, setProofOfPay] = useState(null);
  const [amount, setamount] = useState(250);
  let { course } = useParams();
  const [cardDets, setCardDets] = useState({
    cardName: "",
    cardNo: "",
    cardType: "",
    expDate: "",
    cvv: "",
  });
  const [cardMsg, setcardMsg] = useState(null);
  const dispatch = useDispatch("");

  useEffect(() => {
    dispatch(clearMessage());
    course === "monthly" ? setamount(250) : setamount(1500);
  }, []);

  const onSubmit = (e) => {
      e.preventDefault()
    console.log(payMethod);
    if (payMethod === 1) {
      const formData = new FormData();
      formData.append("amount", amount);
      formData.append("email", user.email);
      formData.append("avatar", proofOfPay);
      // const data = { ...values, packageOption, proofOfPay };
      console.table([...formData]);
      dispatch(eduPayment(formData));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);
    } else {
      console.log(cardDets);
      dispatch(getCardDets(cardDets));
      setTimeout(() => {
        setcardMsg(null);
      }, 4000);
    }
  };

  return (
    <div className="pt-24">
      {cardMsg && (
        <div className="p-3 bg-red-500 w-9/15 md:w-6/10 rounded mx-auto text-sm text-white text-center">
          {cardMsg}
        </div>
      )}
      <div className="w-9/15 md:w-7/10 m-auto mt-6 shadow-lg rounded-lg border border-gray-100 py-8 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl text-center text-gray-600 tracking-wider">
          Get Course
        </h2>
        <form onSubmit={onSubmit}>
          {step === 1 && (
            <div className="my-5">
              <div className="border-b flex justify-between items-center border-gray-300 p-2 py-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio mr-2"
                    name="payment_opt"
                    onClick={() => setPayMethod(1)}
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
                    onClick={() => setPayMethod(2)}
                  />
                  <label htmlFor="card">Pay with Card</label>
                </div>

                <div>
                  <img src={card} alt="card" />
                </div>
              </div>
              <div className="text-right mt-8">
                <button
                  disabled={payMethod === ""}
                  className="button"
                  onClick={() => setsStep(2)}
                >
                  next
                </button>
              </div>
            </div>
          )}
          {/* {console.log(formik)} */}
          <div>
            {step === 2 && payMethod === 1 && (
              <Crypto
                handleProofOfPay={setProofOfPay}
                amount={amount}
                proofOfPay={proofOfPay}
                handleStep={setsStep}
              />
            )}
            {step === 2 && payMethod === 2 && (
              <Card
                handleStep={setsStep}
                handleCardDets={setCardDets}
                amount={amount}
                email={user.email}
                cardDets={cardDets}
                cardMsg={cardMsg}
                setcardMsg={setcardMsg}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EduPayment;
