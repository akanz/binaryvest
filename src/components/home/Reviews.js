import React from "react";
import rating from "../../img/rating.svg";
import review from "../../img/review.svg";
import chart1 from "../../img/chat_1.jpg";
import chart2 from "../../img/chat_2.jpg";
import chart3 from "../../img/chat_3.jpg";

const reviews = [
  { img: chart1, alt: "" },
  { img: chart2, alt: "" },
  { img: chart3, alt: "" },
  {img: review, alt: ""}
];
const Reviews = () => {
  return (
    <div className="bg-darkblue lg:w-9/15 p-12 pb-24 text-white mx-auto">
      <h1 className="capitalize text-center text-3xl mb-8 tracking-wide">
        Reviews
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {reviews.map((opt, i) => (
          <div className='rounded' key={i}>
            <img className='h-72 w-80 rounded-xl shadow' src={opt.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
