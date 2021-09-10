import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useLocation, Link } from "react-router-dom";
import Formikcontrol from "../../formik/Formikcontrol";
import { Formik, Form } from "formik";
import axios from "axios";

import { login } from "../../redux/actions/auth";
import { initialValues, validationSchema } from "../../helpers/login";
import { clearMessage } from "../../redux/actions/message";
import Errormessage from "../otherComps/Errormessage";
import Successmessage from "../otherComps/Successmessage";
import BtnLoader from "../otherComps/BtnLoader";

axios.defaults.baseURL = "https://binaryvest.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

const date = new Date();

const Login = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.message);
  const user = useSelector((state) => state.auth);
  const [display, setDisplay] = useState(true);
  const { state } = useLocation();

  const onSubmit = async (values) => {
    dispatch(clearMessage());
    dispatch(login(values));

    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };

  if (user.isAuthenticated === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div className="flex min-h-screen h-screen overflow-hidden">
      <div className="hidden md:block w-3/15 lg:w-3/10 bg-signup h-full text-white p-8">
        <div></div>
        <div className="mt-48">
          <h1 className="text-2xl font-semibold my-5">Welcome Back!</h1>
          <div className="text-lg my-8">
            <p> To stay connected please enter your login details. </p>
            <p>Don’t have an account yet?</p>
          </div>
          <Link to="/register">
            <button className="border-white lg:px-16 px-4 text-white text-xl hover:bg-white hover:text-darkblue btnTrans">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-7/10 w-full">
        <div className="w-8/10 md:w-7/10 mx-auto py-12 pt-32">
          <h1 className="text-xl md:text-3xl text-blueish text-center tracking-wider font-semibold">
            Sign In to BinaryVest
          </h1>

          <div className="my-8">
            {msg.status === 400 && <Errormessage>{msg.message}</Errormessage>}

            {msg.status === 200 && (
              <Successmessage>{msg.message}</Successmessage>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <Formikcontrol
                    control="input"
                    type="text"
                    label="Username"
                    name="username"
                    placeholder="Username or E-mail"
                  />
                  <Formikcontrol
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="password"
                  />
                  <button
                    type="submit"
                    disabled={
                      !formik.isValid || formik.isSubmitting || !formik.dirty
                    }
                    className="button w-full flex items-center justify-center my-3"
                  >
                    {user.isLoading && (
                      <BtnLoader />
                    )}

                    <span>login</span>
                  </button>
                </Form>
              )}
            </Formik>
            <div className="my-4 text-right">
              <div>
                <Link
                  to="/forgot"
                  className="font-semibold text-blueish cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="md:hidden text-sm my-2 text-blueish underline">
                <Link to="/register">
                  Don't have an account with us? sign up.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
