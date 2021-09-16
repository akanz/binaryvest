import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Formikcontrol from "../../formik/Formikcontrol";
import { useParams } from "react-router";

const Resetpass = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password is too short - should be 6 chars minimum")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match")
      .required("Confirm password"),
  });
  let { resettoken } = useParams();

  const onSubmit = (values) => {
    const data = {...values,resettoken}
    console.log(data)
  };
  return (
    <div className="flex min-h-screen h-screen overflow-hidden">
      <div className="md:w-6/10 w-9/10 h-4/10 mx-auto mt-24 p-4">
        <h3 className="text-xl text-blueish md:text-4xl my-2 text-center">
          Reset Password
        </h3>
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
                    label="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Formikcontrol
                    control="input"
                    type="password"
                    label="Password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                  />
                  <button
                    type="submit"
                    disabled={
                      !formik.isValid || formik.isSubmitting || !formik.dirty
                    }
                    className="button w-full flex items-center justify-center my-3"
                  >

                    <span>reset password</span>
                  </button>
                </Form>
              )}
            </Formik>
      </div>
    </div>
  );
};

export default Resetpass;
