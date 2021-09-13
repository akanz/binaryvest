import React from "react";
import rating from "../../img/rating.svg";
import review from "../../img/review.svg";
import chart1 from "../../img/chat_1.jpg";
import chart2 from "../../img/chat_2.jpg";
import chart3 from "../../img/chat_3.jpg";

const reviews = [
  {
    desc: " They were so helpful. I literally went from a complete novice to tutoring people via zoom every week! ",
    img: rating,
    alt: "",
    reviewImg: review,
    name: "Sam Welch",
  },
  { img: rating, reviewImg: chart1, alt: "" },
  { img: rating, reviewImg: chart2, alt: "" },
  { img: rating, reviewImg: chart3, alt: "" },
];

const Reviews = () => {
  return (
    <div className="lg:w-9/15 p-12 pb-24 text-white mx-auto">
      <h1 className="capitalize text-black text-center text-4xl mb-8 tracking-wide">
        Reviews
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="shadow rounded-md p-5 bg-white text-black text-center"
          >
            <div className="flex justify-center">
              <img className="w-64 h-64" src={review.reviewImg} alt="ratings" />
            </div>
            <div className="flex items-center justify-center">
              <img src={review.img} alt="ratings" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
