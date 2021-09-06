import React, { useContext, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Cleave from 'cleave.js'
const Plan = () => {
  const [radOpt, setRadOpt] = useState("");
  const [email, setEmail] = useState("");
  const [pckg, setPckg] = useState("");
  const { path } = useRouteMatch();

  const packages = [
    {
      text: "Standard ( 35% ROI )",
      id: 1,
      placeholder: "Amount ( Between $150 - $499)",
    },
    {
      text: " Ruby( 35% ROI )",
      id: 2,
      placeholder: "Amount ( Between $500 - $4,999)",
    },
    {
      text: "Gold ( 35% ROI )",
      id: 3,
      placeholder: "Amount ( Between $5000 - $49,999)",
    },
    {
      text: "Diamond ( 35% ROI )",
      id: 4,
      placeholder: "Amount ( Between $50000 - $199,999)",
    },
    {
      text: "Platinum ( 35% ROI )",
      id: 5,
      placeholder: "Amount ($200,000 and Above)",
    },
  ];
  const handleRadOpt = (opt) => {
    setRadOpt(opt);
    console.log(radOpt);
  };
  return (
    <div>
      <div className="my-4">
        <input
          type="email"
          className="form-input w-full"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <h3>Please select your preferred investment plan</h3>
        {packages.map((pckg) => (
          <div key={pckg.id} className="flex items-center my-3">
            <input
              type="radio"
              className="form-radio mr-2"
              name="payment_opt"
              onClick={() => setRadOpt(pckg.id)}
            />
            <label htmlFor="crypto">{pckg.text}</label>
          </div>
        ))}

        {packages
          .filter((pckg) => pckg.id === radOpt || pckg.id === "")
          .map((input) => (
            <div key={input.id} className="my-4">
              <input
                type="text"
                className="form-input w-full"
                placeholder={input.placeholder}
                required
                onChange={(e) => setPckg(e.target.value)}
              />
              {/* <Cleave
  placeholder="0.00"
  options={{
    numeral: true,
    numeralThousandsGroupStyle: "thousand"
  }}
  onChange={onDonationAmountChange}
  className="form-field"
/> */}

            </div>
          ))}

        <div className="text-right mt-8">
          <Link to={`/invest/confirm`}>
            <button disabled={radOpt === "" || email === "" || pckg === ""} className="button">
              next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
