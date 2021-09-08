import React from "react";

const Errormessage = ({ children }) => {
  return (
    <div
      className={`bg-red-500 message`}
    >
        {children}
    </div>
  );
};

export default Errormessage;
