import React from "react";
import team1 from "../../img/team1.svg";
import team2 from "../../img/team2.svg";
import team3 from "../../img/team3.svg";
import team4 from "../../img/team4.svg";

const Team = () => {
  const team = [
    {
      name: "charles ding",
      img: team1,
      alt: "",
      role: "head trader",
      desc: "Forex Trader for 3 years, works for Goldman Sachs in stocks department",
    },
    {
      name: "charles ding",
      img: team2,
      alt: "",
      role: "head trader",
      desc: "Forex Trader for 3 years, works for Goldman Sachs in stocks department",
    },
    {
      name: "charles ding",
      img: team3,
      alt: "",
      role: "head trader",
      desc: "Forex Trader for 3 years, works for Goldman Sachs in stocks department",
    },
    {
      name: "charles ding",
      img: team4,
      alt: "",
      role: "head trader",
      desc: "Forex Trader for 3 years, works for Goldman Sachs in stocks department",
    },
  ];
  return (
    <div className=" p-8 bg-pink-50">
      <h1 className="mb-8 text-center text-3xl tracking-wide">Meet the Team</h1>
      <div className="w-9/10 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {team.map((team,i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 px-6">
            <div className='flex justify-center my-2'>
              <img src={team.img} alt="team members" />
            </div>
            <div className="text-center text-gray-700">
              <h3 className="text-lg uppercase font-medium">{team.name}</h3>
              <h4 className="text-sm uppercase">{team.role}</h4>
              <h6 className="font-light italic mt-2 text-xs">{team.desc}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
