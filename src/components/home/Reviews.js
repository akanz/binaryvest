import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import rating from "../../img/rating.svg";
import review from "../../img/review.svg";
import chart1 from "../../img/chat_1.jpg";
import chart2 from "../../img/chat_2.jpg";
import chart3 from "../../img/chat_3.jpg";
import { investVariant, packageParent } from "./Invest";
import { useInView } from "react-intersection-observer";

const reviews = [
  { img: chart1, alt: "" },
  { img: chart2, alt: "" },
  { img: chart3, alt: "" },
  { img: review, alt: "" },
];
const Reviews = () => {
  const reviewControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      reviewControls.start("end");
    } else {
      reviewControls.start("start");
    }
  }, [inView, reviewControls]);

  return (
    <motion.div
      variants={packageParent}
      initial="start"
      animate={reviewControls}
      className="bg-darkblue lg:w-9/15 p-12 pb-24 text-white mx-auto"
    >
      <h1 className="capitalize text-center text-3xl mb-8 tracking-wide">
        Reviews
      </h1>
      <motion.div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {reviews.map((opt, i) => (
          <motion.div
            ref={ref}
            variants={investVariant}
            initial="start"
            animate={reviewControls}
            className="rounded"
            key={i}
          >
            <img className="h-72 w-80 rounded-xl shadow" src={opt.img} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Reviews;
