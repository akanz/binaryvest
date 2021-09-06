import React from "react";
import { Link } from "react-router-dom";
import roi1 from "../../img/roi1.svg";
import roi2 from "../../img/roi2.svg";
import roi3 from "../../img/roi3.svg";
import roi4 from "../../img/roi4.svg";
import roi5 from "../../img/roi5.svg";
import giftIcon from "../../img/gift.svg";
import bankIcon from "../../img/bank.svg";
import chartIcon from "../../img/chart.svg";
import s1 from "../../img/one.svg";
import s2 from "../../img/two.svg";
import s3 from "../../img/three.svg";

const steps = [
  {
    img: giftIcon,
    desc: "Pick your preferred investment package",
    num: 1,
    stepImg: s1,
  },
  { img: bankIcon, desc: "Fund your Account and Invest", num: 1, stepImg: s2 },
  {
    img: chartIcon,
    desc: "Monitor your wallet and get profit monthly.",
    num: 1,
    stepImg: s3,
  },
];

const pckgs = [
  {
    name: "Standard - 35% ROI",
    amount: "$50 - $499",
    desc: "Profit ranges from $17 to $175 monthly",
  },
  {
    name: "Ruby - 45% ROI",
    amount: "$500 - $4.9K",
    desc: "Profit ranges from $225 to $2250 monthly",
  },
  {
    name: "Gold - 60% ROI",
    amount: "$5000 - $49K",
    desc: "Profit ranges from $300 to $3000 weekly",
  },
  {
    name: "Diamond - 70% ROI",
    amount: "$50K - $499K",
    desc: "Profit ranges from $3500 to $35k weekly",
  },
  {
    name: "Platinum - 80% ROI",
    amount: "$500K above",
    desc: "Earn $40k+ weekly",
  },
];

const Invest = () => {
  return (
    <div className="bg-skyblue px-12 py-6 grid place-items-center">
      <h1 className="my-5 text-center text-3xl capitalize font-medium tracking-wide">
        Start Investing In 3 Easy Steps
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:w-9/10 place-content-between mx-auto my-16">
        {steps.map((step, i) => (
          <div key={i} className="text-center grid">
            <div className="flex justify-center h-24">
              <img className="h-full" src={step.img} alt="steps icon" />
            </div>
            <div className="my-3">{step.desc}</div>
            <div className="flex justify-center">
              <img src={step.stepImg} alt="steps" />
            </div>
          </div>
        ))}
      </div>
      <h1 className="my-5 mt-16 text-center text-3xl capitalize font-medium tracking-wide">
        Investment Packages
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 place-content-between my-8">
        {pckgs.map((pckg, i) => (
          <div key={i} className="shadow p-4 rounded bg-white">
            <h3 className="text-sm text-gray-600 font-light">{pckg.name}</h3>
            <h1 className="text-2xl text-pink-600 font-semibold my-2">{pckg.amount}</h1>
            <h4 className="text-sm text-lightteal font-medium">{pckg.desc}</h4>
          </div>
        ))}
      </div>
      <div className="text-center p-5">
        <Link to="/invest">
          <button className="button">Get Started</button>
        </Link>
      </div>
      <Link to="/dashboard">
        <button className="button">profile</button>
      </Link>
    </div>
  );
};

export default Invest;
