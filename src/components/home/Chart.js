import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import coin1 from "../../img/coin1.svg";
import coin2 from "../../img/coin2.svg";
import coin3 from "../../img/coin3.svg";
import { useInView } from "react-intersection-observer";
import { IoIosArrowForward } from "react-icons/io";

const Chart = () => {
  const chartControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      chartControls.start("end");
    } else {
      chartControls.start("start");
    }
  }, [inView, chartControls]);

  const parentVariant = {
    start: {
      x: "100vw",
    },
    end: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };
  const chartVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={parentVariant}
      initial="start"
      animate="end"
      className="w-9/10 mx-auto grid gap-4 md:grid-cols-2 py-7"
    >
      <motion.div
        ref={ref}
        variants={chartVariant}
        initial="start"
        animate={chartControls}
      >
        <h1 className="text-3xl my-5">Are you a beginner?</h1>
        <div className="">
          <h3 className="text-xl mb-8">
            No worries. We will teach you all you need to know about crypto
            right away!
          </h3>

          <h2 className="text-2xl mt-2">
            CRYPTOCURRENCIES ARE THE FUTURE OF FINANCE
          </h2>
          <div>
            The last technology that grew this fast was the internet. Our 7,500+
            strong community lets you:
            <ul className="list-inside list-none leading-8">
              <li className='flex items-center'>
                <IoIosArrowForward className='mr-2' /> Learn from the experts
              </li>
              <li className='flex items-center'>
                <IoIosArrowForward className='mr-2' /> Crowdsource market knowledge
              </li>
              <li className='flex items-center'>
                <IoIosArrowForward className='mr-2' /> and arms you with actionable information
              </li>
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
      </motion.div>
      <motion.div
        ref={ref}
        variants={chartVariant}
        initial="start"
        animate={chartControls}
        className="p-5"
      >
        <div className="mb-12 flex justify-items-start">
          <img src={coin1} alt="coin one" />
        </div>
        <div className="mb-12 flex justify-end">
          <img src={coin2} alt="coin two" />
        </div>
        <div className="mb-12 flex justify-start">
          <img src={coin3} alt="coin three" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Chart;
