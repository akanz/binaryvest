import React from "react";
import Input from "./Input";
import RadioBtn from "./Radio";

const Formikcontrol = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "radio":
      return <RadioBtn {...rest} />;
    default:
      return null;
  }
};

export default Formikcontrol;
