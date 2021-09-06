import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="grid my-2 text-sm">
      {/* <label className="capitalize text-gray-700 font-medium" htmlFor={name}>
        {label}
      </label> */}
      <Field
        className="form-input rounded border-gray-300 my-1.5 placeholder-gray-400"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage
        component="div"
        className="text-red-500 text-xs"
        name={name}
      />
    </div>
  );
};

export default Input;
