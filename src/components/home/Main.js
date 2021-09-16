import React, { Suspense, lazy } from "react";
import Loader from "../otherComps/Loader";
import Intro from "./Intro";
// import Chart from "./Chart";
import Invest from "./Invest";
// import FAQs from "./FAQs";
// import Contact from "./Contact";
// import Reviews from "./Reviews";

const Chart = lazy(() => import("./Chart")),
  Reviews = lazy(() => import("./Reviews")),
  FAQs = lazy(() => import("./FAQs")),
  Contact = lazy(() => import("./Contact"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Intro />
        <Chart />

        <Invest />
        <Reviews />
        <FAQs />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Main;
