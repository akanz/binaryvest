import { Form, Formik } from "formik";
import React, { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Formikcontrol from "../../formik/Formikcontrol";
import cp from "../../img/cp.svg";
import card from "../../img/card.svg";
import { BiArrowBack } from "react-icons/bi";
import { initialValues, validationSchema } from "../../helpers/invest";
import Crypto from "./Crypto";
import Card from "./Card";
import { deposit, getCardDets } from "../../redux/actions/deposit";
import { clearMessage } from "../../redux/actions/message";
import { getPlans } from "../../redux/actions/admin";

export const payContext = createContext();

const Payment = () => {
  const admin = useSelector((state) => state.admin);
  const user = useSelector((state) => state.auth.data);
  const [payMethod, setPayMethod] = useState("");
  const [step, setsStep] = useState(1);
  const [proofOfPay, setProofOfPay] = useState(null);
  const [packageOptions, setPackageOptions] = useState("");
  const [packageOption, setPackageOption] = useState({
    name: "",
    id: null,
    roi: null,
    minAmount: null,
    maxAmount: null,
  });
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
    dispatch(getPlans());
    dispatch(clearMessage());
  }, []);

  useEffect(() => {
    setPackageOptions(admin.allPackages);
  }, [admin]);

  const onSubmit = async (values) => {
    console.log(payMethod);
    if (payMethod === 1) {
      const formData = new FormData();
      formData.append("planId", packageOption.id);
      formData.append("amount", values.amount);
      formData.append("email", user.email);
      formData.append("avatar", proofOfPay);
      // const data = { ...values, packageOption, proofOfPay };
      console.table([...formData]);
      dispatch(deposit(formData));

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
          Invest
        </h2>

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              {/* {console.log(formik)} */}
              <div>
                {step === 2 && (
                  <div>
                    <div className="my-4">
                      <input
                        type="email"
                        style={{ border: "0" }}
                        className="w-full text-2xl"
                        value={user.email}
                        readOnly
                      />
                    </div>
                    <div>
                      <h3>Please select your preferred investment plan</h3>
                      <div className="grid">
                        {/* <Formikcontrol
                          control="radio"
                          name="packageOption"
                          options={packageOptions}
                        /> */}
                        {[...packageOptions]
                          .sort((a, b) => a.roi - b.roi)
                          .map((option) => (
                            <div
                              className="flex items-center my-1.5 text-gray-700"
                              key={option._id}
                            >
                              <input
                                color="teal"
                                className="form-radio mr-2.5"
                                type="radio"
                                id={option._id}
                                name={option.name}
                                value={option._id}
                                checked={packageOption.id === option._id}
                                onChange={() =>
                                  setPackageOption({
                                    ...packageOption,
                                    id: option._id,
                                    name: option.name,
                                    roi: option.roi,
                                    minAmount: option.minAmount,
                                    maxAmount: option.maxAmount,
                                  })
                                }
                              />
                              <label htmlFor={option.name}>{option.name}</label>
                            </div>
                          ))}
                      </div>

                      <div className="my-4">
                        {packageOptions
                          .filter((option) => option._id === packageOption.id)
                          .map((opt) => (
                            <div key={opt._id}>
                              <Formikcontrol
                                control="input"
                                name="amount"
                                placeholder={
                                  packageOption.minAmount < 500000
                                    ? `$${packageOption.minAmount} - $${packageOption.maxAmount}`
                                    : `$${packageOption.minAmount} and above`
                                }
                              />
                              <div className="text-right mt-8">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <Link to="#" onClick={() => setsStep(1)}>
                                      <BiArrowBack className="w-10 h-8 text-gray-500" />
                                    </Link>
                                  </div>
                                  {formik.values.amount !== "" &&
                                    isNaN(formik.values.amount) === false &&
                                    parseFloat(formik.values.amount) >=
                                      opt.minAmount &&
                                    parseFloat(formik.values.amount) <=
                                      opt.maxAmount && (
                                      <div>
                                        <Link
                                          to="#"
                                          onClick={() => setsStep(3)}
                                          className="button"
                                        >
                                          next
                                        </Link>
                                      </div>
                                    )}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && payMethod === 1 && (
                  <Crypto
                    handleProofOfPay={setProofOfPay}
                    proofOfPay={proofOfPay}
                    amount={formik.values.amount}
                    email={formik.values.email}
                    handleStep={setsStep}
                  />
                )}
                {step === 3 && payMethod === 2 && (
                  <Card
                    amount={formik.values.amount}
                    email={formik.values.email}
                    handleStep={setsStep}
                    handleCardDets={setCardDets}
                    cardDets={cardDets}
                    cardMsg={cardMsg}
                    setcardMsg={setcardMsg}
                  />
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Payment;
