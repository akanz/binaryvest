import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import cp from "../../img/c&p.svg";
import uploadIcon from "../../img/upload.svg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "@material-ui/core";
import Errormessage from "../otherComps/Errormessage";
import Successmessage from "../otherComps/Successmessage";
import BtnLoader from "../otherComps/BtnLoader";
import { MdClose } from "react-icons/md";

const Crypto = ({ handleProofOfPay, amount, handleStep, proofOfPay }) => {
  const message = useSelector((state) => state.message);
  const deposit = useSelector((state) => state.deposit);
  const [copy, setCopy] = useState("");
  const [copyState, setCopyState] = useState(false);
  const [proofPreview, setProofPreview] = useState({
    pic: "",
    err: "",
  });

  const btcRef = useRef("");
  const ercRef = useRef("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = [
      "image/png",
      "image/jpeg",
      "image/heic",
      "image/webp",
      "application/pdf",
    ];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      handleProofOfPay(selected);
      let reader = new FileReader();
      reader.onloadend = () => {
        setProofPreview({ ...proofPreview, err: false, pic: reader.result });
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("File not supported");
      setProofPreview({ ...proofPreview, err: true });
    }
  };
  const copyToClip = (e) => {
    if (e.target.name === "erc") {
      ercRef.current.select();
    } else if (e.target.name === "btc") {
      btcRef.current.select();
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
      {message.status === 400 && <Errormessage>{message.message}</Errormessage>}
      {message.status === 200 && (
        <Successmessage>{message.message}</Successmessage>
      )}
      <h3 className="text-sm mt-5 text-gray-500 font-light">
        Deposit the sum of ${amount} into any of the following wallet addresses
        listed below
      </h3>
      <div className="mt-4 text-center text-turquoise text-2xl">BTC Wallet</div>
      <div className="my-1 flex justify-between text-sm">
        <span className="font-semibold">Bitcoin</span>
        <span className="w-7/10">
          <input
            className="focus:outline-none w-full"
            value="151wk5pFgSRFu7k76CumXsQ4DbnFULBvqJ"
            ref={btcRef}
            readOnly
          />
        </span>
        <span onClick={copyToClip}>
          <img name="btc" src={cp} alt="copy wallet address" />
        </span>
      </div>
      <div className="mt-4 text-center text-turquoise text-2xl">
        USDT Wallet
      </div>
      <div className="my-1 flex justify-between text-sm">
        <span className="font-semibold">ERC20</span>
        <span className="w-7/10">
          <input
            className="focus:outline-none w-full"
            value="0xa0dce2a9b1da882399b991d47e0b72ee546755c3"
            ref={ercRef}
            readOnly
          />
        </span>
        <span onClick={copyToClip}>
          <img name="erc" src={cp} alt="copy wallet address" />
        </span>
      </div>
      {copyState && (
        <span className="flex justify-center items-center w-5/10 mx-auto mt-5 bg-blue-500 rounded text-white text-sm capitalize p-2 md:px-12">
          {copy}
        </span>
      )}
      <h3 className="text-gray-500 my-3 text-xs font-light">
        Please Upload a screenshot of the sucessful transaction and a
        confirmation email will be sent to you after the money has been
        received.
      </h3>
      <div className="border border-gray-200 hover:border-lightteal border-dashed my-2 p-2">
        {!proofOfPay && (
          <div className="p-2">
            <input
              className="hidden"
              type="file"
              id="proofId"
              onChange={(e) => handleFileChange(e)}
            />
            <label htmlFor="proofId" className="flex justify-center py-2">
              <img className="w-16" src={uploadIcon} alt="upload" />
            </label>
          </div>
        )}

        {proofPreview.err && (
          <div className="bg-red-600 md:w-5/10 mx-auto text-white rounded-full text-center p-1">
            File Not Supported
          </div>
        )}
        <div className="grid justify-items-center">
          {proofOfPay && (
            <div
              className="w-40 h-40"
              style={{
                background: proofOfPay
                  ? `url("${proofPreview.pic}") no-repeat center/contain`
                  : "",
              }}
            ></div>
          )}
          {proofOfPay && (
            <div
              onClick={() => {
                handleProofOfPay(null);
                setProofPreview({
                  ...proofPreview,
                  err: false,
                });
              }}
              className="bg-red-600 w-1/10 mx-0 px-0.5 flex justify-center items-center my-2 rounded-full text-white"
            >
              <MdClose className="w-8 h-8" />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="">
          <Link to="#" onClick={() => handleStep(2)}>
            <BiArrowBack className="w-10 h-8 text-gray-500" />
          </Link>
        </div>
        <div className="">
          <button
            disabled={!proofOfPay}
            type="submit"
            className="button flex items-center justify-center"
          >
            {deposit.isLoading && <BtnLoader />}
            confirm
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Crypto;
