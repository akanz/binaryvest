import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profIcon from "../../img/prof.svg";
import passwordIcon from "../../img/password.svg";
import logoutIcon from "../../img/logout.svg";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { VscVerified } from "react-icons/vsc";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiChatSmile3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deposit, getDeposit } from "../../redux/actions/deposit";
import { getPlans } from "../../redux/actions/admin";
import moment from "moment";
let date,
  futureDate = moment(date).add(1, "months").format("LL"),
  interest = 0;
const Main = ({ user }) => {
  const dispatch = useDispatch("");
  const profile = useSelector((state) => state.profile);
  const plans = useSelector((state) => state.admin.allPackages);
  const navMenu = [
    // { img: profIcon, icon: "", alt: "", name: "Edit Profile", url: "H" },
    { img: "", icon: <GiPayMoney />, alt: "", name: "Deposit", url: "/invest" },
    {
      img: "",
      icon: <VscVerified />,
      alt: "",
      name: "Verify account",
      url: "/verification",
    },
    {
      img: "",
      icon: <GiReceiveMoney />,
      alt: "",
      name: "Withdraw",
      url: "/withdraw",
    },
    // { img: passwordIcon, icon: "", alt: "", name: "Change Password", url: "" },
    { img: logoutIcon, icon: "", alt: "", name: "Logout", url: "#" },
  ];

  useEffect(() => {
    dispatch(getDeposit());
    dispatch(getPlans());
  }, []);
  return (
    <div className="w-9/10 mx-auto md:w-7/15 lg:w-8/10 py-6 md:pt-10 md:pl-6 md:pr-14 ">
      <div>
        <div className="flex w-full md:hidden my-3 py-3 shadow border-b border-t border-gray-200 p-2 items-center overflow-x-scroll">
          {navMenu.map((menu, i) => (
            <div key={i} className="h-full min-w-4/15">
              <Link className="flex" to={`${menu.url}`}>
                <div className="mr-1 flex items-center">
                  <img src={menu.img} alt="" />
                  <div>{menu.icon}</div>
                </div>
                <div className="text-sm">
                  <div>{menu.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {user.isVerified && (
          <div className="md:flex p-4 justify-between border-gray-100 rounded-sm border shadow-md">
            <div>
              <div className="flex text-green-700 items-center py-2 text-xl">
                Status: <VscVerified />
                <span className="ml-2">Verified</span>
              </div>
              <h3 className="capitalize text-2xl">Hello {user.username}, </h3>
              <p className="my-4 text-gray-700">
                We’re glad to have you back. See how much you’ve made so far
              </p>
            </div>
          </div>
        )}
        {!user.isVerified && (
          <div className="md:flex p-4 justify-between border-gray-100 rounded-sm border shadow-md">
            <div>
              <div className="flex text-gray-600 items-center py-2 text-xl">
                Status: <VscVerified />
                <span className="ml-2">Not Verified</span>
              </div>
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
        )}
        <div className="my-4 p-4 shadow rounded text-xl text-gray-500">
          <div className="capitalize">
            <span className="">Name: </span>
            <span className="text-pink-600">{user.name.firstname}</span>{" "}
            <span className="text-pink-600">{user.name.lastname}</span>
          </div>
          <div>
            Username: <span className="text-pink-600">@{user.username}</span>{" "}
          </div>
          <div>
            Email: <span className="text-pink-600">{user.email}</span>
          </div>
        </div>
        <div className="my-6 lg:flex">
          <div className="border-gray-100 rounded-sm border shadow-md lg:w-7/10 lg:mr-6 px-3 lg:px-6 py-2 pb-6">
            <div className="flex justify-between my-1.5 mb-5">
              <div className="text-gray-600 text-xl font-semibold">
                Wallet Information
              </div>
              <div>
                <span>Show:</span>
              </div>
            </div>

            <div className="flex overflow-scroll justify-between text-white">
              {profile.allDeposits.length <= 0 && (
                <div className="bg-white border border-gray-100 shadow-md w-9/10 md:w-7/10 mx-auto rounded-md">
                  <div className="text-lg capitalize flex">
                    <div className="text-gray-700 p-1 px-3">
                      No investments yet
                    </div>
                    <div className="p-1 px-3">{date}</div>
                  </div>
                  <div className="p-3">
                    <h6 className="bg-pink-600 shadow rounded-full w-6/10 mx-auto md:w-3/10 text-center my-3  px-4 py-1">
                      <Link to="/invest" className="hover:font-semibold">
                        Make Deposit
                      </Link>
                    </h6>
                    <h5 className="text-sm">Amount Invested</h5>
                    <div className="font-bold text-sm w-6/10 mx-auto text-center shadow-lg bg-darkblue rounded-full my-2 p-2">
                      $0.00
                    </div>
                  </div>
                </div>
              )}

              {/* capital */}
              {profile.allDeposits.map((dep) => (
                <div
                  key={dep._id}
                  className="min-w-full md:min-w-1/2 lg:min-w-3/10"
                >
                  <>
                    {plans
                      .filter((plan) => plan._id === dep.planId)
                      .map((plan) => (
                        <div key={plan._id}>
                          {(date = moment(dep.date).format("LL"))}
                          {/* {futureDate = moment(date).add(1, "months")} */}
                          <div className="bg-lightteal shadow-md min-w-9/10 mx-2 rounded-md">
                            <div className="border-b text-xs flex border-white font-light">
                              <div className="border-r border-white p-1 px-3">
                                Investment Date
                              </div>
                              <div className="p-1 px-3">{date}</div>
                            </div>
                            <div className="p-3">
                              <h6 className="text-sm font-light">
                                <span className="uppercase mr-2">
                                  {plan.name}
                                </span>
                                <span>{plan.roi}%</span>ROI
                              </h6>
                              <h5 className="text-sm">Amount Invested</h5>

                              <div className="flex justify-between">
                                <div className="font-bold text-sm w-6/10 mx-auto text-center bg-darkblue rounded-full my-2 p-2">
                                  ${parseFloat(dep.amount)}
                                </div>
                                {dep.status.includes("pending") && (
                                  <div className="flex rounded-2xl py-0.5 px-3 ml-2 shadow-md text-xs items-center">
                                    <span className="mr-1">pending </span>
                                    <RiChatSmile3Line className="w-4 h-4" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* total income */}
                          {dep.status.includes("accepted") && (
                            <div className="bg-lightteal shadow-md min-w-9/10 mx-2 my-2 rounded-md">
                              <div className="border-b text-xs flex border-white font-light">
                                <div className="border-r border-white p-1 px-3">
                                  Withdrawal Date
                                </div>
                                <div className="p-1 px-3">{futureDate}</div>
                              </div>

                              <div className="p-3">
                                <h6 className="text-sm font-light">
                                  <span className="uppercase mr-2">
                                    {plan.name}
                                  </span>
                                  <span>{plan.roi}%</span>ROI
                                </h6>
                                <h5 className="text-sm">Amount Expected</h5>
                                <div className="flex justify-between">
                                  <div className="font-bold text-sm w-6/10 mx-auto text-center bg-darkblue rounded-full my-2 p-2">
                                    $
                                    {parseFloat(dep.amount) +
                                      (parseFloat(dep.amount) *
                                        parseFloat(plan.roi)) /
                                        100}
                                  </div>
                                  <div className="hidden">
                                    {
                                      (interest +=
                                        parseFloat(dep.amount) +
                                        (parseFloat(dep.amount) *
                                          parseFloat(plan.roi)) /
                                          100)
                                    }
                                  </div>
                                  {dep.status.includes("pending") && (
                                    <div className="flex rounded-2xl py-0.5 px-3 ml-2 shadow-md text-xs items-center">
                                      <span className="mr-1">pending </span>
                                      <RiChatSmile3Line className="w-4 h-4" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </>

                  {/* {dep.status.includes("pending") && (
                    <div className="bg-lightteal flex items-center text-2xl font-semibold p-4 justify-center shadow-md w-9/10 mx-auto rounded-md">
                      <span className="mr-1">Request pending </span>
                      <RiChatSmile3Line className="w-8 h-8" />
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-3/10 md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-1">
            <div className="border-gray-100 my-5 rounded-sm border shadow-md">
              <div className="flex justify-between p-2 px-4 mb-4 text-sm">
                <div className="font-semibold text-gray-600">
                  Wallet Analysis
                </div>
                <div>
                  <span>Show:</span>
                </div>
              </div>
              <div className="flex text-xs items-center justify-between border-b border-gray-200 p-2 px-4">
                <div className="font-semibold">Balance</div>
                <div className="text-white bg-yellow-600 shadow rounded-full px-3 py-1.5">
                  ${user.wallet}
                </div>
              </div>
              {/* <div className="flex text-xs items-center justify-between border-b border-gray-200 p-2 px-4">
                <div className="font-semibold">Interest</div>
                <div className="text-white bg-yellow-600 shadow rounded-full px-3 py-1.5">
                  ${interest}
                </div>
              </div> */}
              <div className="my-2 mt-10 p-2 py-4 text-center">
                <Link to="/invest">
                  <button className="btnTrans border-pink-700 p-1.5 w-8/10 mx-auto text-pink-600 text-sm hover:bg-pink-600 hover:text-white">
                    INVEST
                  </button>
                </Link>
              </div>
            </div>
            <div className="py-2 px-4 border border-gray-100 shadow-lg my-5 grid">
              <p className="capitalize text-lg text-gray-600">
                Safely withdraw your money here on the due date
              </p>
              <div className="flex justify-center my-2 p-2">
                <FcMoneyTransfer className="w-24 h-24" />
              </div>
              <div className="my-2 flex justify-center p-2">
                <Link
                  to="/withdraw"
                  className="btnTrans text-center border-pink-700 p-2 px-8 w-8/10 mx-auto text-pink-600 text-sm hover:bg-pink-600 hover:text-white"
                >
                  WITHDRAW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
