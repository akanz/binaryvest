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
        <div>
          No worries. We will teach you all you need to know about crypto right
          away! Quam varius ut amet viverra id vitae eget a, nam. Tristique at
          porttitor ornare nullam. Egestas arcu mattis mauris, vitae ac,
          facilisis id risus. Ac diam, faucibus ipsum sit mattis amet, euismod.
          Vel libero quis dignissim at nibh pharetra sem. Sollicitudin
          elementum, sagittis, gravida nullam aliquam nam ligula amet, ultrices.
          Neque, nisl sed justo, urna interdum non. Sit quis
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
