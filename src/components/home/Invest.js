import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import giftIcon from "../../img/gift.svg";
import bankIcon from "../../img/bank.svg";
import chartIcon from "../../img/chart.svg";
import s1 from "../../img/one.svg";
import s2 from "../../img/two.svg";
import s3 from "../../img/three.svg";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    img: giftIcon,
    desc: "Pick your preferred investment package",
    num: 1,
    stepImg: s1,
  },
  { img: bankIcon, desc: "Fund your Account and Invest", num: 1, stepImg: s2 },
  {
    img: chartIcon,
    desc: "Monitor your wallet and get profit monthly.",
    num: 1,
    stepImg: s3,
  },
];

const pckgs = [
  {
    name: "Standard - 35% ROI",
    amount: "$50 - $499",
    desc: "Profit ranges from $17 to $175 monthly",
  },
  {
    name: "Silver - 45% ROI",
    amount: "$500 - $4.9K",
    desc: "Profit ranges from $225 to $2250 monthly",
  },
  {
    name: "Gold - 60% ROI",
    amount: "$5000 - $49K",
    desc: "Profit ranges from $300 to $3000 weekly",
  },
  {
    name: "Diamond - 70% ROI",
    amount: "$50K - $499K",
    desc: "Profit ranges from $3500 to $35k weekly",
  },
  {
    name: "Platinum - 80% ROI",
    amount: "$500K above",
    desc: "Earn $40k+ weekly",
  },
];
const parentVariant = {
  start: {
    x: "100vw",
  },
  end: {
    x: 0,
    transition: {
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};
export const investVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  },
  iconVariants = {
    start: {
      x: "-100vw",
    },
    end: {
      x: 0,
      transition: {
        duration: 1.3,
      },
    },
  },
  packageParent = {
    start: {
      x: 0,
    },
    end: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 3,
      },
    },
  },
  packageVariant = {
    start: {
      y: 200,
    },
    end: {
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 200,
      },
    },
  };
const Invest = () => {
  const investControls = useAnimation(),
    iconControls = useAnimation(),
    packageControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      investControls.start("end");
    } else {
      investControls.start("start");
    }
  }, [investControls, inView]);

  useEffect(() => {
    if (inView) {
      iconControls.start("end");
    } else {
      iconControls.start("start");
    }
  }, [iconControls, inView]);

  useEffect(() => {
    if (inView) {
      packageControls.start("end");
    } else {
      packageControls.start("start");
    }
  }, [packageControls, inView]);

  return (
    <motion.div
      variants={parentVariant}
      initial="start"
      animate="end"
      className="bg-skyblue px-12 py-6 grid place-items-center"
    >
      <motion.h1
        ref={ref}
        variants={investVariant}
        initial="start"
        animate={investControls}
        className="my-5 text-center text-3xl capitalize font-medium tracking-wide"
      >
        Start Investing In 3 Easy Steps
      </motion.h1>
      <motion.div variants={packageParent} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:w-9/10 place-content-between mx-auto my-16">
        {steps.map((step, i) => (
          <motion.div
            ref={ref}
            variants={iconVariants}
            initial="start"
            animate={iconControls}
            key={i}
            className="text-center grid"
          >
            <div className="flex justify-center h-24">
              <img className="h-full" src={step.img} alt="steps icon" />
            </div>
            <div className="my-3">{step.desc}</div>
            <div className="flex justify-center">
              <img src={step.stepImg} alt="steps" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.h1
        ref={ref}
        variants={investVariant}
        initial="start"
        animate={investControls}
        className="my-5 mt-16 text-center text-3xl capitalize font-medium tracking-wide"
      >
        Investment Packages
      </motion.h1>
      <motion.div
        variants={packageParent}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 place-content-between my-8"
      >
        {pckgs.map((pckg, i) => (
          <motion.div
            // variants={packageVariant}
            // ref={ref}
            // initial="start"
            // animate={packageControls}
            key={i}
            className="shadow p-4 rounded bg-white"
          >
            <h3 className="text-sm text-gray-600 font-light">{pckg.name}</h3>
            <h1 className="text-2xl text-pink-600 font-semibold my-2">
              {pckg.amount}
            </h1>
            <h4 className="text-sm text-lightteal font-medium">{pckg.desc}</h4>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center p-5">
        <Link to="/invest">
          <button className="button">Get Started</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Invest;
