import React from "react";
import rating from "../../img/rating.svg";
import review from "../../img/review.svg";

const reviews = [
  {
    desc: " They were so helpful. I literally went from a complete novice to tutoring people via zoom every week! ",
    img: rating,
    alt: "",
    reviewImg: review,
    name: "Sam Welch",
  },
  {
    desc: " They were so helpful. I literally went from a complete novice to tutoring people via zoom every week! ",
    img: rating,
    alt: "",
    reviewImg: review,
    name: "Sam Welch",
  },
  {
    desc: " They were so helpful. I literally went from a complete novice to tutoring people via zoom every week! ",
    img: rating,
    alt: "",
    reviewImg: review,
    name: "Sam Welch",
  },
  {
    desc: " They were so helpful. I literally went from a complete novice to tutoring people via zoom every week! ",
    img: rating,
    alt: "",
    reviewImg: review,
    name: "Sam Welch",
  },
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
            <div className='flex justify-center'>
              <img className='w-64 h-64' src={review.reviewImg} alt="ratings" />
            </div>
            <div className="flex text-2xl justify-center items-center">
              {review.name}
            </div>

            <div className="p-2.5">{review.desc}</div>
            <div className="flex items-center justify-center">
              <img src={review.img} alt="ratings" />
            </div>
          </div>
        ))}
        h
      </div>
    </div>
  );
};

export default Reviews;
