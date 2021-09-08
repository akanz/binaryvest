import { Field, ErrorMessage } from "formik";
import React from "react";

const RadioBtn = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="radio">
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className='flex items-center my-1.5 text-gray-700' key={option.name}>
                <input
                  color="teal"
                  className="form-radio mr-2.5"
                  type="radio"
                  id={option.id}
                  {...field}
                  value={option.name}
                  checked={field.value === option.name}
                />
                <label htmlFor={option.name}>{option.name}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default RadioBtn;
