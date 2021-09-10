import React from "react";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

const BtnLoader = () => {
  return (
    <span className="mr-2">
      <AiOutlineLoading className="text-white w-6 h-5 animate-spin" />
    </span>
  );
};

export default BtnLoader;
