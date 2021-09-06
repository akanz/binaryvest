import React from "react";
import Admin from ".";

const Withdraw = () => {
  return (
    <div>
      <form className="grid">
        <input
          className="form-input my-3 border-gray-300 rounded"
          value
          readOnly
        />
        <input
          className="form-input my-3 border-gray-300 rounded"
          value
          readOnly
        />
        <input
          className="form-input my-3 border-gray-300 rounded"
          value
          readOnly
        />
        <button className="button font-semibold my-5 w-full uppercase">authorize withdrawal</button>
      </form>
    </div>
  );
};

export default Withdraw;
