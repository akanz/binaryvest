import { Link } from "react-router-dom";
import React from "react";

const Intro = () => {
  return (
    <div className="lg:w-9/15 mt-2 mx-auto bg-intro h-700 flex md:justify-end items-center bg-cover text-white">
      <div className="md:w-5/10 md:float-right p-5">
        <h1 className="text-2xl md:text-4xl">
          Cryptocurrency for Novices The Best Crypto Education Platform
        </h1>

        <h2 className="text-base my-4 md:text-xl">
          Let us guide you on the right path. Invest now, Enjoy later.
        </h2>
        <div className="my-12">
          <Link to='/invest'>
            <button className="button">GET STARTED</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
