import React from "react";
import { FaDotCircle } from "react-icons/fa";
const Edupackages = [
  {
    title: "STANDARD",
    header: "Pay $250 Monthly for 3 Months ",
    list: [
      { item: "24/7 Live video chat support " },
      { item: "Withdrawals in 1 hour" },
      { item: "Demo Account" },
      { item: "Copy Trading Tool" },
      { item: "Bonus +2%" },
    ],
  },
  {
    title: "PREMIUM",
    header: "$1000 one time payment",
    list: [
      { item: "24/7 Live video chat support " },
      { item: "Withdrawals in 1 hour" },
      { item: "Demo Account" },
      { item: "Copy Trading Tool" },
      { item: "Bonus +10%" },
      { item: "Masterclass web session" },
      { item: "Personal Success Manager" },
      { item: "First 3 risk free trades" },
    ],
  },
];
const Packagelist = [
  { item: "24/7 Live video chat support " },
  { item: "Withdrawals in 1 hour" },
  { item: "Demo Account" },
  { item: "Copy Trading Tool" },
  { item: "Bonus +2%" },
];
const Package = () => {
  return (
    <div className="p-8">
      <div className="my-4 mb-8">
        <h2>Learn how to Trade and Invest in Crypto</h2>
        <h3>
          Crypto has a steep learning curve but we are here to flatten it for
          you
        </h3>
      </div>
      <div className="w-8/10 mx-auto grid md:grid-cols-2 gap-4 md:gap-x-24">
        {Edupackages.map((menu, i) => (
          <div
            key={i}
            className="shadow-lg border border-gray-200 bg-white text-black"
          >
            {console.log(menu)}
            <div className="border-b p-2 border-gray-300 text-xl text-center">
              {menu.title}
            </div>
            <div className="p-4 w-9/15 mx-auto">
              <h3 className='text-center text-lg'>{menu.header} </h3>
              <div className='w-9/10 mx-auto my-4 text-sm text-gray-600'>
                {menu.list.map((list, i) => (
                  <h4 className='flex items-center my-2' key={i}>
                    <FaDotCircle className='text-blueish' /><span className='ml-2'> {list.item}</span>
                  </h4>
                ))}
              </div>
              <div>
                  <button className='button'>Enroll now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
