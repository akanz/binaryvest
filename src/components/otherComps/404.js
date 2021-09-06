import React from "react";
import sadFace from "../../img/sad.png";
const Error = () => {
  return (
    <div>
      <div className="w-9/10 md:w-7/10 mx-auto my-20 text-3xl md:flex items-center justify-center text-gray-700 font-semibold tracking-wide capitalize">
        <div className='flex justify-center'><img className="h-32" src={sadFace} alt="" /></div>
        <div className="md:mx-8 flex justify-center">Page Not found</div>
      </div>
    </div>
  );
};

export default Error;
