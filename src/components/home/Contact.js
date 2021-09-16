import React from "react";
import social1 from "../../img/social1.svg";
import social2 from "../../img/social2.svg";
import social3 from "../../img/social3.svg";
import social4 from "../../img/social4.svg";

const Contact = () => {
  return (
    <div className="bg-darkblue text-white p-4 pb-32 md:p-12">
      <div className="md:w-9/10 mx-auto grid md:grid-cols-2">
        <div className="mr-5 lg:mr-10">
          <h4 className="my-8">ABOUT US</h4>
          <div className="font-light">
            <h3>PRIVATE COMMUNITY</h3> An unmatched peer group of Crypto experts Gain
            market insights and stay ahead of the curve with a peer group you’ll
            find nowhere else on earth. They say the best time to plant a tree
            was 20 years ago. The second best time is today. Join our community
            and become the best cryptocurrency investor you can be — by
            surrounding yourself with the people who make it easy.
          </div>
        </div>
        <div className="md:ml-10">
          <h4 className="my-8">CONTACT US</h4>
          <div className="flex justify-between lg:w-2/5 my-5">
            <img src={social1} alt="social icons" />
            <img src={social2} alt="social icons" />
            <img src={social3} alt="social icons" />
            <img src={social4} alt="social icons" />
          </div>
          <div className="text-sm font-light my-4">
            Be the first to know about our investment packages and latest
            updates
          </div>
          <div className="flex">
            <input
              className="w-full text-sm bg-trans focus:outline-none rounded-l-lg h-10 p-2"
              type="text"
              placeholder="Enter your Email Address"
            />
            <button className="bg-pink-600 p-2 px-5 text-white font-medium rounded-r-lg">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
