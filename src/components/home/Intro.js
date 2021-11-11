import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const introControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      introControls.start("end");
    } else {
      introControls.start("start");
    }
  }, [introControls, inView]);

  const investVariant = {
      start: {
        opacity: 0,
      },
      end: {
        opacity: 1,
        transition: {
          
        },
      },
    },
    guideVariant = {
      start: { y: 100 },
      end: { y: 0, transition: { stiffness: 150 } },
    };

  return (
    <div className="lg:w-9/15 mt-2 mx-auto bg-intro h-700 flex md:justify-end items-center bg-cover text-white">
      <motion.div animate={{}} className="md:w-5/10 md:float-right p-5">
        <motion.h1
          ref={ref}
          variants={investVariant}
          initial="start"
          animate={introControls}
          className="text-2xl md:text-3xl"
        >
          Cryptocurrency for Novices The Best Crypto Education Platform
        </motion.h1>

        <motion.h2
          ref={ref}
          initial="start"
          variants={investVariant}
          animate={introControls}
          className="text-base my-4 md:text-lg "
        >
          Let us guide you on the right path. Invest now, Enjoy later.
        </motion.h2>
        <motion.div
          ref={ref}
          variants={guideVariant}
          initial="start"
          animate={introControls}
          className="my-12"
        >
          <Link to="/invest">
            <button className="button">GET STARTED</button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
