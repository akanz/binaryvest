import React from "react";
import social1 from "../../img/social1.svg";
import social2 from "../../img/social2.svg";
import social3 from "../../img/social3.svg";
import social4 from "../../img/social4.svg";

const Contact = () => {
  return (
    <div className="bg-darkblue text-white p-4 pb-32 md:p-12">
      <div className="md:w-9/10 mx-auto grid md:grid-cols-2">
        <div className='mr-5 lg:mr-10'>
          <h4 className='my-8'>ABOUT US</h4>
          <div className='font-light'>
            AssuredTrade is the world’s leading cryptocurrency platform. It Quam
            varius ut amet viverra id vitae eget a, nam. Tristique at porttitor
            ornare nullam. Egestas arcu mattis mauris, vitae ac, facilisis id
            risus. Ac diam, faucibus ipsum sit mattis amet, euismod. Vel libero
            quis dignissim at nibh pharetra sem. Sollicitudin elementum,
            sagittis, gravida nullam aliquam nam ligula amet, ultrices. Neque,
            nisl sed justo, urna interdum non. Sit quis
          </div>
        </div>
        <div className='md:ml-10'>
          <h4 className='my-8'>CONTACT US</h4>
          <div className="flex justify-between lg:w-2/5 my-5">
            <img src={social1} alt='social icons' />
            <img src={social2} alt='social icons' />
            <img src={social3} alt='social icons' />
            <img src={social4} alt='social icons' />
          </div>
          <div className='text-sm font-light my-4'>
            Be the first to know about our investment packages and latest
            updates
          </div>
          <div className='flex'>
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
