import React, { useState,useRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import cp from "../src/img/c&p.svg";
import add from "../src/img/add.svg";

const Crypto = () => {
  const [copy, setCopy] = useState("");
  const [copyState, setCopyState] = useState(false);
  const inpRef = useRef("");
  const ercRef = useRef("");
  const trcRef = useRef("");
  const bepRef = useRef("");

  const click = () => {
    inpRef.current.click();
  };
  const copyToClip = (e) => {
    if (e.target.name === "erc") {
      ercRef.current.select();
    } else if (e.target.name === "trc") {
      trcRef.current.select();
    } else {
      bepRef.current.select();
    }

    document.execCommand("copy");
    setCopy("address copied");
    setCopyState(true);
    console.log(e);
  };
  setTimeout(() => {
    if (copyState == true) {
      setCopyState(false);
    }
  }, 2000);
  return (
    <div>
      <div className="md:w-7/10 m-auto mt-24 shadow-lg rounded-lg border border-gray-100 py-8 px-16">
        <h2 className="text-3xl text-center text-gray-600 tracking-wider">
          Invest
        </h2>
        <div>
          <h3 className="text-sm mt-5 text-gray-500 font-light">
            Deposit the sum of $100 into any of the following USDT wallet
            addresses listed below
          </h3>
          <div className="my-3 flex justify-between relative">
            <span className="font-semibold">ERC20</span>
            <span className="w-7/10">
              <input
                className="focus:outline-none w-full"
                value="TMH8GGEBMoA3V2hKTBR3gLsJ4pCVNwzXsLd"
                ref={ercRef}
                readOnly
              />
            </span>
            <button onClick={copyToClip}>
              <Image name="erc" src={cp} alt="copy wallet address" />
            </button>
            {copyState && (
              <span className="absolute -right-32 bg-blue-500 rounded-sm text-white text-xs capitalize p-2">
                {copy}
              </span>
            )}
          </div>
          <div className="my-3 flex justify-between">
            <span className="font-semibold">TRC20</span>
            <span className="w-7/10">
              <input
                className="focus:outline-none w-full"
                value="second one"
                ref={trcRef}
                readOnly
              />
            </span>
            <button onClick={copyToClip}>
              <Image name="trc" src={cp} alt="copy wallet address" />
            </button>
            {copyState && (
              <span className="absolute -right-32 bg-blue-500 rounded-sm text-white text-xs capitalize p-2">
                {copy}
              </span>
            )}
          </div>
          <div className="my-3 flex justify-between">
            <span className="font-semibold">BEP2</span>
            <span className="w-7/10">
              <input
                className="focus:outline-none w-full"
                value="third one"
                ref={bepRef}
                readOnly
              />
            </span>
            <button onClick={copyToClip}>
              <Image name="bep" src={cp} alt="copy wallet address" />
            </button>
            {copyState && (
              <span className="absolute -right-32 bg-blue-500 rounded-sm text-white text-xs capitalize p-2">
                {copy}
              </span>
            )}
          </div>
          <h3 className="text-gray-500 my-3 text-xs font-light">
            Please Upload a screenshot of the sucessful transaction and a
            confirmation email will be sent to you after the money has been
            received.
          </h3>
          <div className="border border-gray-200 my-2 p-2">
            <input ref={inpRef} className="hidden" type="file" />
            <div className="text-center">
              <Image src={add} alt="upload file" onClick={click} />
            </div>
          </div>
          <div className="text-right mt-8">
            <button className={styles.button}>confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
