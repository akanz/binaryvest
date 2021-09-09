import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Formikcontrol from "../../formik/Formikcontrol";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../redux/actions/auth";
import { initialValues, validationSchema } from "../../helpers/register";
import { clearMessage } from "../../redux/actions/message";
import signupImg from "../../img/signup.svg";
import Errormessage from "../otherComps/Errormessage";
import Successmessage from "../otherComps/Successmessage";

axios.defaults.baseURL = "https://binaryvest.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const msg = useSelector((state) => state.message);
  const history = useHistory();

  // Onsubmit of form, dispatch register action with the form values
  const onSubmit = async (values) => {
    dispatch(clearMessage());
    dispatch(register(values));
    setTimeout(() => {
      dispatch(clearMessage());
      history.push('/login');
    }, 3000);

  };

  return (
    <div className="flex min-h-screen h-screen overflow-hidden">
      <div className="w-3/15 lg:w-3/10 hidden md:block bg-signup h-full text-white p-8">
        <div></div>
        <div className="mt-48">
          <h1 className="text-2xl font-semibold my-5">Hello,</h1>
          <div className="text-lg my-8">
            <p> Enter your personal details and start your journey with us. </p>
            <p>Already have an account?</p>
          </div>
          <Link to="/login">
            <button className="border-white px-4 lg:px-16 text-white text-xl hover:bg-white hover:text-darkblue btnTrans">
              SIGN IN
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-7/10">
        <div className="w-8/10 md:w-7/10 mx-auto py-12">
          <h1 className="text-3xl text-blueish text-center tracking-wider font-semibold">
            Create Account
          </h1>

          <div className="my-8">
            {msg.status === 400 && (
              <Errormessage>
                {msg.message}
              </Errormessage>
            )}
            {msg.status === 200 && (
              <Successmessage>
                {msg.message}
              </Successmessage>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    {console.log(formik)}
                    <Formikcontrol
                      control="input"
                      type="text"
                      label="first name"
                      name="firstname"
                      placeholder="First name"
                    />
                    <Formikcontrol
                      control="input"
                      type="text"
                      label="last name"
                      name="lastname"
                      placeholder="Last name"
                    />
                    <Formikcontrol
                      control="input"
                      type="email"
                      label="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <Formikcontrol
                      control="input"
                      type="text"
                      label="username"
                      name="username"
                      placeholder="Username"
                    />
                    <Formikcontrol
                      control="input"
                      type="password"
                      label="password"
                      name="password"
                      placeholder="Password"
                    />
                    <Formikcontrol
                      control="input"
                      type="password"
                      label="confirm password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <button
                      className="button w-full my-5"
                      type="submit"
                      disabled={
                        !formik.isValid || formik.isSubmitting || !formik.dirty
                      }
                    >
                      sign up
                    </button>
                    <ToastContainer />
                  </Form>
                );
              }}
            </Formik>
            <div className='text-blueish underline text-right text-sm md:hidden'>
              <Link to='/login'>
              Already registered? sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
