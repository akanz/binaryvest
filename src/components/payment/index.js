import { Form, Formik } from "formik";
import React, { useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Formikcontrol from "../../formik/Formikcontrol";
import cp from "../../img/cp.svg";
import card from "../../img/card.svg";
import {
  initialValues,
  packageOptions,
  payOptions,
  validationSchema,
} from "../../helpers/invest";
import Crypto from "./Crypto";
import Card from "./Card";
import { deposit, proofOfPayment } from "../../redux/actions/deposit";

export const payContext = createContext();

const Payment = () => {
  const [payMethod, setPayMethod] = useState("");
  const [step, setsStep] = useState(1);
  const [proofOfPay, setProofOfPay] = useState("");
  const dispatch = useDispatch("");
  console.log(step);

  const onSubmit = async (values) => {
    dispatch(deposit(values));
    dispatch(proofOfPayment(proofOfPay));
  };

  return (
    <div>
      <div className="w-9/15 md:w-7/10 m-auto mt-24 shadow-lg rounded-lg border border-gray-100 py-8 px-8 md:px-16">
        <h2 className="text-3xl text-center text-gray-600 tracking-wider">
          Invest
        </h2>
        {/* <payContext.Provider value={[payMethod, setPayMethod]}>
          <Switch>
            <Route exact path={path} component={Paytype} />
            <Route exact path={`${path}/plan`} component={Plan} />
            <Route exact path={`${path}/confirm`} component={Confirm} />
          </Switch>
        </payContext.Provider> */}
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
                      <Formikcontrol
                        control="input"
                        type="email"
                        name="email"
                        className="form-input border-gray-300 rounded w-full"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <h3>Please select your preferred investment plan</h3>
                      <div className="grid">
                        <Formikcontrol
                          control="radio"
                          name="packageOption"
                          options={packageOptions}
                        />
                      </div>

                      <div className="my-4">
                        <Formikcontrol
                          control="input"
                          name="amount"
                          placeholder={formik.values.packageOption}
                        />
                      </div>

                      <div className="text-right mt-8">
                        {formik.values.amount !== "" &&
                          formik.values.amount !== "" && isNaN(formik.values.amount) === false &&
                          formik.values.packageOption !== "" && (
                            <Link
                              to="#"
                              onClick={() => setsStep(3)}
                              className="button"
                            >
                              next
                            </Link>
                          )}
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && payMethod === 1 && (
                  <Crypto
                    handleProofOfPay={setProofOfPay}
                    amount={formik.values.amount}
                  />
                )}
                {step === 3 && payMethod === 2 && <Card />}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Payment;
