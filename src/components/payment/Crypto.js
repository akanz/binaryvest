import React, { useState, useRef } from "react";
import cp from "../../img/c&p.svg";
import add from "../../img/add.svg";

const Crypto = ({ handleProofOfPay, amount }) => {
  const [copy, setCopy] = useState("");
  const [copyState, setCopyState] = useState(false);
  const inpRef = useRef("");
  const ercRef = useRef("");
  const trcRef = useRef("");
  const bepRef = useRef("");

  const click = () => {
    inpRef.current.click();
  };
  const handleFileChange = (e) => {
    let files = e.target.files;
    // handleFile(files[0]);

    if (files.length > 0) {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = (e) => {
        const result = e.target.result;
        handleProofOfPay(result);
      };
    }
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
  };
  setTimeout(() => {
    if (copyState === true) {
      setCopyState(false);
    }
  }, 2000);
  return (
    <div>
      <h3 className="text-sm mt-5 text-gray-500 font-light">
        Deposit the sum of ${amount} into any of the following USDT wallet addresses
        listed below
      </h3>
      <div className="my-3 flex justify-between">
        <span className="font-semibold">ERC20</span>
        <span className="w-7/10">
          <input
            className="focus:outline-none w-full"
            value="TMH8GGEBMoA3V2hKTBR3gLsJ4pCVNwzXsLd"
            ref={ercRef}
            readOnly
          />
        </span>
        <span onClick={copyToClip}>
          <img name="erc" src={cp} alt="copy wallet address" />
        </span>
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
        <span onClick={copyToClip}>
          <img name="trc" src={cp} alt="copy wallet address" />
        </span>
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
        <span onClick={copyToClip}>
          <img name="bep" src={cp} alt="copy wallet address" />
        </span>
      </div>
      <h3 className="text-gray-500 my-3 text-xs font-light">
        Please Upload a screenshot of the sucessful transaction and a
        confirmation email will be sent to you after the money has been
        received.
      </h3>
      <div className="border border-gray-200 my-2 p-2">
        <input
          ref={inpRef}
          className="hidden"
          type="file"
          onClick={(e) => handleFileChange(e)}
        />
        <div className="flex justify-center">
          <img
            className="w-16"
            src={add}
            alt="upload file"
            onClick={click}
          />
        </div>
      </div>
      <div className="text-right mt-8">
        <button type='submit' className="button">confirm</button>
      </div>
      <div>
      {copyState && (
          <span className="flex justify-center items-center w-5/10 mx-auto mt-5 bg-blue-500 rounded text-white text-sm capitalize p-2 px-12">
            {copy}
          </span>
        )}
      </div>
    </div>
  );
};

export default Crypto;
