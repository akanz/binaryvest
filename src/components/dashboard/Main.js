import React from "react";
import { Link } from "react-router-dom";

const Main = ({ user }) => {
  return (
    <div className="w-9/10 mx-auto md:w-7/15 lg:w-8/10 py-6 md:pt-10 md:pl-6 md:pr-14 ">
      <div className="md:flex p-4 justify-between border-gray-100 rounded-sm border shadow-md">
        <div>
          <h3 className="capitalize text-2xl">Hello {user.username}, </h3>
          <p className="my-4 text-gray-700">
            We’re glad to have you back. See how much you’ve made so far and
            remember to verify your account for easy withdrawal
          </p>
        </div>
        <div className="p-2">
          <Link to="/verification">
            <button className="button w-full  rounded-md">VERIFY</button>
          </Link>
        </div>
      </div>

      <div className="my-6 lg:flex">
        <div className="border-gray-100 rounded-sm border shadow-md lg:w-7/10 lg:mr-6 px-3 md:px-6 py-2 pb-6">
          <div className="flex justify-between my-1.5 mb-5">
            <div className="text-gray-600 text-xl font-semibold">
              Wallet Information
            </div>
            <div>
              <span>Show:</span>
            </div>
          </div>

          <div className="flex overflow-scroll md:grid md:grid-cols-2 gap-5 text-white">
            {/* capital */}
            <div className="bg-lightteal min-w-full rounded-md">
              <div className="border-b text-xs flex border-white font-light">
                <div className="border-r border-white p-1 px-3">
                  Investment Date
                </div>
                <div className="p-1 px-3">17th Feb, 2020</div>
              </div>
              <div className="p-3">
                <h6 className="text-sm font-extralight">STANDARD 35%ROI</h6>
                <h5 className="text-sm">Amount Invested</h5>
                <h2 className="font-bold text-xl">$350.00</h2>
              </div>
            </div>

            {/* total income */}
            <div className="bg-lightteal min-w-full rounded-md">
              <div className="border-b text-xs flex border-white font-light">
                <div className="border-r border-white p-1 px-3">
                  Withdrawal Date
                </div>
                <div className="p-1 px-3">17th March, 2020</div>
              </div>
              <div className="p-3">
                <h6 className="text-sm font-extralight">STANDARD 35%ROI</h6>
                <h5 className="text-sm">Amount Invested</h5>
                <h2 className="font-bold text-xl">$472.50</h2>
              </div>
            </div>

            {/* capital */}
            <div className="bg-lightteal min-w-full rounded-md">
              <div className="border-b text-xs flex border-white font-light">
                <div className="border-r border-white p-1 px-3">
                  Investment Date
                </div>
                <div className="p-1 px-3">17th Feb, 2020</div>
              </div>
              <div className="p-3">
                <h6 className="text-sm font-extralight">GOLD 60%ROI</h6>
                <h5 className="text-sm">Amount Invested</h5>
                <h2 className="font-bold text-xl">$5,500.00</h2>
              </div>
            </div>

            {/* total income */}
            <div className="bg-lightteal min-w-full rounded-md">
              <div className="border-b text-xs flex border-white font-light">
                <div className="border-r border-white p-1 px-3">
                  Withdrawal Date
                </div>
                <div className="p-1 px-3">17th March, 2020</div>
              </div>
              <div className="p-3">
                <h6 className="text-sm font-extralight">GOLD 60%ROI</h6>
                <h5 className="text-sm">Amount Invested</h5>
                <h2 className="font-bold text-xl">$8,800.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/10 md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-1">
          <div className="border-gray-100 my-5 rounded-sm border shadow-md">
            <div className="flex justify-between p-2 px-4 mb-4 text-sm">
              <div className="font-semibold text-gray-600">Wallet Analysis</div>
              <div>
                <span>Show:</span>
              </div>
            </div>
            <div className="flex text-xs justify-between border-b border-gray-200 p-2 px-4">
              <div className="font-semibold">Capital</div>
              <div className="text-gray-500">$5,850.00</div>
            </div>
            <div className="flex text-xs justify-between border-b border-gray-200 p-2 px-4">
              <div className="font-semibold">Interest</div>
              <div className="text-gray-500">$2,850.00</div>
            </div>
            <div className="my-2 mt-10 p-2 py-4 text-center">
              <Link to="/invest">
                <button className="btnTrans border-pink-700 p-1.5 w-8/10 mx-auto text-pink-600 text-sm hover:bg-pink-600 hover:text-white">
                  INVEST
                </button>
              </Link>
            </div>
          </div>
          <div className="py-8 px-4 border border-gray-100 shadow-lg my-5">
            <p>Safely withdraw your money here on the due date</p>
            <div className="my-2 mt-10 p-2 py-4 text-center">
              <button className="btnTrans border-pink-700 p-1.5 w-8/10 mx-auto text-pink-600 text-sm hover:bg-pink-600 hover:text-white">
                WITHDRAW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
