import React from "react";

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
    <div className="p-8 bg-intro">
      <div className="my-4 mb-8">
        <h2>Learn how to Trade and Invest in Crypto</h2>
        <h3>
          Crypto has a steep learning curve but we are here to flatten it for
          you
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {Edupackages.map((menu, i) => (
          <div className="shadow">
            <div className="border-b p-2 border-gray-300">{menu.title}</div>
            <div className="p-2">
              <h3>{menu.header} </h3>
              <div>
                <h4>{menu.list.item}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
