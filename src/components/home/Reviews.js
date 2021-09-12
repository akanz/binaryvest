import React from "react";
import rating from "../../img/rating.svg";
import review from "../../img/review.svg";

const Reviews = () => {
  return (
    <div className="bg-darkblue lg:w-9/15 p-12 pb-24 text-white mx-auto">
      <h1 className="capitalize text-center text-3xl mb-8 tracking-wide">
        Reviews
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="rounded-lg p-5 bg-white text-black text-center">
          <div>
            <img src={rating} alt='ratings' />
          </div>
          <div className='p-2.5'>
            “ They were so helpful. I literally went from a complete novice to
            tutoring people via zoom every week! ”
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={review} alt='ratings' />
            </div>
            <div className="mx-2">Sam Welch</div>
          </div>
        </div>
        <div className="rounded-lg p-5 bg-white text-black">
          <div>
            <img src={rating} alt='ratings' />
          </div>
          <div>
            “ They were so helpful. I literally went from a complete novice to
            tutoring people via zoom every week! ”
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={review} alt='ratings' />
            </div>
            <div className="mx-2">Sam Welch</div>
          </div>
        </div>
        <div className="rounded-lg p-5 bg-white text-black">
          <div>
            <img src={rating} alt='ratings' />
          </div>
          <div>
            “ They were so helpful. I literally went from a complete novice to
            tutoring people via zoom every week! ”
          </div>
          <div className="flex items-center">
            <div>
              <img src={review} alt='ratings' />
            </div>
            <div className="mx-2">Sam Welch</div>
          </div>
        </div>
        <div className="rounded-lg p-5 bg-white text-black">
          <div>
            <img src={rating} alt='ratings' />
          </div>
          <div>
            “ They were so helpful. I literally went from a complete novice to
            tutoring people via zoom every week! ”
          </div>
          <div className="flex items-center">
            <div>
              <img src={review} alt='ratings' />
            </div>
            <div className="mx-2">Sam Welch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
