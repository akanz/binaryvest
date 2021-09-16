import React from "react";
import { Link } from "react-router-dom";

import coin1 from "../../img/coin1.svg";
import coin2 from "../../img/coin2.svg";
import coin3 from "../../img/coin3.svg";

const Chart = () => {
  return (
    <div className="w-9/10 mx-auto grid gap-4 md:grid-cols-2 py-7">
      <div>
        <h1 className="text-3xl my-5">Are you a beginner?</h1>
        <div className="">
          <h3 className='text-lg mb-8'>
          No worries. We will teach you all you need to know about crypto right
          away!
          </h3>
          
          <h2 className="text-xl mt-2">
            CRYPTOCURRENCIES ARE THE FUTURE OF FINANCE
          </h2>
          <div>
            The last technology that grew this fast was the internet. Our 7,500+
            strong community lets you:
            <ul className='list-disc list-inside'>
              <li>Learn from the experts </li>
              <li>Crowdsource market knowledge</li>
              <li> and arms you with actionable information</li>
            </ul>
            So, if you’re looking for the best place to start your
            cryptocurrency journey, you’ve found it.
          </div>
        </div>
        <div className="my-10">
          <Link to="/education">
            <button className="button">LEARN TO TRADE</button>
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-12 flex justify-items-start">
          <img src={coin1} alt="coin one" />
        </div>
        <div className="mb-12 flex justify-end">
          <img src={coin2} alt="coin two" />
        </div>
        <div className="mb-12 flex justify-start">
          <img src={coin3} alt="coin three" />
        </div>
      </div>
    </div>
  );
};

export default Chart;
