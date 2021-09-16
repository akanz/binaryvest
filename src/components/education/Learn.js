import React from "react";
import investIcon from "../../img/investing.png";
import fundIcon from "../../img/funds.png";
import pieChart from "../../img/pie-chart.png";
import presentationIcon from "../../img/presentation.png";

const returns = [
  { img: investIcon, name: "free financial analysis and tips" },
  { img: fundIcon, name: "improve your returns exponentially" },
  { img: pieChart, name: "manage and grow your portfolio" },
];
const rules = [
  { title: " – The Rules of Crypto Investing" },
  { title: "– Deciding what type of investor you want to be" },
  {
    title:
      "– Building a strategy so you invest the right amounts of money and don’t expose yourself",
  },
  {
    title:
      "– Guide you to decide in which coins to invest and setting up a crypto portfolio",
  },
  { title: "– Securing your computer and smartphone" },
  { title: "– Setting Two Factor Authentication" },
  { title: "– Creating an encrypted email account" },
  { title: "– How to create secure passwords" },
  { title: "– Mistakes to avoid" },
  { title: "– How to BUY BITCOIN AND ANY CRYPTOCURRENCY in your country" },
  { title: "– How to transfer your coins to and from exchanges" },
  { title: "– Everything about hardware wallets" },
  { title: "– How to cash out your investment back to fiat" },
  { title: "– Cryptocurrency vocabulary and Crypto tax" },
  { title: " – Managing your investment" },
  { title: "– Strategy for analyzing small-cap coins" },
  { title: "– Intelligent investor Mindset" },
  { title: "– The potential future of bitcoin" },
  { title: "– How fundamentals affect the price of bitcoin" },
  { title: "– Best books to read and content to watch" },
];
const Learn = () => {
  return (
    <div className="text-gray-700 edu">
      <div className="md:p-8 p-4">
        <h3 className="text-xl md:text-4xl text-center my-4">
          Why you should learn to trade with us
        </h3>
        <div className="my-12 leading-9 text-lg">
          <p className='text-xl font-semibold my-2'>
            We get hundreds of emails/DMs per week with questions about Bitcoin
            and Altcoins investments and how to actually become a successful
            Crypto Investor.
          </p>
          <p>
            <span className="text-xl">Crypto</span> as we know is a relatively new
            asset class and there are lots of mistakes you can make while you
            purchase your coins. Most articles and videos you may come across
            have conflicting information and seem confusing to navigate, but our
            goal at <b>Binaryvest </b>is to make cryptocurrency investing very
            easy to understand.
          </p>
          <p>
            Most people don’t think about security and risk until it is too
            late, but a single mistake can cause you a lot especially because
            crypto transactions are final and irreversible. With Crypto, you get
            to be your own bank, so you need to understand how to properly
            secure your coins, wallets, exchanges and devices associated with
            it.
          </p>
          <p>
            Finally, the crypto market is extremely volatile so there is always
            a risk of making irrational decisions because of that volatility.
            You will be surprised what emotions can do to you when your money is
            on the line, so you must be aware of certain things so you don’t
            fall for them later.
          </p>
        </div>
      </div>
      <div className="bg-skyblue p-12 py-16 shadow">
        <h3 className="text-2xl md:text-4xl text-center mb-12 capitalize">
          what you will gain
        </h3>
        <div className=" justify-items-center grid md:grid-cols-3 gap-4 md:gap-8 my-12">
          {returns.map((item, i) => (
            <div key={i} className="grid justify-items-center">
              <img className="w-44 h-40" src={item.img} alt="" />
              <div className="capitalize mt-12 text-2xl text-center">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-12 text-xl">
        <div className="md:flex items-center">
          {/* <img className="w-20 h-16 md:w-32 md:h-28" src={presentationIcon} alt="" /> */}
          <p className="my-4 leading-8">
            <b>In this course</b>, we will walk you through all of the different
            ways that you can buy cryptocurrencies, show you how to properly
            secure your coins, wallets, and exchanges, and go over various
            investing strategies you can use to maximize your profits. Some of
            the things you will learn include:
          </p>
        </div>

        {rules.map((rule, i) => (
          <p className="my-3 md:w-8/10 mx-auto" key={i}>
            {rule.title}
          </p>
        ))}
      </div>
      <div className="mx-auto mb-48 gap-6 w-8/10 text-white md:text-xl grid md:grid-cols-2 justify-items-center content-between">
        <button className="button uppercase font-extrabold ">
          ENROLL NOW FOR $150 monthly
        </button>
        <button className="bg-blueish uppercase p-2 px-8 rounded font-extrabold ">
          ENROLL NOW FOR $1000 lifetime access
        </button>
      </div>
    </div>
  );
};

export default Learn;
