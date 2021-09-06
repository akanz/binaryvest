import React from "react";
import { Link } from "react-router-dom";
import arrIcon from "../../img/arrUp.svg";
import arrWhite from "../../img/arrW.svg";
import userIcon from "../../img/team1.svg";

const userType = [{}];

const Main = ({ user }) => {
  return (
    <div className=" mx-auto md:w-7/15 md:w-8/10 py-6 md:pt-10 md:pl-6 md:pr-14">
      <div className="my-6 lg:flex">
        <div className="md:mr-4 lg:mr-8">
          <div className="rounded border border-gray-100 shadow-md mb-5 p-4">
            <div className="flex justify-between items-center my-2 mb-5">
              <h2>Website Performance</h2>
              <div className='text-xs text-blue-800'>Show: Daily</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="px-3 py-2 grid h-20 bg-yellow-400 text-gray-700 text-xs rounded-xl">
                <h3>Guest Users</h3>
                <div className="flex items-center my-2">
                  <span className="mr-2">18</span>
                  <img src={arrIcon} alt="" />
                </div>
              </div>
              <div className="px-3 py-2 grid h-20 bg-lightteal text-white text-xs rounded-xl">
                <h3>Registered Users</h3>
                <div className="flex items-center my-2">
                  <span className="mr-2">28</span>
                  <img src={arrWhite} alt="" />
                </div>
              </div>
              <div className="px-3 py-2 grid h-20 bg-blue-800 text-white text-xs rounded-xl">
                <h3>Users who only invested</h3>
                <div className="flex items-center my-2">
                  <span className="mr-2">16</span>
                  <img src={arrWhite} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 shadow-md">
            <div className="flex items-center p-4 justify-between">
              <div>User activities</div>
              <div>View all</div>
            </div>
            <div className="px-4">Today</div>
            <div className="my-3">
              <div className="flex items-center border-b px-4 py-2 border-gray-200">
                <div className="mr-2">
                  <img
                    className="rounded-full w-10 h-10"
                    src={userIcon}
                    alt=""
                  />
                </div>
                <div>
                  Jessica Konye invested with Standard Package
                  <Link className="ml-2 text-sm text-blueish" to="/admin/verify">
                    STD - 2394
                  </Link>
                </div>
              </div>
              <div className="flex items-center border-b px-4 py-2 border-gray-200">
                <div className="mr-2">
                  <img
                    className="rounded-full w-10 h-10"
                    src={userIcon}
                    alt=""
                  />
                </div>
                <div>
                  Jessica Konye invested with Standard Package
                  <Link className="ml-2 text-sm text-blueish" to="/admin/deposit">
                    STD - 2394
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-5 md:mr-4 lg:w-3/10 lg:m-0'>
          <div className="rounded border border-gray-100 shadow-md">
            <div className="flex justify-between items-center py-4 px-3">
              <h2 className="font-semibold text-xs mr-4">Pending Confirmations</h2>
              <h4 className="text-blue-800 text-xs">View all</h4>
            </div>
            <div className="flex items-center justify-between border-b p-3 border-gray-200">
              <div>Withdrawal requests</div>
              <div className="text-gray-500 text-xs">15</div>
            </div>
            <div className="flex items-center justify-between border-b p-3 border-gray-200">
              <div>Account Verification</div>
              <div className="text-gray-500 text-xs">105</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
